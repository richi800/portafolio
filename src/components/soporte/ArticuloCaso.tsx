import { Check } from "lucide-react"
import type { ReactNode } from "react"

import { Badge } from "@/components/ui/Badge"
import { Card } from "@/components/ui/Card"
import { getDiccionario } from "@/i18n"
import type { CasoSoporte } from "@/types"

function Paso({
  numero,
  titulo,
  children,
}: {
  numero: number
  titulo: string
  children: ReactNode
}) {
  return (
    <li className="grid gap-2 border-t border-line pt-6 md:grid-cols-12 md:gap-8">
      <h4 className="flex gap-3 font-display text-body font-bold text-ink md:col-span-4">
        <span aria-hidden className="text-accent">
          {String(numero).padStart(2, "0")}
        </span>
        {titulo}
      </h4>
      <div className="max-w-prose space-y-3 text-ink-muted md:col-span-8">{children}</div>
    </li>
  )
}

function Lista({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check aria-hidden className="mt-1.5 size-4 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Caso real anonimizado con los 8 pasos: del síntoma al resultado. */
export async function ArticuloCaso({ caso }: { caso: CasoSoporte }) {
  const t = await getDiccionario()
  const p = t.soportePagina.pasos
  const tituloId = `caso-${caso.slug}`
  return (
    <Card as="article" aria-labelledby={tituloId} className="p-6 shadow-none md:p-10">
      <p className="text-small font-bold text-ink-muted">
        <span className="sr-only">{t.soportePagina.contexto}: </span>
        {caso.contexto}
      </p>
      <h3 id={tituloId} className="mt-2 text-subheading font-bold">
        {caso.titulo}
      </h3>
      <ul aria-label={t.soportePagina.stack} className="mt-4 flex flex-wrap gap-2">
        {caso.tecnologias.map((tec) => (
          <li key={tec}>
            <Badge>{tec}</Badge>
          </li>
        ))}
      </ul>

      <ol className="mt-8 space-y-6">
        <Paso numero={1} titulo={p.sintoma}>
          <p className="text-ink">{caso.sintoma}</p>
          <p>{caso.impacto}</p>
        </Paso>
        <Paso numero={2} titulo={p.flujo}>
          <p>{caso.flujo}</p>
        </Paso>
        <Paso numero={3} titulo={p.evidencia}>
          <Lista items={caso.evidencia} />
        </Paso>
        <Paso numero={4} titulo={p.hipotesis}>
          <ul className="space-y-3">
            {caso.hipotesis.map((h) => (
              <li key={h.idea} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>
                  <span className="font-bold text-ink">{h.idea}</span>{" "}
                  <span className="sr-only">{t.soportePagina.investigada}: </span>
                  {h.resultado}
                </span>
              </li>
            ))}
          </ul>
        </Paso>
        <Paso numero={5} titulo={p.causaRaiz}>
          <p className="text-ink">{caso.causaRaiz}</p>
        </Paso>
        <Paso numero={6} titulo={p.solucion}>
          <p>{caso.mitigacion}</p>
          <p>{caso.solucion}</p>
        </Paso>
        <Paso numero={7} titulo={p.prevencion}>
          <Lista items={caso.prevencion} />
        </Paso>
        <Paso numero={8} titulo={p.resultado}>
          <p className="text-ink">{caso.resultado}</p>
        </Paso>
      </ol>
    </Card>
  )
}
