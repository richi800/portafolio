import { ArrowRight, GraduationCap } from "lucide-react"

import { Section } from "@/components/ui/Section"
import { trayectoria } from "@/content/trayectoria"
import { getDiccionario } from "@/i18n"
import { cn } from "@/lib/cn"

const t = getDiccionario()

/** Línea de tiempo: la trayectoria sí es una secuencia, por eso lleva línea y puntos. */
export function Trayectoria() {
  return (
    <Section
      id="trayectoria"
      titulo={t.trayectoria.titulo}
      intro={t.trayectoria.intro}
      tono="surface"
    >
      <ol className="relative max-w-3xl border-l-2 border-line">
        {trayectoria.map((etapa, i) => {
          const actual = i === 0
          return (
            <li key={etapa.lugar} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              <span
                aria-hidden
                className={cn(
                  "absolute top-1.5 -left-[0.5625rem] size-4 rounded-full border-2",
                  actual ? "border-accent bg-accent" : "border-ink-muted bg-surface",
                )}
              />
              <p className="text-small font-bold text-ink-muted">{etapa.periodo}</p>
              <h3 className="mt-1 flex items-center gap-2 text-subheading font-bold">
                {etapa.tipo === "educacion" && (
                  <>
                    <GraduationCap aria-hidden className="size-6 shrink-0 text-accent" />
                    <span className="sr-only">{t.trayectoria.educacion}: </span>
                  </>
                )}
                {etapa.lugar}
              </h3>
              <p className="mt-2 flex flex-wrap items-center gap-x-2 font-bold text-ink">
                {etapa.roles.map((rol, j) => (
                  <span key={rol} className="inline-flex items-center gap-x-2">
                    {j > 0 && (
                      <>
                        <ArrowRight aria-hidden className="size-4 text-accent" />
                        <span className="sr-only">{t.trayectoria.despues}</span>
                      </>
                    )}
                    {rol}
                  </span>
                ))}
              </p>
              {etapa.descripcion && (
                <p className="mt-3 max-w-prose text-ink-muted">{etapa.descripcion}</p>
              )}
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
