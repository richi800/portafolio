import type {
  CasoSoporteContenido,
  PasoIncidenteContenido,
  PracticaSoporteContenido,
  Traducible,
} from "@/types"

/**
 * Apartado "Soporte de producción" (/soporte y la sección del inicio).
 * Reglas de honestidad: docs/plan-soporte-y-certificaciones.md, sección 2. Confirmado por Ricardo:
 * Coordinador de TI con soporte SaaS L3 (Grupo Komunah). Sin confirmar: SLA, MTTR ni métricas.
 * Las mismas reglas aplican a la versión en inglés: es la misma información, no una mejorada.
 */
export const introSoporte: { frase: Traducible; experiencia: Traducible } = {
  /** Frase de apertura aprobada. */
  frase: {
    es: "Conecto soporte e ingeniería: reproduzco fallas, encuentro la causa raíz y convierto incidentes en mejoras permanentes.",
    en: "I bridge support and engineering: I reproduce failures, find the root cause and turn incidents into lasting improvements.",
  },
  experiencia: {
    es: "Antes de programar sistemas estuve del lado del soporte. Durante seis años fui Coordinador de TI, a cargo del soporte SaaS L3: atendí las escalaciones más complejas y coordiné la mesa de ayuda y la infraestructura de la empresa (Microsoft 365, redes, CRM y ERP). Hoy, como desarrollador, sigo dando soporte en producción a los sistemas que construyo: despliegues, servidor Linux, diagnóstico de errores y corrección.",
    en: "Before building systems, I worked on the support side. For six years I was IT Coordinator, in charge of SaaS Support (L3): I handled the most complex escalations and coordinated the company's help desk and infrastructure (Microsoft 365, networking, CRM and ERP). Today, as a developer, I still provide production support for the systems I build: deployments, the Linux server, troubleshooting and fixes.",
  },
}

/** "Así trabajo un incidente": el orden del arreglo es el orden de los pasos. */
export const cicloIncidente: PasoIncidenteContenido[] = [
  {
    titulo: { es: "Detectar", en: "Detect" },
    descripcion: {
      es: "Entiendo el síntoma tal como lo vive el usuario y confirmo que se puede reproducir.",
      en: "I understand the symptom the way the user experiences it and confirm I can reproduce it.",
    },
  },
  {
    titulo: { es: "Priorizar por impacto", en: "Prioritize by impact" },
    descripcion: {
      es: "Ordeno por usuarios afectados, funciones críticas y efecto en el negocio, no por orden de llegada.",
      en: "I prioritize by affected users, critical features and business impact, not by arrival order.",
    },
  },
  {
    titulo: { es: "Diagnosticar con evidencia", en: "Diagnose with evidence" },
    descripcion: {
      es: "Reviso registros, respuestas de la API, datos en la base y cambios recientes antes de suponer.",
      en: "I check logs, API responses, database records and recent changes before assuming anything.",
    },
  },
  {
    titulo: { es: "Mitigar", en: "Mitigate" },
    descripcion: {
      es: "Primero restablezco el servicio de forma segura; la solución definitiva viene después.",
      en: "First I restore the service safely; the permanent fix comes next.",
    },
  },
  {
    titulo: { es: "Resolver", en: "Resolve" },
    descripcion: {
      es: "Pruebo la corrección en un entorno controlado, la libero con plan de reversa y la valido en producción.",
      en: "I test the fix in a controlled environment, release it with a rollback plan and validate it in production.",
    },
  },
  {
    titulo: { es: "Causa raíz", en: "Root cause" },
    descripcion: {
      es: "Documento qué pasó, por qué y qué lo permitió, sin buscar culpables.",
      en: "I document what happened, why, and what allowed it, without looking for someone to blame.",
    },
  },
  {
    titulo: { es: "Prevenir", en: "Prevent" },
    descripcion: {
      es: "Convierto lo aprendido en una prueba, una alerta, una guía o una mejora del sistema.",
      en: "I turn what I learned into a test, an alert, a runbook or a system improvement.",
    },
  },
]

