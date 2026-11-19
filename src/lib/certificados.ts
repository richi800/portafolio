import { certificados } from "@/content/certificados"
import { formatoDe, type Locale } from "@/i18n/config"
import type { AreaCertificado, Certificado, CertificadoContenido } from "@/types"

import { porIdioma } from "./i18n"

/** Áreas en el orden en que aparecen los filtros. */
const ordenAreas: AreaCertificado[] = [
  "soporte",
  "seguridad",
  "redes",
  "cloud",
  "desarrollo",
  "datos",
]

/** Detecta errores comunes al agregar un certificado y falla el build con un mensaje claro. */
function validar(lista: CertificadoContenido[]) {
  for (const c of lista) {
    if (c.estado === "completado") {
      const [anio, mes] = (c.fecha ?? "").split("-").map(Number)
      if (!/^\d{4}-\d{2}$/.test(c.fecha ?? "") || mes < 1 || mes > 12 || anio < 1990) {
        throw new Error(
          `Certificado "${c.titulo}": si está completado, "fecha" es obligatoria en formato AAAA-MM.`,
        )
      }
    }
    if (c.urlVerificacion !== undefined && !/^https:\/\/\S+$/.test(c.urlVerificacion)) {
      throw new Error(
        `Certificado "${c.titulo}": "urlVerificacion" debe empezar con https://.`,
      )
    }
  }
  return lista
}

/** Completados primero (en el orden de content/certificados.ts) y después los en curso. */
const validados = validar([...certificados])
const ordenados = porIdioma([
  ...validados.filter((c) => c.estado === "completado"),
  ...validados.filter((c) => c.estado === "en-curso"),
])

export function getCertificados(lang: Locale, areas?: AreaCertificado[]): Certificado[] {
  const lista = ordenados[lang]
  return areas ? lista.filter((c) => areas.includes(c.area)) : lista
}

/** Áreas con al menos un certificado, en el orden de los filtros. */
export function getAreasCertificados(lista: Certificado[]): AreaCertificado[] {
  return ordenAreas.filter((a) => lista.some((c) => c.area === a))
}

const formatosMes = Object.fromEntries(
  Object.entries(formatoDe).map(([l, f]) => [
    l,
    new Intl.DateTimeFormat(f, { month: "long", year: "numeric", timeZone: "UTC" }),
  ]),
) as Record<Locale, Intl.DateTimeFormat>

/** "2026-03" → "marzo de 2026" / "March 2026". */
export function formatearMes(fecha: string, lang: Locale): string {
  const [anio, mes] = fecha.split("-").map(Number)
  return formatosMes[lang].format(Date.UTC(anio, mes - 1, 1))
}
