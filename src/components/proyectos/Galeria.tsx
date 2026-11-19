import Image from "next/image"

import { cn } from "@/lib/cn"
import type { Imagen } from "@/types"

/** Galería de capturas: la primera ocupa todo el ancho si el número es impar. */
export function Galeria({ imagenes }: { imagenes: Imagen[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {imagenes.map((img, i) => {
        const ancha = imagenes.length % 2 === 1 && i === 0
        return (
          <li key={img.src} className={cn(ancha && "md:col-span-2")}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-line bg-line">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={
                  ancha
                    ? "(min-width: 1216px) 1100px, 100vw"
                    : "(min-width: 1216px) 556px, (min-width: 768px) 50vw, 100vw"
                }
                className="object-cover"
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
