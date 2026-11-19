import { getDiccionario } from "@/i18n"

const t = getDiccionario()

export const enlacesNav = [
  { href: "/#sobre-mi", etiqueta: t.nav.sobreMi },
  { href: "/proyectos", etiqueta: t.nav.proyectos },
  { href: "/#contacto", etiqueta: t.nav.contacto },
] as const
