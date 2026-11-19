import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * tailwind-merge no conoce los tamaños de texto de globals.css: sin esto trata
 * `text-small` o `text-hero` como colores y los borra si la misma llamada lleva
 * `text-ink`. Mantener esta lista igual a la escala tipográfica de globals.css.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "hero",
            "display",
            "title",
            "heading",
            "subheading",
            "lead",
            "body",
            "small",
            "tiny",
          ],
        },
      ],
    },
  },
})

/** Une clases condicionales y resuelve conflictos de Tailwind. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
