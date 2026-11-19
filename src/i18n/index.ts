import { defaultLocale, type Locale } from "./config"
import { es, type Diccionario } from "./es"

const diccionarios: Record<Locale, Diccionario> = { es }

export function getDiccionario(locale: Locale = defaultLocale): Diccionario {
  return diccionarios[locale]
}
