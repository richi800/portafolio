import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/cn"

import { Container } from "./Container"

type SectionProps = {
  id: string
  titulo: string
  intro?: ReactNode
  /** Contenido alineado a la derecha del título (por ejemplo un enlace "ver todos"). */
  accion?: ReactNode
  children: ReactNode
} & Omit<ComponentProps<"section">, "id" | "children">

/** Sección de página con título accesible (aria-labelledby) y ritmo vertical común. */
export function Section({
  id,
  titulo,
  intro,
  accion,
  children,
  className,
  ...rest
}: SectionProps) {
  const tituloId = `${id}-titulo`
  return (
    <section
      id={id}
      aria-labelledby={tituloId}
      className={cn("py-section", className)}
      {...rest}
    >
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-prose">
            <h2 id={tituloId} className="text-heading font-bold">
              {titulo}
            </h2>
            {intro && <p className="mt-4 text-lead text-ink-muted">{intro}</p>}
          </div>
          {accion}
        </div>
        {children}
      </Container>
    </section>
  )
}
