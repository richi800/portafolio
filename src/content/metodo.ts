import type { PuntoMetodo } from "@/types"

/** Sección "Cómo trabajo". Sin nombres de empresas. */
export const metodo: PuntoMetodo[] = [
  {
    icono: "pruebas",
    titulo: "Calidad antes de liberar",
    descripcion:
      "Pruebo cada cambio antes de publicarlo: pruebas funcionales, de regresión y validación con el usuario final (UAT).",
  },
  {
    icono: "datos",
    titulo: "APIs y datos",
    descripcion:
      "Pruebo y depuro APIs con Postman, y valido la información directo en la base de datos con SQL.",
  },
  {
    icono: "organizacion",
    titulo: "Orden y documentación",
    descripcion: "Tareas e incidencias en Jira y documentación técnica en Notion.",
  },
  {
    icono: "produccion",
    titulo: "Producción",
    descripcion:
      "Despliegues con Git en Vercel y DigitalOcean. Si algo falla, encuentro la causa raíz y la dejo documentada.",
  },
]
