import { getLang } from "@/i18n"
import { getCicloIncidente } from "@/lib/soporte"

/**
 * Ciclo de un incidente como lista ordenada: vertical con línea a la izquierda hasta xl y
 * línea de pasos horizontal desde xl (antes, siete columnas quedan de ~110 px y el texto se
 * apretaba). En horizontal, cada paso usa subgrid para que todas las descripciones arranquen
 * a la misma altura aunque el título ocupe una o dos líneas.
 *
 * El círculo (size-9 = 36 px) se centra sobre la línea de 2 px: 18 px de radio + 1 px de
 * media línea = 19 px = spacing 4.75.
 */
export async function CicloIncidente() {
  const cicloIncidente = getCicloIncidente(await getLang())
  return (
    <ol className="relative border-l-2 border-line xl:grid xl:grid-cols-7 xl:gap-x-5 xl:border-t-2 xl:border-l-0">
      {cicloIncidente.map((paso, i) => (
        <li
          key={paso.titulo}
          className="relative pb-10 pl-10 last:pb-0 xl:row-span-2 xl:grid xl:grid-rows-subgrid xl:pt-10 xl:pb-0 xl:pl-0"
        >
          <span
            aria-hidden
            className="absolute top-0 -left-4.75 inline-flex size-9 items-center justify-center rounded-full border-2 border-accent bg-paper font-display text-small font-bold text-accent xl:-top-4.75 xl:left-0"
          >
            {i + 1}
          </span>
          <h3 className="pt-1 font-display text-body font-bold text-ink xl:pt-0">
            {paso.titulo}
          </h3>
          <p className="mt-2 max-w-prose text-small text-ink-muted">{paso.descripcion}</p>
        </li>
      ))}
    </ol>
  )
}
