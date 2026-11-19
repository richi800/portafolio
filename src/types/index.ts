/** Imagen con texto alternativo obligatorio (accesibilidad). */
export type Imagen = {
  /** Ruta dentro de /public, por ejemplo "/images/proyectos/mi-proyecto/portada.jpg" */
  src: string
  /** Describe lo que se ve en la imagen. Vacío ("") solo si es puramente decorativa. */
  alt: string
  /**
   * Punto de interés de la foto (CSS object-position, "x% y%"). Los recortes cerrados
   * hacen zoom alrededor de este punto. Por defecto, el centro.
   */
  foco?: string
}

/** Nombres de íconos disponibles para el contenido (se traducen a lucide en components/ui/Icono). */
export type NombreIcono =
  | "tienda"
  | "integraciones"
  | "soporte"
  | "pruebas"
  | "datos"
  | "organizacion"
  | "produccion"
  | "frontend"
  | "backend"
  | "calidad"
  | "infraestructura"
  | "idiomas"

export type Proyecto = {
  /** Identificador en la URL: /proyectos/<slug>. Minúsculas y guiones, único. */
  slug: string
  titulo: string
  /** Para quién se hizo. Se muestra en la tarjeta y el detalle. */
  cliente?: string
  /** Una o dos frases. Se muestra en tarjetas y en la meta descripción. */
  resumen: string
  /** Caso de estudio: problema → solución → stack (tecnologias) → resultado. */
  caso: {
    problema: string
    solucion: string
    /** Lista breve de lo que incluye la solución. */
    funcionalidades: string[]
    resultado: string
  }
  tecnologias: string[]
  imagenPortada: Imagen
  galeria: Imagen[]
  /** ID del video de YouTube (lo que va después de "v=" en la URL). */
  videoYoutube?: string
  repoUrl?: string
  demoUrl?: string
  /** Si es true aparece en la sección "Proyectos destacados" del inicio. */
  destacado: boolean
  /**
   * Fecha AAAA-MM-DD. Ordena el listado (más reciente primero) y alimenta el sitemap.
   * Con fechas iguales se respeta el orden de content/proyectos/index.ts.
   */
  fecha: string
}

export type GrupoHabilidades = {
  categoria: string
  icono: NombreIcono
  items: string[]
}

export type DatoRapido = {
  valor: string
  etiqueta: string
}

export type Perfil = {
  nombre: string
  /** Versión corta para el header y el footer. */
  nombreCorto: string
  titulo: string
  /** Tecnologías principales que acompañan al título en el hero. */
  stack: string[]
  /** Frase del hero, una o dos líneas. */
  presentacion: string
  /** Párrafos de la sección "Sobre mí". */
  bio: string[]
  /** Datos cortos de "Sobre mí" (ubicación, experiencia, idioma...). */
  datos: { termino: string; valor: string }[]
  /** Franja debajo del hero. Solo datos reales. */
  datosRapidos: DatoRapido[]
  disponibilidad: string
  foto: Imagen
  correo: string
  redes: {
    github: string
    /** Vacío = no se muestra. */
    linkedin: string
  }
  whatsapp: {
    /** Número con código de país, sin "+" ni espacios. Nunca se muestra en la página. */
    numero: string
    mensaje: string
  }
  /** Ruta al PDF dentro de /public. */
  cv: string
  habilidades: GrupoHabilidades[]
}

export type Servicio = {
  icono: NombreIcono
  titulo: string
  descripcion: string
  incluye: string[]
}

export type PuntoMetodo = {
  icono: NombreIcono
  titulo: string
  descripcion: string
}

export type EtapaTrayectoria = {
  tipo: "trabajo" | "educacion"
  lugar: string
  periodo: string
  /** Uno o más roles, en orden cronológico. */
  roles: string[]
  descripcion?: string
}
