/**
 * Idiomas del sitio. Las rutas llevan el idioma como primer segmento (/es, /en) y
 * `src/proxy.ts` redirige las URLs sin idioma. Para agregar otro idioma: súmalo a
 * `locales`, crea su diccionario con las mismas claves que `es.ts`, regístralo en
 * `index.ts` y agrega su texto a cada campo `Traducible` de `src/content/`.
 */
export const locales = ["es", "en"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "es"

export const hasLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v)

/** Para metadata (og:locale). */
export const regionDe: Record<Locale, string> = { es: "es_MX", en: "en_US" }

/** Para Intl (fechas y números). */
export const formatoDe: Record<Locale, string> = { es: "es-MX", en: "en-US" }

/** Cookie que guarda el idioma elegido con el selector; el proxy la respeta. */
export const cookieIdioma = "idioma"

/** El otro idioma (el sitio tiene dos). */
export const otroIdioma = (lang: Locale): Locale => (lang === "es" ? "en" : "es")

/**
 * Ruta interna con el prefijo de idioma: ruta("en", "/soporte") → "/en/soporte",
 * ruta("es", "/") → "/es", ruta("es", "/#contacto") → "/es#contacto".
 */
export function ruta(lang: Locale, path: string = "/"): string {
  if (path === "/" || path === "") return `/${lang}`
  if (path.startsWith("/#")) return `/${lang}${path.slice(1)}`
  return `/${lang}${path.startsWith("/") ? path : `/${path}`}`
}
