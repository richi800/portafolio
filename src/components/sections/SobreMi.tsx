import { Container } from "@/components/ui/Container"
import { FotoEncuadrada } from "@/components/ui/FotoEncuadrada"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"

const t = getDiccionario()

/**
 * Sin padding propio: va entre Trayectoria y Habilidades, ambas bandas `paper` con
 * `py-section`, así que el aire lo ponen ellas (con padding aquí el hueco sería doble).
 */
export function SobreMi() {
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-titulo">
      <Container className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <h2 id="sobre-mi-titulo" className="text-heading font-bold">
            {t.sobreMi.titulo}
          </h2>
          <div className="relative mt-8 aspect-[4/5] max-w-xs overflow-hidden rounded-media bg-line shadow-raised">
            <FotoEncuadrada
              foto={perfil.foto}
              // Caja de hasta 320 px (max-w-xs) con zoom 1.5 → hasta 480 px pintados.
              sizes="480px"
              zoom="scale-150"
            />
          </div>
        </div>

        <div className="md:col-span-8 md:pt-2">
          <div className="max-w-prose space-y-5">
            {perfil.bio.map((parrafo, i) => (
              <p key={i} className={i === 0 ? "text-lead text-ink" : "text-ink-muted"}>
                {parrafo}
              </p>
            ))}
          </div>

          <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {perfil.datos.map((d) => (
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
