import { perfil } from "@/content/perfil"
import { locales, type Locale } from "@/i18n/config"

const enlaces = Object.fromEntries(
  locales.map((l) => [
    l,
    `https://wa.me/${perfil.whatsapp.numero}?text=${encodeURIComponent(perfil.whatsapp.mensaje[l])}`,
  ]),
) as Record<Locale, string>

/**
 * Enlace a WhatsApp con el mensaje prellenado en el idioma de la página. El número nunca
 * se muestra en la página.
 */
export function enlaceWhatsapp(lang: Locale): string {
  return enlaces[lang]
}
