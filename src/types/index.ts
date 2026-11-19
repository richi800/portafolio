import type { Locale } from "@/i18n/config"

/**
 * Texto visible en los dos idiomas del sitio. Todo lo que lee una persona (títulos,
 * descripciones, `alt`, leyendas...) va así en `src/content/`; slugs, URLs, rutas,
 * fechas, nombres de tecnologías y nombres propios se quedan como `string`.
 *
 * Convención: los tipos `...Contenido` son los de `src/content/` (con `Traducible`) y los
 * tipos sin sufijo son la versión ya resuelta a un idioma (con `string`), la que reciben
 * los componentes. La conversión la hace `resolver()` de `lib/i18n.ts`.
 */
export type Traducible = { es: string; en: string }

/** Cambia cada `Traducible` de T por `string`, a cualquier profundidad. */
export type Resuelto<T> = T extends Traducible
  ? string
  : T extends readonly (infer U)[]
    ? Resuelto<U>[]
    : T extends object
      ? { [K in keyof T]: Resuelto<T[K]> }
      : T

/** Imagen con texto alternativo obligatorio (accesibilidad). */
export type ImagenContenido = {
  /** Ruta dentro de /public, por ejemplo "/images/proyectos/mi-proyecto/portada.jpg" */
  src: string
  /** Describe lo que se ve en la imagen. Vacío ("") solo si es puramente decorativa. */
  alt: Traducible | ""
  /**
   * Punto de interés de la foto (CSS object-position, "x% y%"). Los recortes cerrados
   * hacen zoom alrededor de este punto. Por defecto, el centro.
   */
  foco?: string
  /** Tamaño real en px. Con ancho y alto, la galería muestra la imagen sin recortarla. */
  ancho?: number
  alto?: number
  /** Texto visible bajo la imagen en la galería (qué muestra, en pocas palabras). */
  leyenda?: Traducible
}

export type Imagen = Resuelto<ImagenContenido>

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

