/** Imagen con texto alternativo obligatorio (accesibilidad). */
export type Imagen = {
  /** Ruta dentro de /public, por ejemplo "/images/proyectos/mi-proyecto/portada.jpg" */
  src: string
  /** Describe lo que se ve en la imagen. Vacío ("") solo si es puramente decorativa. */
  alt: string
}

export type Proyecto = {
  /** Identificador en la URL: /proyectos/<slug>. Minúsculas y guiones, único. */
  slug: string
  titulo: string
  /** Una o dos frases. Se muestra en tarjetas y en la meta descripción. */
  resumen: string
  /** Texto largo del detalle. Separa párrafos con una línea en blanco. */
  descripcion: string
  tecnologias: string[]
  imagenPortada: Imagen
  galeria: Imagen[]
  /** ID del video de YouTube (lo que va después de "v=" en la URL). */
  videoYoutube?: string
  repoUrl?: string
  demoUrl?: string
  /** Si es true aparece en la sección "Proyectos destacados" del inicio. */
  destacado: boolean
  /** Fecha de publicación en formato AAAA-MM-DD. Ordena el listado (más reciente primero). */
  fecha: string
}

export type GrupoHabilidades = {
  categoria: string
  items: string[]
}

export type Perfil = {
  nombre: string
  titulo: string
  /** Frase del hero, una o dos líneas. */
  presentacion: string
  /** Párrafos de la sección "Sobre mí". */
  bio: string[]
  ubicacion: string
  disponibilidad: string
  idiomas: string[]
  foto: Imagen
  correo: string
  redes: {
    github: string
    linkedin: string
  }
  /** Ruta al PDF dentro de /public. */
  cv: string
  habilidades: GrupoHabilidades[]
}
