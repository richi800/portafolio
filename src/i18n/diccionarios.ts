import type { Locale } from "./config"
import { en } from "./en"
import { es, type Diccionario } from "./es"

const diccionarios: Record<Locale, Diccionario> = { es, en }

/**
 * Diccionario de un idioma dado. Para donde no hay root params (imágenes OG, sitemap,
 * cálculos al cargar un módulo). En Server Components usa `getDiccionario()` de `@/i18n`.
 */
export function getDiccionarioDe(locale: Locale): Diccionario {
  return diccionarios[locale]
}

export type { Diccionario }