export type ProyectoContenido = {
  /** Identificador en la URL: /<idioma>/proyectos/<slug>. Minúsculas y guiones, único. */
  slug: string
  titulo: Traducible
  /** Para quién se hizo (nombre propio, no se traduce). Se muestra en la tarjeta y el detalle. */
  cliente?: string
  /** Una o dos frases. Se muestra en tarjetas y en la meta descripción. */
  resumen: Traducible
  /** Caso de estudio: problema → solución → stack (tecnologias) → resultado. */
  caso: {
    problema: Traducible
    solucion: Traducible
    /** Lista breve de lo que incluye la solución. */
    funcionalidades: Traducible[]
    resultado: Traducible
  }
  tecnologias: string[]
  imagenPortada: ImagenContenido
  galeria: ImagenContenido[]
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

export type Proyecto = Resuelto<ProyectoContenido>

export type GrupoHabilidadesContenido = {
  categoria: Traducible
  icono: NombreIcono
  /** Tecnologías como `string`; habilidades descriptivas ("Diseño responsivo") traducidas. */
  items: (string | Traducible)[]
}

export type DatoRapidoContenido = {
  valor: Traducible
  etiqueta: Traducible
}

export type PerfilContenido = {
  nombre: string
  /** Versión corta para el header y el footer. */
  nombreCorto: string
  titulo: Traducible
  /** Tecnologías principales que acompañan al título en el hero. */
  stack: string[]
  /** Frase del hero, una o dos líneas. */
  presentacion: Traducible
  /** Párrafos de la sección "Sobre mí". */
  bio: Traducible[]
  /** Datos cortos de "Sobre mí" (ubicación, experiencia, idioma...). */
  datos: { termino: Traducible; valor: Traducible }[]
  /** Franja debajo del hero. Solo datos reales. */
  datosRapidos: DatoRapidoContenido[]
  disponibilidad: Traducible
  foto: ImagenContenido
  correo: string
  redes: {
    github: string
    /** Vacío = no se muestra. */
    linkedin: string
  }
  whatsapp: {
    /** Número con código de país, sin "+" ni espacios. Nunca se muestra en la página. */
    numero: string
    /** Mensaje prellenado, en el idioma de la página. */
    mensaje: Traducible
  }
  /**
   * Versiones del CV, la principal primero. Las que no tienen archivo en /public no se
   * muestran (ver lib/cv.ts).
   */
  cvs: VersionCvContenido[]
  habilidades: GrupoHabilidadesContenido[]
}

export type Perfil = Resuelto<PerfilContenido>

export type ServicioContenido = {
  icono: NombreIcono
  titulo: Traducible
  descripcion: Traducible
  incluye: Traducible[]
}

export type Servicio = Resuelto<ServicioContenido>

export type PuntoMetodoContenido = {
  icono: NombreIcono
  titulo: Traducible
  descripcion: Traducible
}

export type PuntoMetodo = Resuelto<PuntoMetodoContenido>

export type EtapaTrayectoriaContenido = {
  tipo: "trabajo" | "educacion"
  /** Nombre propio, no se traduce. */
  lugar: string
  periodo: Traducible
  /** Uno o más roles, en orden cronológico. */
  roles: Traducible[]
  descripcion?: Traducible
}

export type EtapaTrayectoria = Resuelto<EtapaTrayectoriaContenido>

export type VersionCvContenido = {
  /** Sin "(PDF)": lib/cv.ts agrega el sufijo según el idioma del archivo. */
  etiqueta: Traducible
  /** PDF en español, dentro de /public. También identifica la versión. */
  ruta: string
  /** PDF en inglés. Si el archivo no existe, en /en se ofrece el de español. */
  rutaEn?: string
}

/** CV listo para mostrar en un idioma (lo arma lib/cv.ts). */
export type VersionCv = {
  /** `ruta` del contenido: identifica la versión sin importar el idioma del archivo. */
  clave: string
  /** Con sufijo: "(PDF)" o, en /en sin versión en inglés, "(Spanish, PDF)". */
  etiqueta: string
  /** Archivo que se descarga. */
  ruta: string
  /** Idioma del archivo (puede ser "es" en la página en inglés). */
  idiomaArchivo: Locale
}

export type AreaCertificado =
  "soporte" | "seguridad" | "redes" | "cloud" | "desarrollo" | "datos"

export type CertificadoContenido = {
  /** Tal como lo emite la plataforma: no se traduce. */
  titulo: string
  /** Idioma en que está escrito `titulo` (para el atributo `lang`). Por defecto "es". */
  idiomaTitulo?: Locale
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
  aprendizaje?: Traducible
}

export type Certificado = Resuelto<CertificadoContenido>

export type PracticaSoporteContenido = {
  icono: NombreIcono
  titulo: Traducible
  descripcion: Traducible
  /** true = aparece también en la sección "Soporte y confiabilidad" del inicio. */
  destacada?: boolean
}

export type PracticaSoporte = Resuelto<PracticaSoporteContenido>

/** Paso del ciclo de un incidente ("Así trabajo un incidente"). */
export type PasoIncidenteContenido = {
  titulo: Traducible
  descripcion: Traducible
}

export type PasoIncidente = Resuelto<PasoIncidenteContenido>

/** Caso real anonimizado. Estructura de 8 pasos. */
export type CasoSoporteContenido = {
  slug: string
  titulo: Traducible
  /** Contexto sin nombres sensibles: "Tienda en línea con Shopify", "Mesa de ayuda corporativa". */
  contexto: Traducible
  sintoma: Traducible
  impacto: Traducible
  /** Arquitectura o flujo afectado, en una o dos frases. */
  flujo: Traducible
  evidencia: Traducible[]
  hipotesis: { idea: Traducible; resultado: Traducible }[]
  causaRaiz: Traducible
  mitigacion: Traducible
  solucion: Traducible
  prevencion: Traducible[]
  /** Cualitativo si no hay números reales. */
  resultado: Traducible
  tecnologias: string[]
  /** false = oculto. Por defecto oculto hasta que Ricardo confirme que es real. */
  publicado?: boolean
}

export type CasoSoporte = Resuelto<CasoSoporteContenido>
