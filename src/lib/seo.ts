import type { Metadata } from "next"

import { perfil } from "@/content/perfil"
import { defaultLocale, locales, otroIdioma, regionDe, ruta, type Locale } from "@/i18n/config"

type Imagen = { url: string; alt: string }

/** `alternates.languages` de una página: una URL por idioma y x-default → español. */
export function alternativas(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((l) => [l, ruta(l, path)])),
    "x-default": ruta(defaultLocale, path),
  }
}

/**
 * Metadata común de una página en un idioma: descripción, canonical propio, hreflang
 * (es, en y x-default), Open Graph con locale/alternateLocale y Twitter. `path` es la
 * ruta sin idioma ("/", "/soporte", "/proyectos/mi-slug"). `metadataBase` (layout)
 * convierte las rutas en URLs absolutas.
 *
 * Open Graph y Twitter se reemplazan completos (no se mezclan con los del layout), por eso
 * aquí van todos sus campos.
 */
export function metadataDePagina({
  lang,
  path,
  titulo,
  descripcion,
  tipo = "website",
  imagenes,
}: {
  lang: Locale
  path: string
  titulo: string
  descripcion: string
  tipo?: "website" | "article"
  imagenes?: Imagen[]
}): Metadata {
  const url = ruta(lang, path)
  return {
    description: descripcion,
    alternates: { canonical: url, languages: alternativas(path) },
    openGraph: {
      type: tipo,
      locale: regionDe[lang],
      alternateLocale: [regionDe[otroIdioma(lang)]],
      url,
      siteName: perfil.nombre,
      title: titulo,
      description: descripcion,
      ...(imagenes && { images: imagenes }),
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descripcion,
      ...(imagenes && { images: imagenes }),
    },
  }
}
