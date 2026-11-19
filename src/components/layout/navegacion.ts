import { getDiccionario } from "@/i18n"

const t = getDiccionario()

/**
 * Enlaces del header. "Soporte" lleva a su propia página; "Cómo trabajo" y
 * "Certificaciones" siguen en el inicio, pero fuera del menú para no saturarlo.
 */
export const enlacesNav = [
  { href: "/#proyectos", etiqueta: t.nav.proyectos },
  { href: "/soporte", etiqueta: t.nav.soporte },
  { href: "/#servicios", etiqueta: t.nav.servicios },
  { href: "/#trayectoria", etiqueta: t.nav.trayectoria },
  { href: "/#sobre-mi", etiqueta: t.nav.sobreMi },
  { href: "/#contacto", etiqueta: t.nav.contacto },
] as const
