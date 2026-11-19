import { certificados } from "@/content/certificados"
import type { AreaCertificado, Certificado } from "@/types"

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
function validar(lista: Certificado[]) {
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
const ordenados = [
  ...validados.filter((c) => c.estado === "completado"),
  ...validados.filter((c) => c.estado === "en-curso"),
]

export function getCertificados(areas?: AreaCertificado[]): Certificado[] {
  return areas ? ordenados.filter((c) => areas.includes(c.area)) : ordenados
}

/** Áreas con al menos un certificado, en el orden de los filtros. */
export function getAreasCertificados(lista: Certificado[]): AreaCertificado[] {
  return ordenAreas.filter((a) => lista.some((c) => c.area === a))
}

const formatoMes = new Intl.DateTimeFormat("es-MX", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
})

/** "2026-03" → "marzo de 2026". */
export function formatearMes(fecha: string): string {
  const [anio, mes] = fecha.split("-").map(Number)
  return formatoMes.format(Date.UTC(anio, mes - 1, 1))
}
