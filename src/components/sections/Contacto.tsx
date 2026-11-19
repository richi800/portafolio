import { Download, Mail, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { IconoGithub, IconoLinkedin } from "@/components/ui/IconosMarca"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"
import { cn } from "@/lib/cn"
import { enlaceWhatsapp } from "@/lib/contacto"
import { getCvs } from "@/lib/cv"

const t = getDiccionario()

/** Bloque de contacto del inicio; /soporte lo reutiliza como cierre con otro texto. */
export function Contacto({
  titulo = t.contacto.titulo,
  intro = t.contacto.intro,
  cvPrimero,
  className,
}: {
  titulo?: string
  intro?: string
  /** Ruta del CV que va primero (en /soporte, el de Soporte TI). */
  cvPrimero?: string
  className?: string
}) {
  const cvs = getCvs(cvPrimero)
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className={cn("pb-section", className)}
    >
      <Container>
        <div className="rounded-media bg-accent px-6 py-14 text-accent-ink sm:px-10 md:px-16 md:py-20">
          <h2 id="contacto-titulo" className="max-w-[16ch] text-title font-extrabold">
            {titulo}
          </h2>
          <p className="mt-5 max-w-prose text-lead opacity-90">{intro}</p>

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
            {cvs.map((cv) => (
              <li key={cv.ruta}>
                <Button
                  href={cv.ruta}
                  descargar
                  variante="invertidoContorno"
                  icono={<Download aria-hidden />}
                  // Etiquetas largas ("CV Desarrollador Full Stack (PDF)"): en 360 px no caben
                  // en una línea y desbordarían la caja de contacto.
                  className="py-3 whitespace-normal"
                >
                  {cv.etiqueta}
                </Button>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-small break-all opacity-90">{perfil.correo}</p>
        </div>
      </Container>
    </section>
  )
}
