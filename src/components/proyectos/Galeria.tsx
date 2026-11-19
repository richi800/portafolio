import { Maximize2 } from "lucide-react"
import Image from "next/image"

import { getDiccionario } from "@/i18n"
import type { Imagen } from "@/types"

const t = getDiccionario()

const sizes = "(min-width: 1216px) 1136px, 100vw"
// En oscuro las capturas blancas se atenúan un poco para que no deslumbren.
const claseImagen = "dark:brightness-90"

/**
 * Galería de capturas a ancho completo, una debajo de otra: son pantallas con texto y
 * necesitan tamaño para leerse. Si la imagen trae `ancho` y `alto`, se muestra con su
 * proporción original (sin recortar); si no, en 16:10.
 * Cada captura enlaza al archivo original: en el celular es la única forma de leerla.
 */
export function Galeria({ imagenes }: { imagenes: Imagen[] }) {
  return (
    <ul className="grid gap-12 md:gap-16">
      {imagenes.map((img) => (
        <li key={img.src}>
          <figure>
            <a
              href={img.src}
              target="_blank"
              rel="noopener"
              className="group relative block overflow-hidden rounded-card border border-line bg-line shadow-raised transition-[box-shadow,border-color] duration-300 ease-out-expo hover:border-accent/50 hover:shadow-lifted"
            >
              {img.ancho && img.alto ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.ancho}
                  height={img.alto}
                  sizes={sizes}
                  className={`h-auto w-full ${claseImagen}`}
                />
              ) : (
                <div className="relative aspect-[16/10]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={sizes}
                    className={`object-cover ${claseImagen}`}
                  />
                </div>
              )}
              <span className="sr-only"> {t.nav.nuevaPestana}</span>
              <span
                aria-hidden
                className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-control border border-line bg-surface text-ink shadow-raised transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100"
              >
                <Maximize2 className="size-4" />
              </span>
            </a>
            {img.leyenda && (
              <figcaption className="mt-3 max-w-prose text-small text-ink-muted">
                {img.leyenda}
              </figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  )
}
