import type { MetadataRoute } from "next"

import { getProyectos } from "@/lib/proyectos"
import { siteUrl } from "@/lib/sitio"

export default function sitemap(): MetadataRoute.Sitemap {
  const proyectos = getProyectos()
  const ultimo = proyectos
    .map((p) => p.fecha)
    .sort()
    .at(-1)

  return [
    { url: siteUrl, lastModified: ultimo, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/proyectos`,
      lastModified: ultimo,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${siteUrl}/soporte`, changeFrequency: "monthly", priority: 0.8 },
    ...proyectos.map((p) => ({
      url: `${siteUrl}/proyectos/${p.slug}`,
      lastModified: p.fecha,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]
}
