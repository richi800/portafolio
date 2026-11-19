import { Fragment } from "react"

import { Container } from "@/components/ui/Container"
import { cn } from "@/lib/cn"
import { getDiccionario, getLang } from "@/i18n"
import { getPerfil } from "@/lib/contenido"

/** Franja de datos reales debajo del hero. */
export async function DatosRapidos() {
  const lang = await getLang()
  const t = await getDiccionario()
  return (
    <section aria-labelledby="datos-titulo" className="border-y border-line bg-surface">
      <h2 id="datos-titulo" className="sr-only">
        {t.datosRapidos.titulo}
      </h2>
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {getPerfil(lang).datosRapidos.map((dato, i) => (
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
              {/* En 360 px cada columna mide ~140 px: a 24 px "E-commerce" no cabe y se
                  partía en el guion. Debajo de sm baja a text-lead y cada término de una
                  lista "A · B · C" no se corta en su guion. */}
              <span className="font-display text-lead font-bold text-ink sm:text-subheading">
                {dato.valor.split(" · ").map((parte, j) => (
                  <Fragment key={parte}>
                    {j > 0 && " · "}
                    {/* Solo las palabras sueltas: un término de varias palabras sí puede
                        partirse en sus espacios y nunca desborda la columna. */}
                    {parte.includes(" ") ? (
                      parte
                    ) : (
                      <span className="whitespace-nowrap">{parte}</span>
                    )}
                  </Fragment>
                ))}
              </span>
              <span className="text-small text-ink-muted">{dato.etiqueta}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
