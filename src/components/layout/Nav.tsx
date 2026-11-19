"use client"

import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useId, useState } from "react"

import type { Locale } from "@/i18n/config"
import { cn } from "@/lib/cn"

import type { EnlaceNav } from "./navegacion"
import { SelectorIdioma } from "./SelectorIdioma"
import { ThemeToggle } from "./ThemeToggle"

function esActual(pathname: string, e: EnlaceNav) {
  if (e.prefijoActivo) return pathname.startsWith(e.prefijoActivo)
  return e.href === pathname
}

/** Textos de interfaz que llegan del Header (Server Component), en el idioma de la página. */
export type TextosNav = {
  principal: string
  abrirMenu: string
  cerrarMenu: string
  tema: string
  idioma: string
  verIdioma: Record<Locale, string>
}

const claseEnlace =
  "relative inline-flex min-h-11 items-center rounded-control px-3 text-small font-bold text-ink-muted transition-colors hover:text-ink aria-[current=page]:text-ink"

export function Nav({
  enlaces,
  lang,
  textos: t,
}: {
  enlaces: EnlaceNav[]
  lang: Locale
  textos: TextosNav
}) {
  const pathname = usePathname()
  const [abierto, setAbierto] = useState(false)
  const panelId = useId()

  // Cerrar el menú móvil con Escape.
  useEffect(() => {
    if (!abierto) return
    const alPresionar = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false)
    window.addEventListener("keydown", alPresionar)
    return () => window.removeEventListener("keydown", alPresionar)
  }, [abierto])

  return (
    <>
      {/* Escritorio */}
      <nav aria-label={t.principal} className="hidden items-center gap-1 lg:flex">
        <ul className="flex items-center gap-1">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                aria-current={esActual(pathname, e) ? "page" : undefined}
                className={claseEnlace}
              >
                {e.etiqueta}
                {esActual(pathname, e) && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-accent dark:bg-signal"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <SelectorIdioma
          actual={lang}
          grupo={t.idioma}
          etiquetas={t.verIdioma}
          className="ml-2 border-l border-line pl-2"
        />
        <ThemeToggle etiqueta={t.tema} />
      </nav>

      {/* Móvil */}
      <div className="flex items-center gap-1 lg:hidden">
        <ThemeToggle etiqueta={t.tema} />
        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls={panelId}
          aria-label={abierto ? t.cerrarMenu : t.abrirMenu}
          className="inline-flex size-11 items-center justify-center rounded-control text-ink transition-colors hover:bg-surface"
        >
          {abierto ? (
            <X aria-hidden className="size-6" />
          ) : (
            <Menu aria-hidden className="size-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {abierto && (
          <motion.nav
            id={panelId}
            aria-label={t.principal}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full border-b border-line bg-paper shadow-lifted lg:hidden"
          >
            <ul className="mx-auto flex max-w-page flex-col px-gutter py-4">
              {enlaces.map((e) => (
                <li key={e.href} className="border-b border-line">
                  <Link
                    href={e.href}
                    onClick={() => setAbierto(false)}
                    aria-current={esActual(pathname, e) ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center font-display text-subheading font-bold text-ink",
                      "aria-[current=page]:text-accent",
                    )}
                  >
                    {e.etiqueta}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <SelectorIdioma
                  actual={lang}
                  grupo={t.idioma}
                  etiquetas={t.verIdioma}
                  className="-ml-3 gap-1"
                />
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
