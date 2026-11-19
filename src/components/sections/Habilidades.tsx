import { Section } from "@/components/ui/Section"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"

const t = getDiccionario()

export function Habilidades() {
  return (
    <Section
      id="habilidades"
      titulo={t.habilidades.titulo}
      intro={t.habilidades.intro}
      className="pt-0"
    >
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {perfil.habilidades.map((grupo) => (
          <div key={grupo.categoria} className="border-t-2 border-ink pt-5">
            <h3 className="text-subheading font-bold">{grupo.categoria}</h3>
            <ul className="mt-4">
              {grupo.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-line py-3 text-ink-muted last:border-b-0"
                >
                  <span
                    aria-hidden
                    className="size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
