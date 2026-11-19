import type { Metadata } from "next"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { getDiccionario, getLang } from "@/i18n"
import { ruta } from "@/i18n/config"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getDiccionario()
  return { title: t.noEncontrado.titulo, robots: { index: false } }
}

/** 404 en el idioma de la ruta (/es/... o /en/...). */
export default async function NoEncontrado() {
  const lang = await getLang()
  const t = await getDiccionario()
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
          <Button href={ruta(lang)}>{t.noEncontrado.inicio}</Button>
          <Button href={ruta(lang, "/proyectos")} variante="secundario">
            {t.noEncontrado.proyectos}
          </Button>
        </div>
      </div>
    </Container>
  )
}
