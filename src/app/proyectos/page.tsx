import type { Metadata } from "next"

import { ListadoProyectos } from "@/components/proyectos/ListadoProyectos"
import { TarjetaProyecto } from "@/components/proyectos/TarjetaProyecto"
import { Container } from "@/components/ui/Container"
import { getDiccionario } from "@/i18n"
import { getProyectos, getTecnologias } from "@/lib/proyectos"

const t = getDiccionario()

export const metadata: Metadata = {
  title: t.proyectos.titulo,
  description: t.proyectos.intro,
  alternates: { canonical: "/proyectos" },
  openGraph: {
    title: t.proyectos.titulo,
    description: t.proyectos.intro,
    url: "/proyectos",
  },
  twitter: { title: t.proyectos.titulo, description: t.proyectos.intro },
}

export default function PaginaProyectos() {
  const proyectos = getProyectos()

  return (
    <Container className="pt-12 pb-section md:pt-20">
      <header className="mb-12 max-w-prose md:mb-16">
        <h1 className="text-title font-extrabold">{t.proyectos.titulo}</h1>
        <p className="mt-5 text-lead text-ink-muted">{t.proyectos.intro}</p>
      </header>

      <ListadoProyectos
        tecnologias={getTecnologias()}
        items={proyectos.map((p) => ({
          slug: p.slug,
          tecnologias: p.tecnologias,
          tarjeta: <TarjetaProyecto proyecto={p} nivel="h2" contexto="listado" />,
        }))}
      />
    </Container>
  )
}
