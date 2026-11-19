import Link from "next/link"

import { Container } from "@/components/ui/Container"
import { perfil } from "@/content/perfil"
import { getDiccionario, getLang } from "@/i18n"
import { ruta } from "@/i18n/config"

import { enlacesNav } from "./navegacion"
import { Nav } from "./Nav"

export async function Header() {
  const lang = await getLang()
  const t = await getDiccionario()
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
            href={ruta(lang)}
            className="inline-flex min-h-11 items-center font-display text-lead font-extrabold tracking-tight text-ink"
            aria-label={`${perfil.nombreCorto}, ${t.nav.inicio}`}
          >
            {perfil.nombreCorto}
            <span aria-hidden className="text-signal">
              .
            </span>
          </Link>
          <Nav
            lang={lang}
            enlaces={enlacesNav(lang, t)}
            textos={{
              principal: t.nav.principal,
              abrirMenu: t.nav.abrirMenu,
              cerrarMenu: t.nav.cerrarMenu,
              tema: t.nav.tema,
              idioma: t.idioma.grupo,
              verIdioma: t.idioma.ver,
            }}
          />
        </Container>
      </header>
    </>
  )
}
