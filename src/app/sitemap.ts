import type { MetadataRoute } from "next"

import { locales, ruta } from "@/i18n/config"
import { getProyectos } from "@/lib/proyectos"
import { alternativas } from "@/lib/seo"
import { siteUrl } from "@/lib/sitio"

type Entrada = Omit<MetadataRoute.Sitemap[number], "url" | "alternates"> & {
  /** Ruta sin idioma: "/", "/soporte", "/proyectos/mi-slug". */
  path: string
}

const absoluta = (url: string) => `${siteUrl}${url}`

/** Una entrada por página y por idioma, cada una con sus alternativas hreflang. */
export default function sitemap(): MetadataRoute.Sitemap {
  // Los slugs y las fechas son iguales en ambos idiomas.
  const proyectos = getProyectos("es")
  const ultimo = proyectos
    .map((p) => p.fecha)
    .sort()
    .at(-1)

  const paginas: Entrada[] = [
    { path: "/", lastModified: ultimo, changeFrequency: "monthly", priority: 1 },
    { path: "/proyectos", lastModified: ultimo, changeFrequency: "monthly", priority: 0.8 },
    { path: "/soporte", changeFrequency: "monthly", priority: 0.8 },
    ...proyectos.map((p) => ({
      path: `/proyectos/${p.slug}`,
      lastModified: p.fecha,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]

  return paginas.flatMap(({ path, ...resto }) => {
    const languages = Object.fromEntries(
      Object.entries(alternativas(path)).map(([l, url]) => [l, absoluta(url)]),
    )
    return locales.map((lang) => ({
      url: absoluta(ruta(lang, path)),
      alternates: { languages },
      ...resto,
    }))
  })
}
