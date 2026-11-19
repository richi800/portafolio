import { ImageResponse } from "next/og"

import { perfil } from "@/content/perfil"

// Imagen para compartir en redes (Open Graph y Twitter), generada en el build.
export const alt = `${perfil.nombre}, ${perfil.titulo}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
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
        <div style={{ fontSize: 30, color: "#4a5372" }}>{perfil.titulo}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 150,
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
