import type { CasoSoporte, PasoIncidente, PracticaSoporte } from "@/types"

/**
 * Apartado "Soporte de producción" (/soporte y la sección del inicio).
 * Reglas de honestidad: docs/plan-soporte-y-certificaciones.md, sección 2. Confirmado por Ricardo:
 * Coordinador de TI con soporte SaaS L3 (Grupo Komunah). Sin confirmar: SLA, MTTR ni métricas.
 */
export const introSoporte = {
  /** Frase de apertura aprobada. */
  frase:
    "Conecto soporte e ingeniería: reproduzco fallas, encuentro la causa raíz y convierto incidentes en mejoras permanentes.",
  experiencia:
    "Antes de programar sistemas estuve del lado del soporte. Durante seis años fui Coordinador de TI, a cargo del soporte SaaS L3: atendí las escalaciones más complejas y coordiné la mesa de ayuda y la infraestructura de la empresa (Microsoft 365, redes, CRM y ERP). Hoy, como desarrollador, sigo dando soporte en producción a los sistemas que construyo: despliegues, servidor Linux, diagnóstico de errores y corrección.",
}

/** "Así trabajo un incidente": el orden del arreglo es el orden de los pasos. */
export const cicloIncidente: PasoIncidente[] = [
  {
    titulo: "Detectar",
    descripcion:
      "Entiendo el síntoma tal como lo vive el usuario y confirmo que se puede reproducir.",
  },
  {
    titulo: "Priorizar por impacto",
    descripcion:
      "Ordeno por usuarios afectados, funciones críticas y efecto en el negocio, no por orden de llegada.",
  },
  {
    titulo: "Diagnosticar con evidencia",
    descripcion:
      "Reviso registros, respuestas de la API, datos en la base y cambios recientes antes de suponer.",
  },
  {
    titulo: "Mitigar",
    descripcion:
      "Primero restablezco el servicio de forma segura; la solución definitiva viene después.",
  },
  {
    titulo: "Resolver",
    descripcion:
      "Pruebo la corrección en un entorno controlado, la libero con plan de reversa y la valido en producción.",
  },
  {
    titulo: "Causa raíz",
    descripcion: "Documento qué pasó, por qué y qué lo permitió, sin buscar culpables.",
  },
  {
    titulo: "Prevenir",
    descripcion:
      "Convierto lo aprendido en una prueba, una alerta, una guía o una mejora del sistema.",
  },
]

/**
 * Buenas prácticas: principios de trabajo, no logros medidos. Las `destacada` (cuatro) se
 * resumen en la sección "Soporte y confiabilidad" del inicio.
 */
export const practicasSoporte: PracticaSoporte[] = [
  {
    icono: "incidentes",
    titulo: "Prioridad por impacto",
    destacada: true,
    descripcion:
      "Atiendo primero lo que afecta a más usuarios o a funciones críticas del negocio.",
  },
  {
    icono: "diagnostico",
    titulo: "Diagnóstico con evidencia",
    destacada: true,
    descripcion:
      "Registros, códigos HTTP, consultas SQL y cambios recientes: decido con datos, no con suposiciones.",
  },
  {
    icono: "integraciones",
    titulo: "Escalamientos completos",
    descripcion:
      "Cuando escalo, entrego impacto, pasos para reproducir, evidencia, lo que ya probé y mi hipótesis.",
  },
  {
    icono: "produccion",
    titulo: "Cambios seguros",
    descripcion:
      "Reproduzco antes de tocar producción, uso el mínimo acceso necesario y siempre tengo cómo revertir.",
  },
  {
    icono: "documentacion",
    titulo: "Causa raíz sin culpables",
    destacada: true,
    descripcion:
      "Documento qué falló y qué lo permitió para corregir el proceso, no para señalar personas.",
  },
  {
    icono: "automatizacion",
    titulo: "Prevención",
    destacada: true,
    descripcion: "Lo que se repite se vuelve guía, prueba, alerta o mejora del sistema.",
  },
  {
    icono: "comunicacion",
    titulo: "Comunicación clara",
    descripcion:
      "Informo impacto, estado y siguientes pasos sin prometer tiempos que no puedo cumplir.",
  },
  {
    icono: "seguridad",
    titulo: "Datos protegidos",
    descripcion:
      "Comparto evidencia sin contraseñas, tokens ni datos personales de usuarios.",
  },
]

/** Solo herramientas confirmadas (plan, sección 2.1). Agrega más solo si las usaste. */
export const herramientasSoporte: string[] = [
  "Postman",
  "SQL",
  "Jira",
  "Notion",
  "Git",
  "Linux",
  "Microsoft 365",
  "Redes",
  "Vercel",
  "DigitalOcean",
]

/**
 * Casos reales anonimizados (síntoma → flujo → evidencia → hipótesis → causa raíz →
 * mitigación y solución → prevención → resultado). Sin datos de clientes ni de usuarios.
 * Mientras esté vacío, el bloque "Casos reales" no aparece en /soporte.
 */
export const casosSoporte: CasoSoporte[] = []
