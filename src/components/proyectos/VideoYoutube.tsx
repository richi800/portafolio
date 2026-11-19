"use client"

import { Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

/**
 * Video ligero: muestra solo la miniatura y carga el iframe de YouTube
 * (más de 500 KB de JavaScript) cuando la persona hace clic.
 * Usa youtube-nocookie.com para no dejar cookies hasta reproducir.
 * `etiquetaReproducir` llega traducida del Server Component padre.
 */
export function VideoYoutube({
  id,
  titulo,
  etiquetaReproducir,
}: {
  id: string
  titulo: string
  etiquetaReproducir: string
}) {
  const [activo, setActivo] = useState(false)

  return (
    <div className="relative aspect-video overflow-hidden rounded-media bg-ink shadow-lifted dark:bg-paper">
      {activo ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivo(true)}
          aria-label={etiquetaReproducir}
          className="group absolute inset-0 flex items-center justify-center focus-visible:outline-offset-[-6px] focus-visible:outline-accent-ink"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1216px) 1136px, 100vw"
            className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="relative flex size-20 items-center justify-center rounded-full bg-accent text-accent-ink shadow-lifted transition-transform duration-300 ease-out-expo group-hover:scale-110 motion-reduce:group-hover:scale-100">
            <Play aria-hidden className="ml-1 size-8 fill-current" />
          </span>
        </button>
      )}
    </div>
  )
}
