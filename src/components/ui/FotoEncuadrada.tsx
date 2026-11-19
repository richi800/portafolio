import Image from "next/image"

import { cn } from "@/lib/cn"
import type { Imagen } from "@/types"

type Props = {
  foto: Imagen
  sizes: string
  /** Clase de escala de Tailwind para cerrar el encuadre (por ejemplo "scale-200"). */
  zoom?: string
  /** Solo para la imagen principal de la página (LCP). */
  prioritaria?: boolean
  className?: string
}

/**
 * Foto que llena su contenedor y hace zoom alrededor del punto de interés (`foto.foco`),
 * así el mismo archivo sirve para un recorte cerrado de la cara o uno más abierto.
 * El contenedor debe tener tamaño, `relative` y `overflow-hidden`.
 */
export function FotoEncuadrada({
  foto,
  sizes,
  zoom,
  prioritaria = false,
  className,
}: Props) {
  const foco = foto.foco ?? "50% 50%"
  return (
    <Image
      src={foto.src}
      alt={foto.alt}
      fill
      sizes={sizes}
      quality={85}
      {...(prioritaria && { loading: "eager", fetchPriority: "high" })}
      style={{ objectPosition: foco, transformOrigin: foco }}
      className={cn("object-cover", zoom, className)}
    />
  )
}
