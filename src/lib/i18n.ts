import { locales, type Locale } from "@/i18n/config"
import type { Resuelto, Traducible } from "@/types"

function esTraducible(valor: unknown): valor is Traducible {
  if (typeof valor !== "object" || valor === null || Array.isArray(valor)) return false
  const claves = Object.keys(valor)
  return (
    claves.length === locales.length &&
    locales.every((l) => typeof (valor as Record<string, unknown>)[l] === "string")
  )
}

/** Texto en el idioma pedido. */
export function tr(texto: Traducible, lang: Locale): string {
  return texto[lang]
}

/**
 * Resuelve contenido de `src/content/` a un idioma: cada `Traducible` (objeto con
 * exactamente las claves de los idiomas) se cambia por su texto, a cualquier profundidad.
 */
export function resolver<T>(contenido: T, lang: Locale): Resuelto<T> {
  if (esTraducible(contenido)) return contenido[lang] as Resuelto<T>
  if (Array.isArray(contenido)) {
    return contenido.map((v) => resolver(v, lang)) as Resuelto<T>
  }
  if (typeof contenido === "object" && contenido !== null) {
    return Object.fromEntries(
      Object.entries(contenido).map(([k, v]) => [k, resolver(v, lang)]),
    ) as Resuelto<T>
  }
  return contenido as Resuelto<T>
}

/** Resuelve el contenido una vez por idioma (al cargar el módulo, en el build). */
export function porIdioma<T>(contenido: T): Record<Locale, Resuelto<T>> {
  return Object.fromEntries(locales.map((l) => [l, resolver(contenido, l)])) as Record<
    Locale,
    Resuelto<T>
  >
}
