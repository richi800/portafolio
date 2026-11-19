import type { Proyecto } from "@/types"

import { cliRenombrarFotos } from "./cli-renombrar-fotos"
import { panelFinanzas } from "./panel-finanzas"
import { reservasBarberia } from "./reservas-barberia"

/**
 * Registro de proyectos. Para agregar uno nuevo:
 * 1. Crea un archivo en esta carpeta (copia uno existente).
 * 2. Impórtalo arriba y agrégalo a esta lista.
 * El orden no importa: el sitio los ordena por fecha.
 */
export const proyectos: Proyecto[] = [panelFinanzas, reservasBarberia, cliRenombrarFotos]
