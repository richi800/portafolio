import type { Metadata } from "next"

import { ListadoProyectos } from "@/components/proyectos/ListadoProyectos"
import { TarjetaProyecto } from "@/components/proyectos/TarjetaProyecto"
import { Container } from "@/components/ui/Container"
import { getDiccionario, getLang } from "@/i18n"
import { hasLocale } from "@/i18n/config"
import { getDiccionarioDe } from "@/i18n/diccionarios"
import { getProyectos, getTecnologias } from "@/lib/proyectos"
import { metadataDePagina } from "@/lib/seo"

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/proyectos">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const t = getDiccionarioDe(lang).proyectos
  return {
    title: t.titulo,
    ...metadataDePagina({
      lang,
      path: "/proyectos",
      titulo: t.titulo,
      descripcion: t.intro,
    }),
  }
}

export default async function PaginaProyectos() {
  const lang = await getLang()
  const t = await getDiccionario()
  const proyectos = getProyectos(lang)

  return (
    <Container className="pt-12 pb-section md:pt-20">
      <header className="mb-12 max-w-prose md:mb-16">
        <h1 className="text-title font-extrabold">{t.proyectos.titulo}</h1>
        <p className="mt-5 text-lead text-ink-muted">{t.proyectos.intro}</p>
      </header>

      <ListadoProyectos
        tecnologias={getTecnologias()}
        textos={{
          filtrar: t.proyectos.filtrar,
          todas: t.proyectos.todas,
          vacio: t.proyectos.vacio,
          // Las funciones no pasan de servidor a cliente: va el texto ya armado para cada
          // cantidad posible (índice = número de proyectos visibles).
          resultados: Array.from({ length: proyectos.length + 1 }, (_, n) =>
            t.proyectos.resultados(n),
          ),
        }}
        items={proyectos.map((p) => ({
          slug: p.slug,
          tecnologias: p.tecnologias,
          tarjeta: <TarjetaProyecto proyecto={p} nivel="h2" contexto="listado" />,
        }))}
      />
    </Container>
  )
}
