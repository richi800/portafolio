"use client"

import { usePathname } from "next/navigation"

import { cookieIdioma, locales, type Locale } from "@/i18n/config"
import { cn } from "@/lib/cn"

/** Un año, en segundos. */
const unAnio = 60 * 60 * 24 * 365

/** La misma página en otro idioma: cambia solo el primer segmento (/es/soporte → /en/soporte). */
function mismaPaginaEn(pathname: string, destino: Locale) {
  const [, , ...resto] = pathname.split("/")
  return `/${destino}${resto.length ? `/${resto.join("/")}` : ""}`
}

/**
 * Enlaces reales ES / EN a la misma página en el otro idioma. Al hacer clic guarda la
 * cookie `idioma` para que el proxy respete la elección en las URLs sin idioma, y
 * conserva el hash (#contacto) si lo hay. Cada opción se anuncia en su propio idioma.
 */
export function SelectorIdioma({
  actual,
  grupo,
  etiquetas,
  className,
}: {
  actual: Locale
  /** Nombre del grupo para lectores de pantalla ("Idioma" / "Language"). */
  grupo: string
  /** Texto para lectores de pantalla de cada opción, en su idioma ("View in English"). */
  etiquetas: Record<Locale, string>
  className?: string
}) {
  const pathname = usePathname()

  return (
    <ul aria-label={grupo} className={cn("flex items-center", className)}>
      {locales.map((l) => {
        const activo = l === actual
        return (
          <li key={l}>
            <a
              href={mismaPaginaEn(pathname, l)}
              hrefLang={l}
              lang={l}
              aria-current={activo ? "page" : undefined}
              onClick={(e) => {
                document.cookie = `${cookieIdioma}=${l}; max-age=${unAnio}; path=/; SameSite=Lax`
                if (activo || !window.location.hash) return
                e.preventDefault()
                window.location.assign(e.currentTarget.href + window.location.hash)
              }}
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-control text-small font-bold transition-colors",
                activo
                  ? "text-ink underline decoration-accent decoration-2 underline-offset-6 dark:decoration-signal"
                  : "text-ink-muted hover:bg-surface hover:text-ink",
              )}
            >
              {/* El nombre accesible empieza con el texto visible ("EN, View in English"):
                  quien navega por voz puede decir "EN" (WCAG 2.5.3). */}
              {l.toUpperCase()}
              <span className="sr-only">, {etiquetas[l]}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
