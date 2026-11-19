"use client"

import { AnimatePresence, motion } from "motion/react"
import { useState, type ReactNode } from "react"

import { getDiccionario } from "@/i18n"
import { cn } from "@/lib/cn"

const t = getDiccionario()

type Item = { slug: string; tecnologias: string[]; tarjeta: ReactNode }

/**
 * Filtro por tecnología. Las tarjetas llegan ya renderizadas desde el servidor;
 * aquí solo se decide cuáles mostrar, así el listado sigue siendo estático.
 */
export function ListadoProyectos({
  items,
  tecnologias,
}: {
  items: Item[]
  tecnologias: string[]
}) {
  const [filtro, setFiltro] = useState<string | null>(null)
  const visibles = filtro ? items.filter((i) => i.tecnologias.includes(filtro)) : items

  const opciones: { valor: string | null; etiqueta: string }[] = [
    { valor: null, etiqueta: t.proyectos.todas },
    ...tecnologias.map((tec) => ({ valor: tec, etiqueta: tec })),
  ]

  return (
    <>
      <div
        role="group"
        aria-labelledby="filtro-titulo"
        className="flex flex-col gap-4 border-y border-line py-6 md:flex-row md:items-center md:gap-6"
      >
        <p id="filtro-titulo" className="shrink-0 text-small font-bold text-ink">
          {t.proyectos.filtrar}
        </p>
        <ul className="flex flex-wrap gap-2">
          {opciones.map((o) => {
            const activo = filtro === o.valor
            return (
              <li key={o.etiqueta}>
                <button
                  type="button"
                  aria-pressed={activo}
                  onClick={() => setFiltro(o.valor)}
                  className={cn(
                    "min-h-11 rounded-control border px-4 text-small font-bold transition-colors",
                    activo
                      ? "border-ink bg-ink text-paper"
                      : "border-line bg-surface text-ink-muted hover:border-ink hover:text-ink",
                  )}
                >
                  {o.etiqueta}
                </button>
              </li>
            )
          })}
        </ul>
        <p
          aria-live="polite"
          className="text-small text-ink-muted md:ml-auto md:shrink-0"
        >
          {t.proyectos.resultados(visibles.length)}
        </p>
      </div>

      {visibles.length === 0 ? (
        <div className="mt-12 rounded-card border border-dashed border-line p-10 text-center">
          <p className="text-ink-muted">{t.proyectos.vacio}</p>
          <button
            type="button"
            onClick={() => setFiltro(null)}
            className="mt-2 min-h-11 px-2 text-small font-bold text-accent underline underline-offset-4 hover:text-accent-strong"
          >
            {t.proyectos.todas}
          </button>
        </div>
      ) : (
        <ul className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {visibles.map((i) => (
              <motion.li
                key={i.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex [&>article]:flex-1"
              >
                {i.tarjeta}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </>
  )
}
