import { ImageResponse } from "next/og"

import { perfil } from "@/content/perfil"
import { defaultLocale, hasLocale, type Locale } from "@/i18n/config"

// Imagen para compartir en redes (Open Graph y Twitter), generada en el build, una por idioma.
const size = { width: 1200, height: 630 }

async function idiomaDe(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params
  return hasLocale(lang) ? lang : defaultLocale
}

/** `alt` en el idioma de la ruta (un `export const alt` sería el mismo en ambos). */
export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const lang = await idiomaDe(params)
  return [
    {
      id: "portada",
      alt: `${perfil.nombre}, ${perfil.titulo[lang]}`,
      size,
      contentType: "image/png",
    },
  ]
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const lang = await idiomaDe(params)
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#f4f6fb",
        color: "#121a33",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{ width: 20, height: 20, borderRadius: 999, background: "#f2b134" }}
        />
        <div style={{ fontSize: 30, color: "#4a5372" }}>
          {`${perfil.titulo[lang]} · ${perfil.disponibilidad[lang]}`}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 124,
          fontWeight: 800,
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
        }}
      >
        {perfil.nombre.split(" ").map((parte) => (
          <span key={parte}>{parte}</span>
        ))}
      </div>
      <div style={{ display: "flex", height: 16, width: 240, background: "#2b44e0" }} />
    </div>,
    size,
  )
}
