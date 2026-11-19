import { notFound } from "next/navigation"

/**
 * Cualquier ruta que no existe dentro de un idioma (/en/algo) muestra la 404 del sitio
 * (`[lang]/not-found.tsx`) con su layout e idioma, en vez de la 404 genérica de Next.
 */
export default function RutaInexistente() {
  notFound()
}