/**
 * Buenas prácticas: principios de trabajo, no logros medidos. Las `destacada` (cuatro) se
 * resumen en la sección "Soporte y confiabilidad" del inicio.
 */
export const practicasSoporte: PracticaSoporteContenido[] = [
  {
    icono: "incidentes",
    titulo: { es: "Prioridad por impacto", en: "Impact-based priority" },
    destacada: true,
    descripcion: {
      es: "Atiendo primero lo que afecta a más usuarios o a funciones críticas del negocio.",
      en: "I handle first whatever affects the most users or business-critical features.",
    },
  },
  {
    icono: "diagnostico",
    titulo: { es: "Diagnóstico con evidencia", en: "Evidence-based diagnosis" },
    destacada: true,
    descripcion: {
      es: "Registros, códigos HTTP, consultas SQL y cambios recientes: decido con datos, no con suposiciones.",
      en: "Logs, HTTP status codes, SQL queries and recent changes: I decide based on data, not assumptions.",
    },
  },
  {
    icono: "integraciones",
    titulo: { es: "Escalamientos completos", en: "Complete escalations" },
    descripcion: {
      es: "Cuando escalo, entrego impacto, pasos para reproducir, evidencia, lo que ya probé y mi hipótesis.",
      en: "When I escalate, I hand over the impact, steps to reproduce, evidence, what I already tried and my hypothesis.",
    },
  },
  {
    icono: "produccion",
    titulo: { es: "Cambios seguros", en: "Safe changes" },
    descripcion: {
      es: "Reproduzco antes de tocar producción, uso el mínimo acceso necesario y siempre tengo cómo revertir.",
      en: "I reproduce issues before touching production, use the minimum access needed and always have a way to roll back.",
    },
  },
  {
    icono: "documentacion",
    titulo: { es: "Causa raíz sin culpables", en: "Blameless root cause analysis" },
    destacada: true,
    descripcion: {
      es: "Documento qué falló y qué lo permitió para corregir el proceso, no para señalar personas.",
      en: "I document what failed and what allowed it in order to fix the process, not to point fingers.",
    },
  },
  {
    icono: "automatizacion",
    titulo: { es: "Prevención", en: "Prevention" },
    destacada: true,
    descripcion: {
      es: "Lo que se repite se vuelve guía, prueba, alerta o mejora del sistema.",
      en: "Anything that repeats becomes a runbook, a test, an alert or a system improvement.",
    },
  },
  {
    icono: "comunicacion",
    titulo: { es: "Comunicación clara", en: "Clear communication" },
    descripcion: {
      es: "Informo impacto, estado y siguientes pasos sin prometer tiempos que no puedo cumplir.",
      en: "I report impact, status and next steps without promising timelines I can't meet.",
    },
  },
  {
    icono: "seguridad",
    titulo: { es: "Datos protegidos", en: "Protected data" },
    descripcion: {
      es: "Comparto evidencia sin contraseñas, tokens ni datos personales de usuarios.",
      en: "I share evidence without passwords, tokens or users' personal data.",
    },
  },
]

/** Solo herramientas confirmadas (plan, sección 2.1). Agrega más solo si las usaste. */
export const herramientasSoporte: (string | Traducible)[] = [
  "Postman",
  "SQL",
  "Jira",
  "Notion",
  "Git",
  "Linux",
  "Microsoft 365",
  { es: "Redes", en: "Networking" },
  "Vercel",
  "DigitalOcean",
]

/**
 * Casos reales anonimizados (síntoma → flujo → evidencia → hipótesis → causa raíz →
 * mitigación y solución → prevención → resultado). Sin datos de clientes ni de usuarios.
 * Cada texto va en { es, en }. Mientras esté vacío, el bloque "Casos reales" no aparece.
 */
export const casosSoporte: CasoSoporteContenido[] = []
