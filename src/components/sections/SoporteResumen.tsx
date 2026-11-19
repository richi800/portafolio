import { ArrowRight } from "lucide-react"

import { TarjetaPractica } from "@/components/soporte/TarjetaPractica"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { getDiccionario, getLang } from "@/i18n"
import { ruta } from "@/i18n/config"
import { getIntroSoporte, getPracticasDestacadas } from "@/lib/soporte"

/** Puente del inicio hacia /soporte: operación e incidentes (ComoTrabajo cubre el desarrollo). */
export async function SoporteResumen() {
  const lang = await getLang()
  const t = await getDiccionario()
  return (
    <Section
      id="soporte"
      titulo={t.soporteResumen.titulo}
      intro={getIntroSoporte(lang).frase}
      tono="surface"
      accion={
        <Button
          href={ruta(lang, "/soporte")}
          variante="secundario"
          icono={<ArrowRight aria-hidden />}
          className="self-start md:self-auto"
        >
          {t.soporteResumen.enlace}
        </Button>
      }
    >
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {getPracticasDestacadas(lang).map((p) => (
          <li key={p.titulo} className="flex">
            <TarjetaPractica practica={p} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
