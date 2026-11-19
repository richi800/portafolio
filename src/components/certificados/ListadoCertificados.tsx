"use client"

import { useId, useState, type ReactNode } from "react"

import { getDiccionario } from "@/i18n"
import { cn } from "@/lib/cn"
import type { AreaCertificado } from "@/types"

const t = getDiccionario()

type Item = { clave: string; area: AreaCertificado; tarjeta: ReactNode }

/**
 * Filtro por área. Las tarjetas llegan ya renderizadas desde el servidor; aquí solo se
 * decide cuáles mostrar. Con una sola área no hay nada que filtrar y no se muestra.
 */
export function ListadoCertificados({
  items,
  areas,
}: {
  items: Item[]
  areas: AreaCertificado[]
}) {
  const [filtro, setFiltro] = useState<AreaCertificado | null>(null)
  const tituloId = useId()
  const visibles = filtro ? items.filter((i) => i.area === filtro) : items

  const opciones: { valor: AreaCertificado | null; etiqueta: string }[] = [
    { valor: null, etiqueta: t.certificados.todas },
    ...areas.map((a) => ({ valor: a, etiqueta: t.certificados.areas[a] })),
  ]

  return (
    <>
      {areas.length > 1 && (
        <div
          role="group"
          aria-labelledby={tituloId}
          className="mb-10 flex flex-col gap-4 border-y border-line py-6 md:flex-row md:items-center md:gap-6"
        >
          <p id={tituloId} className="shrink-0 text-small font-bold text-ink">
            {t.certificados.filtrar}
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
            {t.certificados.resultados(visibles.length)}
          </p>
        </div>
      )}

      <ul className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {visibles.map((i) => (
          <li key={i.clave} className="flex [&>article]:flex-1">
            {i.tarjeta}
          </li>
        ))}
      </ul>
    </>
  )
}
