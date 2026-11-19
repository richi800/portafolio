import { cn } from "@/lib/cn"

/** Retraso escalonado por línea: la primera sube, las demás la siguen. */
const entradas = ["animate-subir", "animate-subir-tarde", "animate-subir-final"]

/**
 * El nombre del hero, una palabra por línea para que los nombres largos nunca desborden.
 * Es la única animación automática del sitio; es CSS (animate-subir* en globals.css)
 * para que el nombre se vea desde el primer pintado sin esperar a React, y el bloque
 * prefers-reduced-motion de globals.css la reduce a nada.
 */
export function HeroTitulo({
  nombre,
  className,
}: {
  nombre: string
  className?: string
}) {
  const palabras = nombre.split(" ")

  return (
    <h1 id="hero-titulo" className={cn("text-hero font-extrabold text-ink", className)}>
      {palabras.map((palabra, i) => (
        // Cada línea recorta su propio contenido: la palabra sube desde debajo de su caja.
        <span key={palabra + i} className="block overflow-hidden">
          <span className={cn("block", entradas[Math.min(i, entradas.length - 1)])}>
            {palabra}
            {i < palabras.length - 1 && " "}
          </span>
        </span>
      ))}
    </h1>
  )
}
