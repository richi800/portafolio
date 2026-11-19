import { metodo } from "@/content/metodo"
import { perfil } from "@/content/perfil"
import { servicios } from "@/content/servicios"
import { trayectoria } from "@/content/trayectoria"
import type { Locale } from "@/i18n/config"

import { porIdioma } from "./i18n"

/** Contenido de src/content/ ya resuelto a cada idioma (una vez, al cargar el módulo). */
const contenido = porIdioma({ perfil, servicios, metodo, trayectoria })

export const getPerfil = (lang: Locale) => contenido[lang].perfil
export const getServicios = (lang: Locale) => contenido[lang].servicios
export const getMetodo = (lang: Locale) => contenido[lang].metodo
export const getTrayectoria = (lang: Locale) => contenido[lang].trayectoria
