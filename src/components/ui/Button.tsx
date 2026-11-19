import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"

import { getDiccionario } from "@/i18n"
import { cn } from "@/lib/cn"

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-control px-5 text-small font-bold whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.125rem] [&_svg]:shrink-0"

const variantes = {
  /** Acción principal: una por bloque. */
  primario: "bg-accent text-accent-ink hover:bg-accent-strong",
  /** Acción secundaria con borde. */
  secundario:
    "border border-line bg-surface text-ink hover:border-accent hover:text-accent",
  /** Sobre un fondo de acento (sección de contacto). */
  invertido:
    "bg-accent-ink text-accent hover:bg-accent-ink/85 focus-visible:outline-accent-ink",
  /** Contorno sobre fondo de acento. */
  invertidoContorno:
    "border border-accent-ink/60 text-accent-ink hover:border-accent-ink hover:bg-accent-ink/10 focus-visible:outline-accent-ink",
} as const

export type VarianteBoton = keyof typeof variantes

type Comunes = {
  variante?: VarianteBoton
  icono?: ReactNode
  className?: string
  children: ReactNode
}

type ComoEnlace = Comunes & {
  href: string
  /** Abre en otra pestaña (enlaces a GitHub, demos...). */
  externo?: boolean
  /** Descarga el archivo en vez de abrirlo (CV). */
  descargar?: boolean
} & Omit<ComponentProps<"a">, "href" | "className" | "children">

type ComoBoton = Comunes & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >

/** Server Component (lee el idioma de la página para el aviso de "pestaña nueva"). */
export async function Button(props: ComoEnlace | ComoBoton) {
  if (props.href !== undefined) {
    const {
      variante = "primario",
      icono,
      className,
      children,
      href,
      externo,
      descargar,
      ...rest
    } = props
    const t = await getDiccionario()
    const clases = cn(base, variantes[variante], className)
    const contenido = (
      <>
        {children}
        {externo && <span className="sr-only"> {t.nav.nuevaPestana}</span>}
        {icono}
      </>
    )
    if (externo || descargar || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={clases}
          {...(externo && { target: "_blank", rel: "noopener noreferrer" })}
          {...(descargar && { download: "" })}
          {...rest}
        >
          {contenido}
        </a>
      )
    }
    return (
      <Link href={href} className={clases} {...rest}>
        {contenido}
      </Link>
    )
  }

  const {
    variante = "primario",
    icono,
    className,
    children,
    type = "button",
    ...rest
  } = props
  return (
    <button type={type} className={cn(base, variantes[variante], className)} {...rest}>
      {children}
      {icono}
    </button>
  )
}
