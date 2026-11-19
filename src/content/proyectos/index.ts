import type { ProyectoContenido } from "@/types"

import { agendadoCitas } from "./agendado-citas"
import { inventoryBridge } from "./inventory-bridge"
import { pabloBenlliure } from "./pablo-benlliure"
import { tiendaCentralMedica } from "./tienda-central-medica"

/**
 * Registro de proyectos. Para agregar uno nuevo:
 * 1. Crea un archivo en esta carpeta (copia uno existente).
 * 2. Impórtalo arriba y agrégalo a esta lista.
 * ESTE ORDEN es el del sitio: listado, destacados del inicio y navegación.
 * Los proyectos con `publicado: false` se ignoran en todo el sitio.
 */
export const proyectos: ProyectoContenido[] = [
  tiendaCentralMedica,
  inventoryBridge,
  pabloBenlliure,
  agendadoCitas,
]
