import { FotoEncuadrada } from "@/components/ui/FotoEncuadrada"
import type { Imagen } from "@/types"

/**
 * El momento memorable del sitio: el nombre en tipografía gigante con la foto
 * encajada como si fuera una letra más, al inicio de la segunda línea.
 * Una palabra por línea para que los nombres largos nunca desborden.
 * Es la única animación automática del sitio; es CSS (animate-subir / animate-revelar
 * en globals.css) para que el nombre se vea desde el primer pintado, y el bloque
 * prefers-reduced-motion de globals.css la reduce a nada.
 */
export function HeroTitulo({ nombre, foto }: { nombre: string; foto: Imagen }) {
  const palabras = nombre.split(" ")

  return (
    <div className="relative font-display text-display font-extrabold text-ink">
      <h1
        id="hero-titulo"
        className="text-[length:inherit] leading-[inherit] tracking-[inherit]"
      >
        {palabras.map((palabra, i) => (
          <span key={palabra + i} className={i === 1 ? "block pl-[0.74em]" : "block"}>
            <span className="block overflow-hidden pb-[0.06em]">
              <span
                className={i === 0 ? "block animate-subir" : "block animate-subir-tarde"}
              >
                {palabra}
                {i < palabras.length - 1 && " "}
              </span>
            </span>
          </span>
        ))}
      </h1>

      {/*
        La foto ocupa el hueco al inicio de la segunda línea; sus medidas están en em.
        Cada línea mide 0.92em (line-height 0.86em + pb 0.06em): la segunda va de 0.92em
        a 1.84em. La foto mide lo mismo que las mayúsculas (0.67em) y arranca a su altura
        (1.01em), así su borde inferior coincide con la línea base de la palabra.
        El zoom va de la mano con `sizes`: la imagen se pinta al doble de su caja.
      */}
      <div className="absolute top-[1.01em] left-0 h-[0.67em] w-[0.58em] animate-revelar overflow-hidden rounded-[0.1em] bg-line shadow-lifted">
        <FotoEncuadrada
          foto={foto}
          // Caja de 0.58em con zoom 2 → se pinta a 1.16em. El em del hero es 15vw hasta
          // 168 px (desde 1120 px de ancho): 1.16 × 168 ≈ 195 px.
          sizes="(min-width: 1120px) 196px, 18vw"
          zoom="scale-200"
          prioritaria
        />
      </div>
    </div>
  )
}
