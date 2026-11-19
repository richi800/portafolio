import Image from "next/image"

import type { Imagen } from "@/types"

/**
 * El momento memorable del sitio: el nombre en tipografía gigante con la foto
 * encajada como si fuera una letra más. Es la única animación automática del sitio.
 * Se anima con CSS (animate-subir / animate-revelar en globals.css) para que el nombre
 * se vea desde el primer pintado, sin esperar a que cargue JavaScript; el bloque
 * prefers-reduced-motion de globals.css la reduce a nada.
 */
export function HeroTitulo({ nombre, foto }: { nombre: string; foto: Imagen }) {
  const [primera, ...resto] = nombre.split(" ")
  const segunda = resto.join(" ")

  return (
    <div className="relative font-display text-display font-extrabold text-ink">
      <h1
        id="hero-titulo"
        className="text-[length:inherit] leading-[inherit] tracking-[inherit]"
      >
        <span className="block overflow-hidden pb-[0.06em]">
          <span className="block animate-subir">{primera}</span>
        </span>
        <span className="block overflow-hidden pb-[0.06em] pl-[0.74em]">
          <span className="block animate-subir-tarde">{segunda}</span>
        </span>
      </h1>

      {/* La foto ocupa el hueco al inicio de la segunda línea; sus medidas están en em. */}
      <div className="absolute bottom-[0.13em] left-0 h-[0.7em] w-[0.58em] animate-revelar overflow-hidden rounded-[0.1em] bg-line shadow-lifted">
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          // La foto mide como máximo ~98×118 px (0.58em × 0.7em de 168 px).
          sizes="(min-width: 1024px) 120px, 72px"
          quality={85}
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />
      </div>
    </div>
  )
}
