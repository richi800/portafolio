import Link from "next/link"

import { Container } from "@/components/ui/Container"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"

import { Nav } from "./Nav"

const t = getDiccionario()

export function Header() {
  return (
    <>
      <a
        href="#contenido"
        className="fixed top-3 left-3 z-50 -translate-y-24 rounded-control bg-accent px-4 py-3 text-small font-bold text-accent-ink transition-transform focus-visible:translate-y-0"
      >
        {t.nav.saltar}
      </a>
      <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
        <Container className="relative flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center font-display text-lead font-extrabold tracking-tight text-ink"
            aria-label={`${perfil.nombre}, ${t.nav.inicio}`}
          >
            {perfil.nombre}
            <span aria-hidden className="text-signal">
              .
            </span>
          </Link>
          <Nav />
        </Container>
      </header>
    </>
  )
}
