import { ruta, type Locale } from "@/i18n/config"
import type { Diccionario } from "@/i18n/diccionarios"

export type EnlaceNav = {
  href: string
  etiqueta: string
  /** El enlace se marca como actual si la ruta empieza con este prefijo. */
  prefijoActivo?: string
}

/**
 * Enlaces del header. "Soporte" lleva a su propia página; "Cómo trabajo" y
 * "Certificaciones" siguen en el inicio, pero fuera del menú para no saturarlo.
 */
export function enlacesNav(lang: Locale, t: Diccionario): EnlaceNav[] {
  return [
    {
      href: ruta(lang, "/#proyectos"),
      etiqueta: t.nav.proyectos,
      prefijoActivo: ruta(lang, "/proyectos"),
    },
    { href: ruta(lang, "/soporte"), etiqueta: t.nav.soporte },
    { href: ruta(lang, "/#servicios"), etiqueta: t.nav.servicios },
    { href: ruta(lang, "/#trayectoria"), etiqueta: t.nav.trayectoria },
    { href: ruta(lang, "/#sobre-mi"), etiqueta: t.nav.sobreMi },
    { href: ruta(lang, "/#contacto"), etiqueta: t.nav.contacto },
  ]
}
