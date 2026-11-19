/** Textos de la interfaz en español. El contenido (perfil, proyectos) vive en /src/content. */
export const es = {
  meta: {
    descripcion:
      "Portafolio de Ricardo Rivas, desarrollador web full stack. Proyectos, habilidades y contacto.",
  },
  nav: {
    saltar: "Saltar al contenido",
    principal: "Navegación principal",
    inicio: "Inicio",
    sobreMi: "Sobre mí",
    proyectos: "Proyectos",
    contacto: "Contacto",
    abrirMenu: "Abrir menú",
    cerrarMenu: "Cerrar menú",
    tema: "Cambiar entre modo claro y oscuro",
    nuevaPestana: "(se abre en una pestaña nueva)",
  },
  hero: {
    verProyectos: "Ver proyectos",
    contactar: "Escríbeme",
  },
  sobreMi: {
    titulo: "Sobre mí",
    ubicacion: "Ubicación",
    disponibilidad: "Disponibilidad",
    idiomas: "Idiomas",
  },
  destacados: {
    titulo: "Proyectos destacados",
    intro: "Una selección de trabajos recientes, con su código abierto en GitHub.",
    verTodos: "Ver todos los proyectos",
  },
  habilidades: {
    titulo: "Habilidades",
    intro: "Las herramientas con las que trabajo a diario.",
  },
  contacto: {
    titulo: "¿Tienes un proyecto en mente?",
    intro: "Cuéntame qué necesitas y te respondo en menos de 48 horas.",
    github: "GitHub",
    linkedin: "LinkedIn",
    cv: "Descargar CV (PDF)",
  },
  proyectos: {
    titulo: "Proyectos",
    intro:
      "Mini proyectos y trabajos completos. Filtra por tecnología para encontrar lo que te interesa.",
    filtrar: "Filtrar por tecnología",
    todas: "Todas",
    resultados: (n: number) => (n === 1 ? "1 proyecto" : `${n} proyectos`),
    vacio: "Ningún proyecto usa esa tecnología todavía. Elige otra o muestra todos.",
    verProyecto: "Ver proyecto",
  },
  detalle: {
    volver: "Todos los proyectos",
    codigo: "Ver código",
    demo: "Ver demo",
    tecnologias: "Tecnologías",
    publicado: "Publicado",
    video: "Video",
    galeria: "Galería",
    reproducir: (titulo: string) => `Reproducir video: ${titulo}`,
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
