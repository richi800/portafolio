import { notFound } from "next/navigation"
import { lang } from "next/root-params"

import { hasLocale, type Locale } from "./config"
import { getDiccionarioDe, type Diccionario } from "./diccionarios"

export { getDiccionarioDe }

/**
 * Idioma de la página actual, leído del primer segmento de la ruta (/es, /en).
 * Solo en Server Components: los Client Components reciben sus textos por props.
 */
export async function getLang(): Promise<Locale> {
  const valor = await lang()
  if (!hasLocale(valor)) notFound()
  return valor
}

/** Textos de interfaz del idioma de la página actual. */
export async function getDiccionario(): Promise<Diccionario> {
  return getDiccionarioDe(await getLang())
}
