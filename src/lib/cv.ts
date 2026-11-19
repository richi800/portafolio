import { existsSync } from "node:fs"
import path from "node:path"

import { perfil } from "@/content/perfil"
import type { VersionCv } from "@/types"

/**
 * Versiones del CV cuyo PDF existe en /public. Se resuelve al compilar: si falta un
 * archivo, su botón simplemente no aparece (por ejemplo el CV de Soporte TI pendiente).
 */
const disponibles = perfil.cvs.filter((cv) =>
  existsSync(path.join(process.cwd(), "public", cv.ruta)),
)

/** CV disponibles; con `primero`, esa ruta va al inicio (en /soporte, el de Soporte TI). */
export function getCvs(primero?: string): VersionCv[] {
  if (!primero) return disponibles
  return [
    ...disponibles.filter((cv) => cv.ruta === primero),
    ...disponibles.filter((cv) => cv.ruta !== primero),
  ]
}

export const rutaCvSoporte = "/cv/ricardo-rivas-cv-soporte-ti.pdf"
