import type { Metadata, Viewport } from "next"
import { Atkinson_Hyperlegible_Next, Bricolage_Grotesque } from "next/font/google"
import { notFound } from "next/navigation"

import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { Providers } from "@/components/layout/Providers"
import { perfil } from "@/content/perfil"
import { hasLocale, locales } from "@/i18n/config"
import { getDiccionarioDe } from "@/i18n/diccionarios"
import { metadataDePagina } from "@/lib/seo"
import { siteUrl } from "@/lib/sitio"

import "../globals.css"

// Títulos: grotesca con carácter y eje óptico, se ve bien en tamaños gigantes.
const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
  axes: ["opsz", "wdth"],
  display: "swap",
})

// Texto: diseñada para máxima legibilidad (Braille Institute), coherente con la meta WCAG.
const texto = Atkinson_Hyperlegible_Next({
  subsets: ["latin", "latin-ext"],
  variable: "--font-atkinson",
  // Next no tiene métricas de esta fuente para ajustar el respaldo; se usa el del sistema.
  adjustFontFallback: false,
  fallback: ["system-ui", "Arial", "sans-serif"],
  display: "swap",
})

/** Una versión estática de todo el sitio por idioma (obligatorio con cacheComponents). */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const t = getDiccionarioDe(lang)

  return {
    metadataBase: new URL(siteUrl),
    title: { default: t.meta.titulo, template: `%s | ${perfil.nombre}` },
    applicationName: perfil.nombre,
    authors: [{ name: perfil.nombre, url: siteUrl }],
    creator: perfil.nombre,
    robots: { index: true, follow: true },
    ...metadataDePagina({
      lang,
      path: "/",
      titulo: t.meta.titulo,
      descripcion: t.meta.descripcion,
    }),
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1328" },
  ],
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html
      lang={lang}
      // next-themes cambia la clase de <html> antes de hidratar.
      suppressHydrationWarning
      className={`${display.variable} ${texto.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <Providers>
          <Header />
          <main id="contenido" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
