import type { Metadata, Viewport } from "next"
import { Atkinson_Hyperlegible_Next, Bricolage_Grotesque } from "next/font/google"

import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { Providers } from "@/components/layout/Providers"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"
import { defaultLocale } from "@/i18n/config"
import { siteUrl } from "@/lib/sitio"

import "./globals.css"

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

const t = getDiccionario()
const tituloSitio = `${perfil.nombre}, ${perfil.titulo.toLowerCase()}`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: tituloSitio, template: `%s | ${perfil.nombre}` },
  description: t.meta.descripcion,
  applicationName: perfil.nombre,
  authors: [{ name: perfil.nombre, url: siteUrl }],
  creator: perfil.nombre,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: perfil.nombre,
    title: tituloSitio,
    description: t.meta.descripcion,
  },
  twitter: {
    card: "summary_large_image",
    title: tituloSitio,
    description: t.meta.descripcion,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1328" },
  ],
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={defaultLocale}
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
