import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/Badge"
import { Card } from "@/components/ui/Card"
import { getDiccionario } from "@/i18n"
import { cn } from "@/lib/cn"
import { formatearFecha } from "@/lib/sitio"
import type { Proyecto } from "@/types"

const t = getDiccionario()

type Props = {
  proyecto: Proyecto
  /** "ancha": imagen y texto lado a lado en escritorio, para el primer destacado. */
  formato?: "normal" | "ancha"
  /** Solo con formato "ancha": pone la imagen a la derecha para alternar el ritmo. */
  invertida?: boolean
  /** Nivel del título según la página donde se usa. */
  nivel?: "h2" | "h3"
}

/**
 * Toda la tarjeta es clicable gracias al enlace "estirado" del título
 * (un solo enlace por tarjeta: mejor para lectores de pantalla y teclado).
 */
export function TarjetaProyecto({
  proyecto,
  formato = "normal",
  invertida = false,
  nivel = "h3",
}: Props) {
  const Titulo = nivel
  const ancha = formato === "ancha"

  return (
    <Card
      as="article"
      interactiva
      className={cn("group flex flex-col", ancha && "lg:grid lg:grid-cols-12")}
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden bg-line",
          ancha && "lg:col-span-7 lg:aspect-auto lg:min-h-96",
          ancha && invertida && "lg:order-last",
        )}
      >
        <Image
          src={proyecto.imagenPortada.src}
          alt={proyecto.imagenPortada.alt}
          fill
          sizes={
            ancha
              ? "(min-width: 1216px) 700px, (min-width: 1024px) 58vw, 100vw"
              : "(min-width: 1216px) 560px, (min-width: 768px) 50vw, 100vw"
          }
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col gap-4 p-6 md:p-8",
          ancha && "lg:col-span-5 lg:justify-center lg:p-10",
        )}
      >
        <p className="text-tiny text-ink-muted">
          <time dateTime={proyecto.fecha}>{formatearFecha(proyecto.fecha)}</time>
        </p>
        <Titulo
          className={cn("font-bold text-ink", ancha ? "text-heading" : "text-subheading")}
        >
          <Link
            href={`/proyectos/${proyecto.slug}`}
            className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-accent"
          >
            {proyecto.titulo}
          </Link>
        </Titulo>
        <p className="text-ink-muted">{proyecto.resumen}</p>
        <ul
          className={cn("flex flex-wrap gap-2 pt-2", !ancha && "mt-auto")}
          aria-label={t.detalle.tecnologias}
        >
          {proyecto.tecnologias.map((tec) => (
            <li key={tec}>
              <Badge>{tec}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
