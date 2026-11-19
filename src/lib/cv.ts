import { existsSync } from "node:fs"
import path from "node:path"

import { perfil } from "@/content/perfil"
import type { Locale } from "@/i18n/config"
import { getDiccionarioDe } from "@/i18n/diccionarios"
import type { VersionCv } from "@/types"

const existe = (ruta: string) => existsSync(path.join(process.cwd(), "public", ruta))

/**
 * Versiones del CV cuyo PDF existe en /public, por idioma. Se resuelve al compilar: si falta
 * un archivo, su botón simplemente no aparece (por ejemplo el CV de Soporte TI pendiente).
 * En inglés se ofrece `rutaEn` si existe; si no, el PDF en español con "(Spanish, PDF)".
 */
function versiones(lang: Locale): VersionCv[] {
  const t = getDiccionarioDe(lang).cv
  return perfil.cvs.flatMap((cv): VersionCv[] => {
    const enIngles = lang === "en" && cv.rutaEn !== undefined && existe(cv.rutaEn)
    if (enIngles) {
      return [
        {
          clave: cv.ruta,
          etiqueta: `${cv.etiqueta.en} ${t.pdf}`,
          ruta: cv.rutaEn!,
          idiomaArchivo: "en",
        },
      ]
    }
    if (!existe(cv.ruta)) return []
    return [
      {
        clave: cv.ruta,
        etiqueta: `${cv.etiqueta[lang]} ${lang === "es" ? t.pdf : t.pdfEnEspanol}`,
        ruta: cv.ruta,
        idiomaArchivo: "es",
      },
    ]
  })
}

const disponibles: Record<Locale, VersionCv[]> = { es: versiones("es"), en: versiones("en") }

/** CV disponibles; con `primero`, esa versión va al inicio (en /soporte, la de Soporte TI). */
export function getCvs(lang: Locale, primero?: string): VersionCv[] {
  const lista = disponibles[lang]
  if (!primero) return lista
  return [
    ...lista.filter((cv) => cv.clave === primero),
    ...lista.filter((cv) => cv.clave !== primero),
  ]
}

/** Clave (ruta en español) del CV de Soporte TI. */
export const rutaCvSoporte = "/cv/ricardo-rivas-cv-soporte-ti.pdf"
