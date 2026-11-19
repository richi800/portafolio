import { Container } from "@/components/ui/Container"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"

const t = getDiccionario()

export function SobreMi() {
  const datos = [
    { termino: t.sobreMi.ubicacion, valor: perfil.ubicacion },
    { termino: t.sobreMi.disponibilidad, valor: perfil.disponibilidad },
    { termino: t.sobreMi.idiomas, valor: perfil.idiomas.join(", ") },
  ]

  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-titulo"
      className="border-y border-line bg-surface py-section"
    >
      <Container className="grid gap-12 md:grid-cols-12">
        <h2 id="sobre-mi-titulo" className="text-heading font-bold md:col-span-4">
          {t.sobreMi.titulo}
        </h2>

        <div className="md:col-span-8">
          <div className="max-w-prose space-y-5">
            {perfil.bio.map((parrafo, i) => (
              <p key={i} className={i === 0 ? "text-lead text-ink" : "text-ink-muted"}>
                {parrafo}
              </p>
            ))}
          </div>

          <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {datos.map((d) => (
              <div key={d.termino}>
                <dt className="text-tiny font-bold text-ink-muted">{d.termino}</dt>
                <dd className="mt-1 text-small text-ink">{d.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
