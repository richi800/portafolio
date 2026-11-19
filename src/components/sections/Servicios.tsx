import { Check, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { IconoEnMarco } from "@/components/ui/Icono"
import { Section } from "@/components/ui/Section"
import { getDiccionario, getLang } from "@/i18n"
import { enlaceWhatsapp } from "@/lib/contacto"
import { getServicios } from "@/lib/contenido"

export async function Servicios() {
  const lang = await getLang()
  const t = await getDiccionario()
  return (
    <Section
      id="servicios"
      titulo={t.servicios.titulo}
      intro={t.servicios.intro}
      tono="surface"
    >
      <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
        {getServicios(lang).map((s) => (
          <li key={s.titulo} className="flex">
            <Card
              as="article"
              className="flex flex-1 flex-col gap-4 bg-paper p-6 shadow-none md:p-8"
            >
              <IconoEnMarco nombre={s.icono} />
              <h3 className="text-subheading font-bold">{s.titulo}</h3>
              <p className="text-ink-muted">{s.descripcion}</p>
              <ul aria-label={t.servicios.incluye} className="mt-auto space-y-2 pt-2">
                {s.incluye.map((item) => (
                  <li key={item} className="flex gap-3 text-small text-ink">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ul>
      <div className="mt-12 flex justify-center md:mt-16">
        <Button href={enlaceWhatsapp(lang)} externo icono={<MessageCircle aria-hidden />}>
          {t.servicios.cotizar}
        </Button>
      </div>
    </Section>
  )
}
