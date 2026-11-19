import { Download, Mail, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { IconoGithub, IconoLinkedin } from "@/components/ui/IconosMarca"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"
import { enlaceWhatsapp } from "@/lib/contacto"

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

          <ul className="mt-10 flex flex-wrap gap-3">
            <li>
              <Button
                href={enlaceWhatsapp}
                externo
                variante="invertido"
                icono={<MessageCircle aria-hidden />}
              >
                {t.contacto.whatsapp}
              </Button>
            </li>
            <li>
              <Button
                href={`mailto:${perfil.correo}`}
                variante="invertidoContorno"
                icono={<Mail aria-hidden />}
              >
                {t.contacto.correo}
              </Button>
            </li>
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
            {perfil.redes.linkedin && (
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
            )}
            <li>
              <Button
                href={perfil.cv}
                descargar
                variante="invertidoContorno"
                icono={<Download aria-hidden />}
              >
                {t.contacto.cv}
              </Button>
            </li>
          </ul>

          <p className="mt-8 text-small break-all opacity-90">{perfil.correo}</p>
        </div>
      </Container>
    </section>
  )
}
