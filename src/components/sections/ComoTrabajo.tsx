import { IconoEnMarco } from "@/components/ui/Icono"
import { Section } from "@/components/ui/Section"
import { metodo } from "@/content/metodo"
import { getDiccionario } from "@/i18n"

const t = getDiccionario()

export function ComoTrabajo() {
  return (
    <Section id="como-trabajo" titulo={t.comoTrabajo.titulo} intro={t.comoTrabajo.intro}>
      <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {metodo.map((punto) => (
          <li key={punto.titulo} className="flex gap-5">
            <IconoEnMarco nombre={punto.icono} />
            <div>
              <h3 className="text-subheading font-bold">{punto.titulo}</h3>
              <p className="mt-2 max-w-prose text-ink-muted">{punto.descripcion}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
