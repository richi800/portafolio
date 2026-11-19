import { proyectos } from "@/content/proyectos"
import type { Proyecto } from "@/types"

/** Detecta errores comunes al agregar un proyecto y falla el build con un mensaje claro. */
function validar(lista: Proyecto[]) {
  const vistos = new Set<string>()
  for (const p of lista) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)) {
      throw new Error(`Slug inválido "${p.slug}": usa minúsculas, números y guiones.`)
    }
    if (vistos.has(p.slug)) throw new Error(`Slug repetido: "${p.slug}".`)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(p.fecha) || Number.isNaN(Date.parse(p.fecha))) {
      throw new Error(`Fecha inválida en "${p.slug}": usa AAAA-MM-DD.`)
    }
    vistos.add(p.slug)
  }
  return lista
}

const ordenados = validar([...proyectos]).sort((a, b) => b.fecha.localeCompare(a.fecha))

/** Todos los proyectos, del más reciente al más antiguo. */
export function getProyectos(): Proyecto[] {
  return ordenados
}

export function getProyectosDestacados(): Proyecto[] {
  return ordenados.filter((p) => p.destacado)
}

export function getProyecto(slug: string): Proyecto | undefined {
  return ordenados.find((p) => p.slug === slug)
}

/** Tecnologías únicas, ordenadas por cuántos proyectos las usan. */
export function getTecnologias(): string[] {
  const conteo = new Map<string, number>()
  for (const p of ordenados) {
    for (const t of p.tecnologias) conteo.set(t, (conteo.get(t) ?? 0) + 1)
  }
  return [...conteo.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "es"))
    .map(([t]) => t)
}
