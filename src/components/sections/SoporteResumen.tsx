import { ArrowRight } from "lucide-react"

import { TarjetaPractica } from "@/components/soporte/TarjetaPractica"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { introSoporte } from "@/content/soporte"
import { getDiccionario } from "@/i18n"
import { getPracticasDestacadas } from "@/lib/soporte"

const t = getDiccionario()

/** Puente del inicio hacia /soporte: operación e incidentes (ComoTrabajo cubre el desarrollo). */
export function SoporteResumen() {
  return (
    <Section
      id="soporte"
      titulo={t.soporteResumen.titulo}
      intro={introSoporte.frase}
      tono="surface"
      accion={
        <Button
          href="/soporte"
          variante="secundario"
          icono={<ArrowRight aria-hidden />}
          className="self-start md:self-auto"
        >
          {t.soporteResumen.enlace}
        </Button>
      }
    >
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {getPracticasDestacadas().map((p) => (
          <li key={p.titulo} className="flex">
            <TarjetaPractica practica={p} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
