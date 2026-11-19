import type { Diccionario } from "./es"

/**
 * Textos de la interfaz en inglés. Mismas claves que `es.ts`: TypeScript falla si falta
 * alguna. Inglés natural para reclutadores de EE. UU., sin agregar nada que no diga la
 * versión en español.
 */
export const en: Diccionario = {
  meta: {
    titulo: "Ricardo Rivas Rosado · Freelance Full Stack Developer in Mérida, Mexico",
    descripcion:
      "Full Stack Developer in Mérida, Yucatán, Mexico. Online stores, custom systems and integrations built with Next.js, React, TypeScript and Laravel. Available for freelance projects and new opportunities.",
  },
  nav: {
    saltar: "Skip to content",
    principal: "Main navigation",
    inicio: "Home",
    proyectos: "Projects",
    soporte: "Support",
    servicios: "Services",
    trayectoria: "Experience",
    sobreMi: "About",
    contacto: "Contact",
    abrirMenu: "Open menu",
    cerrarMenu: "Close menu",
    tema: "Switch between light and dark mode",
    nuevaPestana: "(opens in a new tab)",
  },
  idioma: {
    grupo: "Language",
    ver: { es: "Ver en español", en: "View in English" },
  },
  cv: {
    pdf: "(PDF)",
    pdfEnEspanol: "(Spanish, PDF)",
    enEspanol: "(Spanish)",
  },
  hero: {
    cotizar: "Get a quote",
    verProyectos: "View projects",
    stack: "Main stack",
  },
  datosRapidos: {
    titulo: "At a glance",
  },
  destacados: {
    titulo: "Featured projects",
    intro:
      "Real projects I designed and built, all running in production today. Each one is told as a case study.",
    verTodos: "View all projects",
  },
  servicios: {
    titulo: "Services",
    intro:
      "How I can help: from the first version all the way to maintenance in production.",
    incluye: "Includes",
    cotizar: "Get a quote",
  },
  comoTrabajo: {
    titulo: "How I work",
    intro:
      "How I run a project: I test before every release, keep the work organized and stay involved after launch.",
  },
  soporteResumen: {
    titulo: "Support and reliability",
    enlace: "See how I handle support",
  },
  soportePagina: {
    titulo: "Production Support",
    metaTitulo: "Production Support · Ricardo Rivas Rosado",
    metaDescripcion:
      "L3 SaaS support, production support and troubleshooting: incident response, root cause analysis (RCA), REST APIs, SQL and runbooks. Technical and production support by Ricardo Rivas Rosado, Full Stack Developer.",
    cvSoporte: "Download IT Support Resume",
    whatsapp: "Message me on WhatsApp",
    ciclo: "How I handle an incident",
    cicloIntro:
      "Seven steps, from the first alert to the improvement that keeps it from happening again.",
    practicas: "Best practices",
    practicasIntro: "The principles I follow whenever something fails in production.",
    casos: "Real cases",
    casosIntro: "Real, anonymized incidents: no customer or user data.",
    herramientas: "Tools",
    herramientasIntro: "What I use to diagnose, document and deploy.",
    certificados: "Support and security certifications",
    pasos: {
      sintoma: "Symptom and impact",
      flujo: "Affected flow",
      evidencia: "Evidence",
      hipotesis: "Hypotheses",
      causaRaiz: "Root cause",
      solucion: "Mitigation and fix",
      prevencion: "Prevention",
      resultado: "Outcome",
    },
    investigada: "What I found",
    contexto: "Context",
    stack: "Tech stack",
    ctaTitulo: "Something failing in production?",
    ctaIntro:
      "Tell me what's going on and we'll look into it: diagnosis, a fix, and whatever it takes to keep it from happening again.",
  },
  certificados: {
    titulo: "Certifications and continuous learning",
    intro: "What I'm studying to keep growing in support, security and development.",
    enCurso: "In progress",
    verificar: "Verify",
    todas: "All",
    filtrar: "Filter by area",
    horas: (n: number) => (n === 1 ? "1 hour" : `${n} hours`),
    resultados: (n: number) => (n === 1 ? "1 certificate" : `${n} certificates`),
    areas: {
      soporte: "Support",
      seguridad: "Security",
      redes: "Networking",
      cloud: "Cloud",
      desarrollo: "Development",
      datos: "Data",
    },
  },
  trayectoria: {
    titulo: "From IT operations to code",
    intro:
      "I started out solving support and infrastructure issues; today I design and build the systems.",
    educacion: "Education",
    despues: "then",
  },
  sobreMi: {
    titulo: "About me",
  },
  habilidades: {
    titulo: "Skills",
    intro: "Technologies I use in real projects, in production.",
  },
  contacto: {
    titulo: "Have a project in mind?",
    intro:
      "An online store, a custom system, an integration or an open role on your team: tell me what you need and let's talk.",
    whatsapp: "Message me on WhatsApp",
    correo: "Send an email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  proyectos: {
    titulo: "Projects",
    intro:
      "Case studies of systems in production. Filter by technology to see the ones you care about.",
    filtrar: "Filter by technology",
    todas: "All",
    resultados: (n: number) => (n === 1 ? "1 project" : `${n} projects`),
    vacio: "No project uses that technology yet. Pick another one or show them all.",
    verProyecto: "View project",
  },
  detalle: {
    volver: "All projects",
    codigo: "View code",
    demo: "Visit site",
    cliente: "Client",
    tecnologias: "Technologies",
    problema: "The problem",
    solucion: "The solution",
    stack: "Tech stack",
    resultado: "Outcome",
    video: "Video",
    galeria: "Gallery",
    reproducir: (titulo: string) => `Play video: ${titulo}`,
    cotizar: "Need something similar?",
  },
  noEncontrado: {
    titulo: "This page doesn't exist",
    texto: "The link may be mistyped, or the page may have moved.",
    inicio: "Go to the home page",
    proyectos: "View projects",
  },
  footer: {
    hecho: "Built with Next.js and deployed on Vercel.",
  },
}
