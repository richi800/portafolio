import { Container } from "@/components/ui/Container"
import { cn } from "@/lib/cn"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"

const t = getDiccionario()

/** Franja de datos reales debajo del hero. */
export function DatosRapidos() {
  return (
    <section aria-labelledby="datos-titulo" className="border-y border-line bg-surface">
      <h2 id="datos-titulo" className="sr-only">
        {t.datosRapidos.titulo}
      </h2>
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {perfil.datosRapidos.map((dato, i) => (
            <li
              key={dato.valor}
              className={cn(
                "flex flex-col gap-1 py-6 md:py-8",
                // Divisores: entre columnas y entre filas, según el número de columnas.
                i % 2 === 1 ? "border-l border-line pl-5 md:pl-8" : "pr-5 md:pr-8",
                i >= 2 && "border-t border-line lg:border-t-0",
                i === 2 && "lg:border-l lg:pl-8",
              )}
            >
              <span className="font-display text-subheading font-bold text-ink">
                {dato.valor}
              </span>
              <span className="text-small text-ink-muted">{dato.etiqueta}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
