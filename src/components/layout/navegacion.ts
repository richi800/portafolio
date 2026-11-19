import { getDiccionario } from "@/i18n"

const t = getDiccionario()

/** Enlaces del header, en el mismo orden que las secciones del inicio. */
export const enlacesNav = [
  { href: "/#proyectos", etiqueta: t.nav.proyectos },
  { href: "/#servicios", etiqueta: t.nav.servicios },
  { href: "/#como-trabajo", etiqueta: t.nav.comoTrabajo },
  { href: "/#trayectoria", etiqueta: t.nav.trayectoria },
  { href: "/#sobre-mi", etiqueta: t.nav.sobreMi },
  { href: "/#contacto", etiqueta: t.nav.contacto },
] as const
