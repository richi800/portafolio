import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { NextResponse, type NextRequest } from "next/server"

import { cookieIdioma, defaultLocale, hasLocale, locales, type Locale } from "@/i18n/config"

/** Idioma para una URL sin prefijo: el elegido con el selector o el del navegador. */
function elegirIdioma(request: NextRequest): Locale {
  const guardado = request.cookies.get(cookieIdioma)?.value
  if (guardado && hasLocale(guardado)) return guardado

  const headers = { "accept-language": request.headers.get("accept-language") ?? "" }
  const preferidos = new Negotiator({ headers }).languages()
  try {
    const elegido = match(preferidos, locales, defaultLocale)
    return hasLocale(elegido) ? elegido : defaultLocale
  } catch {
    // Encabezado mal formado ("*", etiquetas inválidas): idioma por defecto.
    return defaultLocale
  }
}

/**
 * Las URLs sin idioma (/, /soporte, /proyectos/... ya compartidas en LinkedIn y el CV)
 * redirigen con 308 a su versión con idioma, conservando la query string.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const tieneIdioma = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  )
  if (tieneIdioma) return

  const url = request.nextUrl.clone()
  url.pathname = `/${elegirIdioma(request)}${pathname === "/" ? "" : pathname}`
  const respuesta = NextResponse.redirect(url, 308)
  // La redirección depende de la cookie y del navegador: que nadie la guarde en caché
  // (los navegadores guardan las 308 para siempre si no se les indica lo contrario).
  respuesta.headers.set("Cache-Control", "private, no-store")
  respuesta.headers.set("Vary", "Accept-Language, Cookie")
  return respuesta
}

export const config = {
  matcher: [
    /*
     * Todo excepto: internos de Next y Vercel, la API, cualquier archivo con extensión
     * (imágenes, CV en PDF, sitemap.xml, robots.txt, icon.svg, apple-icon.png...) y las
     * imágenes para redes generadas en la raíz.
     */
    "/((?!_next/|_vercel/|api/|opengraph-image|twitter-image|.*\\.[^/]+$).*)",
  ],
}
