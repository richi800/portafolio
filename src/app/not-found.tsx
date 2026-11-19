import type { Metadata } from "next"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { getDiccionario } from "@/i18n"

const t = getDiccionario()

export const metadata: Metadata = {
  title: t.noEncontrado.titulo,
  robots: { index: false },
}

export default function NoEncontrado() {
  return (
    <Container className="grid gap-10 py-section md:grid-cols-12 md:items-end">
      <p
        aria-hidden
        className="font-display text-display font-extrabold text-line select-none md:col-span-5"
      >
        404
      </p>
      <div className="md:col-span-7">
        <h1 className="text-title font-extrabold">{t.noEncontrado.titulo}</h1>
        <p className="mt-5 max-w-prose text-lead text-ink-muted">
          {t.noEncontrado.texto}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">{t.noEncontrado.inicio}</Button>
          <Button href="/proyectos" variante="secundario">
            {t.noEncontrado.proyectos}
          </Button>
        </div>
      </div>
    </Container>
  )
}
