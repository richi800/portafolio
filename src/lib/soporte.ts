import {
  casosSoporte,
  cicloIncidente,
  herramientasSoporte,
  introSoporte,
  practicasSoporte,
} from "@/content/soporte"
import type { Locale } from "@/i18n/config"
import type { CasoSoporteContenido } from "@/types"

import { porIdioma } from "./i18n"

/** Detecta errores comunes al agregar un caso y falla el build con un mensaje claro. */
function validar(lista: CasoSoporteContenido[]) {
  const vistos = new Set<string>()
  for (const c of lista) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(c.slug)) {
      throw new Error(
        `Slug de caso inválido "${c.slug}": usa minúsculas, números y guiones.`,
      )
    }
    if (vistos.has(c.slug)) throw new Error(`Slug de caso repetido: "${c.slug}".`)
    vistos.add(c.slug)
  }
  return lista
}

const soporte = porIdioma({
  intro: introSoporte,
  ciclo: cicloIncidente,
  practicas: practicasSoporte,
  herramientas: herramientasSoporte,
  casos: validar([...casosSoporte]).filter((c) => c.publicado !== false),
})

/** Frase de apertura y párrafo de experiencia. */
export const getIntroSoporte = (lang: Locale) => soporte[lang].intro

/** Pasos de "Así trabajo un incidente". */
export const getCicloIncidente = (lang: Locale) => soporte[lang].ciclo

export const getPracticasSoporte = (lang: Locale) => soporte[lang].practicas

/** Las prácticas que se resumen en el inicio. */
export const getPracticasDestacadas = (lang: Locale) =>
  soporte[lang].practicas.filter((p) => p.destacada)

export const getHerramientasSoporte = (lang: Locale) => soporte[lang].herramientas

/** Casos reales publicados, en el orden de content/soporte.ts. */
export const getCasosSoporte = (lang: Locale) => soporte[lang].casos
