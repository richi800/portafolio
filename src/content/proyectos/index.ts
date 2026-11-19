import type { Proyecto } from "@/types"

import { agendadoCitas } from "./agendado-citas"
import { inventoryBridge } from "./inventory-bridge"
import { tiendaCentralMedica } from "./tienda-central-medica"

/**
 * Registro de proyectos. Para agregar uno nuevo:
 * 1. Crea un archivo en esta carpeta (copia uno existente).
 * 2. Impórtalo arriba y agrégalo a esta lista.
 * El sitio los ordena por fecha; con fechas iguales, respeta este orden.
 */
export const proyectos: Proyecto[] = [tiendaCentralMedica, inventoryBridge, agendadoCitas]
