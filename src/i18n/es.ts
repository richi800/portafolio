/** Textos de la interfaz en español. El contenido (perfil, proyectos) vive en /src/content. */
export const es = {
  meta: {
    titulo: "Ricardo Rivas Rosado · Desarrollador Full Stack Freelance en Mérida",
    descripcion:
      "Desarrollador Full Stack en Mérida, Yucatán. Tiendas en línea, sistemas a medida e integraciones con Next.js, React, TypeScript y Laravel. Disponible para proyectos freelance y nuevas oportunidades.",
  },
  nav: {
    saltar: "Saltar al contenido",
    principal: "Navegación principal",
    inicio: "Inicio",
    proyectos: "Proyectos",
    soporte: "Soporte",
    servicios: "Servicios",
    trayectoria: "Trayectoria",
    sobreMi: "Sobre mí",
    contacto: "Contacto",
    abrirMenu: "Abrir menú",
    cerrarMenu: "Cerrar menú",
    tema: "Cambiar entre modo claro y oscuro",
    nuevaPestana: "(se abre en una pestaña nueva)",
  },
  idioma: {
    grupo: "Idioma",
    /** Iguales en ambos diccionarios: cada opción se anuncia en su propio idioma. */
    ver: { es: "Ver en español", en: "View in English" },
  },
  cv: {
    /** Sufijo de los botones de CV. */
    pdf: "(PDF)",
    /** Si en este idioma no hay versión traducida y se ofrece el PDF en español. */
    pdfEnEspanol: "(PDF)",
    enEspanol: "",
  },
  hero: {
    cotizar: "Cotizar proyecto",
    verProyectos: "Ver proyectos",
    stack: "Stack principal",
  },
  datosRapidos: {
    titulo: "En resumen",
  },
  destacados: {
    titulo: "Proyectos destacados",
    intro:
      "Proyectos reales que diseñé y desarrollé, y que hoy están en producción. Cada uno contado como caso de estudio.",
    verTodos: "Ver todos los proyectos",
  },
  servicios: {
    titulo: "Servicios",
    intro:
      "En qué te puedo ayudar: desde la primera versión hasta el mantenimiento en producción.",
    incluye: "Incluye",
    cotizar: "Cotizar proyecto",
  },
  comoTrabajo: {
    titulo: "Cómo trabajo",
    intro:
      "Cómo llevo un desarrollo: pruebo antes de liberar, ordeno el trabajo y sigo ahí después del lanzamiento.",
  },
  soporteResumen: {
    titulo: "Soporte y confiabilidad",
    enlace: "Ver cómo trabajo el soporte",
  },
  soportePagina: {
    titulo: "Soporte de producción",
    metaTitulo: "Soporte de producción · Ricardo Rivas Rosado",
    metaDescripcion:
      "Soporte SaaS L3, Production Support y troubleshooting: incident response, análisis de causa raíz (RCA), APIs REST, SQL y runbooks. Soporte técnico y de producción de Ricardo Rivas Rosado, Desarrollador Full Stack.",
    cvSoporte: "Descargar CV Soporte TI",
    whatsapp: "Escribir por WhatsApp",
    ciclo: "Así trabajo un incidente",
    cicloIntro: "Siete pasos, del primer aviso a la mejora que evita que se repita.",
    practicas: "Buenas prácticas",
    practicasIntro: "Los principios con los que atiendo cualquier falla en producción.",
    casos: "Casos reales",
    casosIntro: "Incidentes reales, anonimizados: sin datos de clientes ni de usuarios.",
    herramientas: "Herramientas",
    herramientasIntro: "Lo que uso para diagnosticar, documentar y desplegar.",
    certificados: "Certificaciones de soporte y seguridad",
    pasos: {
      sintoma: "Síntoma e impacto",
      flujo: "Flujo afectado",
      evidencia: "Evidencia",
      hipotesis: "Hipótesis",
      causaRaiz: "Causa raíz",
      solucion: "Mitigación y solución",
      prevencion: "Prevención",
      resultado: "Resultado",
    },
    investigada: "Lo que encontré",
    contexto: "Contexto",
    stack: "Tecnologías",
    ctaTitulo: "¿Algo falla en producción?",
    ctaIntro:
      "Cuéntame qué está pasando y lo revisamos: diagnóstico, corrección y lo necesario para que no se repita.",
  },
  certificados: {
    titulo: "Certificaciones y formación continua",
    intro:
      "Lo que estoy estudiando para seguir creciendo en soporte, seguridad y desarrollo.",
    enCurso: "En curso",
    verificar: "Verificar",
    todas: "Todas",
    filtrar: "Filtrar por área",
    horas: (n: number) => (n === 1 ? "1 hora" : `${n} horas`),
    resultados: (n: number) => (n === 1 ? "1 certificado" : `${n} certificados`),
    areas: {
      soporte: "Soporte",
      seguridad: "Seguridad",
      redes: "Redes",
      cloud: "Cloud",
      desarrollo: "Desarrollo",
      datos: "Datos",
    },
  },
  trayectoria: {
    titulo: "De la operación al código",
    intro:
      "Empecé resolviendo incidencias de soporte e infraestructura; hoy diseño y construyo los sistemas.",
    educacion: "Educación",
    despues: "después",
  },
  sobreMi: {
    titulo: "Sobre mí",
  },
  habilidades: {
    titulo: "Habilidades",
    intro: "Tecnologías que uso en proyectos reales, en producción.",
  },
  contacto: {
    titulo: "¿Tienes un proyecto en mente?",
    intro:
      "Una tienda en línea, un sistema a medida, una integración o una vacante en tu equipo: cuéntame qué necesitas y lo platicamos.",
    whatsapp: "Escribir por WhatsApp",
    correo: "Enviar correo",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  proyectos: {
    titulo: "Proyectos",
    intro:
      "Casos de estudio de sistemas en producción. Filtra por tecnología para ver los que te interesan.",
    filtrar: "Filtrar por tecnología",
    todas: "Todas",
    resultados: (n: number) => (n === 1 ? "1 proyecto" : `${n} proyectos`),
    vacio: "Ningún proyecto usa esa tecnología todavía. Elige otra o muestra todos.",
    verProyecto: "Ver proyecto",
  },
  detalle: {
    volver: "Todos los proyectos",
    codigo: "Ver código",
    demo: "Visitar sitio",
    cliente: "Cliente",
    tecnologias: "Tecnologías",
    problema: "El problema",
    solucion: "La solución",
    stack: "Stack",
    resultado: "Resultado",
    video: "Video",
    galeria: "Galería",
    reproducir: (titulo: string) => `Reproducir video: ${titulo}`,
    cotizar: "¿Necesitas algo parecido?",
  },
  noEncontrado: {
    titulo: "Esta página no existe",
    texto: "Puede que el enlace esté mal escrito o que la página se haya movido.",
    inicio: "Ir al inicio",
    proyectos: "Ver proyectos",
  },
  footer: {
    hecho: "Hecho con Next.js y desplegado en Vercel.",
  },
}

export type Diccionario = typeof es
