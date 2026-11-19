import { MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"
import { enlaceWhatsapp } from "@/lib/contacto"

import { HeroTitulo } from "./HeroTitulo"

const t = getDiccionario()

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="pt-12 pb-16 md:pt-20 md:pb-20">
      <Container>
        <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-surface py-2 pr-4 pl-3 text-small font-bold text-ink md:mb-10">
          <span aria-hidden className="relative flex size-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
            <span className="relative size-2.5 rounded-full bg-signal" />
          </span>
          {perfil.disponibilidad}
        </p>

        {/*
          Con el nombre en tres líneas, desde xl la presentación pasa a la derecha y se
          alinea con la última línea: el hero no crece de alto y el CTA queda a la vista.
        */}
        <div className="xl:grid xl:grid-cols-12 xl:items-end xl:gap-x-8">
          <div className="xl:col-span-7">
            <HeroTitulo nombre={perfil.nombre} foto={perfil.foto} />
          </div>
          <div className="mt-10 max-w-prose md:mt-14 xl:col-span-5 xl:mt-0">
            <p className="font-display text-subheading font-bold text-ink">
              {perfil.titulo}
            </p>
            <ul
              aria-label={t.hero.stack}
              className="mt-2 flex flex-wrap gap-x-2 text-small font-bold text-accent"
            >
              {perfil.stack.map((tec, i) => (
                <li key={tec} className="flex items-center gap-x-2">
                  {i > 0 && (
                    <span aria-hidden className="text-ink-muted">
                      ·
                    </span>
                  )}
                  {tec}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-prose text-lead text-ink-muted">
              {perfil.presentacion}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={enlaceWhatsapp} externo icono={<MessageCircle aria-hidden />}>
                {t.hero.cotizar}
              </Button>
              <Button href="/#proyectos" variante="secundario">
                {t.hero.verProyectos}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
