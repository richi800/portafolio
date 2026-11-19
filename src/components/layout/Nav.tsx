"use client"

import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useId, useState } from "react"

import { getDiccionario } from "@/i18n"
import { cn } from "@/lib/cn"

import { enlacesNav } from "./navegacion"
import { ThemeToggle } from "./ThemeToggle"

const t = getDiccionario()

function esActual(pathname: string, href: string) {
  return href === "/proyectos" && pathname.startsWith("/proyectos")
}

const claseEnlace =
  "relative rounded-control px-3 py-2 text-small font-bold text-ink-muted transition-colors hover:text-ink aria-[current=page]:text-ink"

export function Nav() {
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
      <nav aria-label={t.nav.principal} className="hidden items-center gap-1 md:flex">
        <ul className="flex items-center gap-1">
          {enlacesNav.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                aria-current={esActual(pathname, e.href) ? "page" : undefined}
                className={claseEnlace}
              >
                {e.etiqueta}
                {esActual(pathname, e.href) && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent dark:bg-signal"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle className="ml-2" />
      </nav>

      {/* Móvil */}
      <div className="flex items-center gap-1 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls={panelId}
          aria-label={abierto ? t.nav.cerrarMenu : t.nav.abrirMenu}
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
            aria-label={t.nav.principal}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full border-b border-line bg-paper shadow-lifted md:hidden"
          >
            <ul className="mx-auto flex max-w-page flex-col px-gutter py-4">
              {enlacesNav.map((e) => (
                <li key={e.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={e.href}
                    onClick={() => setAbierto(false)}
                    aria-current={esActual(pathname, e.href) ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center font-display text-subheading font-bold text-ink",
                      "aria-[current=page]:text-accent",
                    )}
                  >
                    {e.etiqueta}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
