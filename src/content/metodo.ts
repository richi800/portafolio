import type { PuntoMetodoContenido } from "@/types"

/**
 * Sección "Cómo trabajo": el proceso de DESARROLLO. La operación y los incidentes van en
 * "Soporte y confiabilidad" (content/soporte.ts). Sin nombres de empresas.
 */
export const metodo: PuntoMetodoContenido[] = [
  {
    icono: "pruebas",
    titulo: { es: "Calidad antes de liberar", en: "Quality before release" },
    descripcion: {
      es: "Pruebo cada cambio antes de publicarlo: pruebas funcionales, de regresión y validación con el usuario final (UAT).",
      en: "I test every change before it goes live: functional testing, regression testing and validation with end users (UAT).",
    },
  },
  {
    icono: "datos",
    titulo: { es: "APIs y datos", en: "APIs and data" },
    descripcion: {
      es: "Pruebo y depuro APIs con Postman, y valido la información directo en la base de datos con SQL.",
      en: "I test and debug APIs with Postman, and validate the data directly in the database with SQL.",
    },
  },
  {
    icono: "organizacion",
    titulo: { es: "Orden y documentación", en: "Organization and documentation" },
    descripcion: {
      es: "Tareas e incidencias en Jira y documentación técnica en Notion.",
      en: "Tasks and issues tracked in Jira, technical documentation in Notion.",
    },
  },
  {
    icono: "produccion",
    titulo: { es: "Producción", en: "Production" },
    descripcion: {
      es: "Despliegues con Git en Vercel y DigitalOcean, y acompañamiento después del lanzamiento.",
      en: "Git-based deployments to Vercel and DigitalOcean, and support after launch.",
    },
  },
]
