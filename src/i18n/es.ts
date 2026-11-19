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
    servicios: "Servicios",
    comoTrabajo: "Cómo trabajo",
    trayectoria: "Trayectoria",
    sobreMi: "Sobre mí",
    contacto: "Contacto",
    abrirMenu: "Abrir menú",
    cerrarMenu: "Cerrar menú",
    tema: "Cambiar entre modo claro y oscuro",
    nuevaPestana: "(se abre en una pestaña nueva)",
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
      "Mis años en soporte me enseñaron lo que pasa cuando algo falla en producción. Por eso pruebo antes de liberar y sigo ahí después del lanzamiento.",
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
    cv: "Descargar CV (PDF)",
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
