import { formatoDe, type Locale } from "@/i18n/config"

/**
 * URL pública del sitio. En Vercel se detecta sola; para un dominio propio
 * define la variable NEXT_PUBLIC_SITE_URL (por ejemplo https://ricardorivas.dev).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")

/** "2026-10-12" → "octubre de 2026" / "October 2026" */
export function formatearFecha(fecha: string, lang: Locale) {
  return new Intl.DateTimeFormat(formatoDe[lang], {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${fecha}T00:00:00Z`))
}
