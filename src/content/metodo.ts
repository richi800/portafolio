import type { PuntoMetodo } from "@/types"

/** Sección "Cómo trabajo". Sin nombres de empresas. */
export const metodo: PuntoMetodo[] = [
  {
    icono: "pruebas",
    titulo: "Pruebas antes de liberar",
    descripcion:
      "Pruebas funcionales, de regresión, smoke y aceptación de usuario (UAT).",
  },
  {
    icono: "datos",
    titulo: "APIs y datos",
    descripcion:
      "Pruebas y diagnóstico con Postman, validación con SQL y revisión de registros.",
  },
  {
    icono: "organizacion",
    titulo: "Organización",
    descripcion: "Seguimiento de tareas e incidencias en Jira y documentación en Notion.",
  },
  {
    icono: "produccion",
    titulo: "Producción",
    descripcion:
      "Despliegues en Vercel y DigitalOcean, monitoreo y causa raíz documentada.",
  },
]
