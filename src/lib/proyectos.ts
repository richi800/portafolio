import { proyectos } from "@/content/proyectos"
import type { Locale } from "@/i18n/config"
import type { Proyecto, ProyectoContenido } from "@/types"

import { porIdioma } from "./i18n"

/** Detecta errores comunes al agregar un proyecto y falla el build con un mensaje claro. */
function validar(lista: ProyectoContenido[]) {
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

/** Proyectos publicados, en el orden de content/proyectos/index.ts, ya en cada idioma. */
const ordenados = porIdioma(
  validar([...proyectos]).filter((p) => p.publicado !== false),
)

/** Todos los proyectos publicados, en el orden del registro. */
export function getProyectos(lang: Locale): Proyecto[] {
  return ordenados[lang]
}

export function getProyectosDestacados(lang: Locale): Proyecto[] {
  return ordenados[lang].filter((p) => p.destacado)
}

export function getProyecto(slug: string, lang: Locale): Proyecto | undefined {
  return ordenados[lang].find((p) => p.slug === slug)
}

/** Tecnologías únicas, ordenadas por cuántos proyectos las usan (no dependen del idioma). */
export function getTecnologias(): string[] {
  const conteo = new Map<string, number>()
  for (const p of ordenados.es) {
    for (const t of p.tecnologias) conteo.set(t, (conteo.get(t) ?? 0) + 1)
  }
  return [...conteo.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "es"))
    .map(([t]) => t)
}
