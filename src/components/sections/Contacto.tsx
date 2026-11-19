import { Download } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { IconoGithub, IconoLinkedin } from "@/components/ui/IconosMarca"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"

const t = getDiccionario()

export function Contacto() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="pb-section">
      <Container>
        <div className="rounded-media bg-accent px-6 py-14 text-accent-ink sm:px-10 md:px-16 md:py-20">
          <h2 id="contacto-titulo" className="max-w-[16ch] text-title font-extrabold">
            {t.contacto.titulo}
          </h2>
          <p className="mt-5 max-w-prose text-lead opacity-90">{t.contacto.intro}</p>

          <a
            href={`mailto:${perfil.correo}`}
            className="mt-10 inline-block font-display text-heading font-bold break-all underline decoration-2 underline-offset-[0.2em] transition-[text-decoration-color] hover:decoration-signal focus-visible:outline-accent-ink"
          >
            {perfil.correo}
          </a>

          <ul className="mt-10 flex flex-wrap gap-3">
            <li>
              <Button
                href={perfil.redes.github}
                externo
                variante="invertidoContorno"
                icono={<IconoGithub />}
              >
                {t.contacto.github}
              </Button>
            </li>
            <li>
              <Button
                href={perfil.redes.linkedin}
                externo
                variante="invertidoContorno"
                icono={<IconoLinkedin />}
              >
                {t.contacto.linkedin}
              </Button>
            </li>
            <li>
              <Button
                href={perfil.cv}
                descargar
                variante="invertido"
                icono={<Download aria-hidden />}
              >
                {t.contacto.cv}
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
