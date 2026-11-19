import { casosSoporte, practicasSoporte } from "@/content/soporte"
import type { CasoSoporte } from "@/types"

/** Detecta errores comunes al agregar un caso y falla el build con un mensaje claro. */
function validar(lista: CasoSoporte[]) {
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

const publicados = validar([...casosSoporte]).filter((c) => c.publicado !== false)

/** Casos reales publicados, en el orden de content/soporte.ts. */
export function getCasosSoporte(): CasoSoporte[] {
  return publicados
}

/** Las prácticas que se resumen en el inicio. */
export function getPracticasDestacadas() {
  return practicasSoporte.filter((p) => p.destacada)
}
