import { Mail } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"

import { HeroTitulo } from "./HeroTitulo"

const t = getDiccionario()

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="pt-12 pb-section md:pt-20">
      <Container>
        <HeroTitulo nombre={perfil.nombre} foto={perfil.foto} />

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-display text-subheading font-bold text-ink">
              {perfil.titulo}
            </p>
            <p className="mt-3 max-w-prose text-lead text-ink-muted">
              {perfil.presentacion}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/proyectos">{t.hero.verProyectos}</Button>
              <Button
                href="/#contacto"
                variante="secundario"
                icono={<Mail aria-hidden />}
              >
                {t.hero.contactar}
              </Button>
            </div>
          </div>

          <p className="flex items-center gap-3 self-end text-small text-ink-muted md:col-span-4 md:col-start-9 md:justify-end">
            <span aria-hidden className="relative flex size-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
              <span className="relative size-2.5 rounded-full bg-signal" />
            </span>
            {perfil.disponibilidad}
          </p>
        </div>
      </Container>
    </section>
  )
}
