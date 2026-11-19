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
  /** Tamaño real en px. Con ancho y alto, la galería muestra la imagen sin recortarla. */
  ancho?: number
  alto?: number
  /** Texto visible bajo la imagen en la galería (qué muestra, en pocas palabras). */
  leyenda?: string
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
  | "incidentes"
  | "diagnostico"
  | "seguridad"
  | "documentacion"
  | "comunicacion"
  | "certificado"
  | "automatizacion"

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
   * false = oculto en todo el sitio (listados, detalle, destacados y sitemap), por ejemplo
   * mientras no hay capturas. Si se omite, el proyecto se publica.
   */
  publicado?: boolean
  /**
   * Fecha de lanzamiento AAAA-MM-DD. Alimenta el sitemap. El orden del sitio lo define
   * content/proyectos/index.ts.
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
  /**
   * Versiones del CV, la principal primero. Las que no tienen archivo en /public no se
   * muestran (ver lib/cv.ts).
   */
  cvs: VersionCv[]
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

export type VersionCv = {
  etiqueta: string
  /** Ruta dentro de /public. */
  ruta: string
}

export type AreaCertificado =
  "soporte" | "seguridad" | "redes" | "cloud" | "desarrollo" | "datos"

export type Certificado = {
  titulo: string
  /** Quién emite o imparte: "Udemy · Denis Chepik Antropov", "Cisco", "Google"... */
  emisor: string
  area: AreaCertificado
  /** "en-curso" se muestra con etiqueta; nunca se presenta como terminado. */
  estado: "completado" | "en-curso"
  /** AAAA-MM. Obligatoria si estado = "completado". */
  fecha?: string
  /** Enlace público para verificar el certificado (Udemy da uno por certificado). */
  urlVerificacion?: string
  /** Horas del curso, si la plataforma las indica. */
  horas?: number
  /** Qué aprendió y aplica, una frase. Opcional. */
  aprendizaje?: string
}

export type PracticaSoporte = {
  icono: NombreIcono
  titulo: string
  descripcion: string
  /** true = aparece también en la sección "Soporte y confiabilidad" del inicio. */
  destacada?: boolean
}

/** Paso del ciclo de un incidente ("Así trabajo un incidente"). */
export type PasoIncidente = {
  titulo: string
  descripcion: string
}

/** Caso real anonimizado. Estructura de 8 pasos. */
export type CasoSoporte = {
  slug: string
  titulo: string
  /** Contexto sin nombres sensibles: "Tienda en línea con Shopify", "Mesa de ayuda corporativa". */
  contexto: string
  sintoma: string
  impacto: string
  /** Arquitectura o flujo afectado, en una o dos frases. */
  flujo: string
  evidencia: string[]
  hipotesis: { idea: string; resultado: string }[]
  causaRaiz: string
  mitigacion: string
  solucion: string
  prevencion: string[]
  /** Cualitativo si no hay números reales. */
  resultado: string
  tecnologias: string[]
  /** false = oculto. Por defecto oculto hasta que Ricardo confirme que es real. */
  publicado?: boolean
}
