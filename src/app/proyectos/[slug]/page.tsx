import { ArrowLeft, Check, ExternalLink, MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Galeria } from "@/components/proyectos/Galeria"
import { VideoYoutube } from "@/components/proyectos/VideoYoutube"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { IconoGithub } from "@/components/ui/IconosMarca"
import { getDiccionario } from "@/i18n"
import { getProyecto, getProyectos } from "@/lib/proyectos"
import { enlaceWhatsapp } from "@/lib/contacto"

const t = getDiccionario()

/** Genera en el build una página estática por proyecto. */
export function generateStaticParams() {
  return getProyectos().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const proyecto = getProyecto(slug)
  if (!proyecto) return {}

  const imagen = { url: proyecto.imagenPortada.src, alt: proyecto.imagenPortada.alt }
  return {
    title: proyecto.titulo,
    description: proyecto.resumen,
    alternates: { canonical: `/proyectos/${slug}` },
    openGraph: {
      type: "article",
      title: proyecto.titulo,
      description: proyecto.resumen,
      url: `/proyectos/${slug}`,
      images: [imagen],
    },
    twitter: {
      card: "summary_large_image",
      title: proyecto.titulo,
      description: proyecto.resumen,
      images: [imagen],
    },
  }
}

export default async function PaginaProyecto({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params
  const proyecto = getProyecto(slug)
  if (!proyecto) notFound()

  return (
    <article className="pt-10 pb-section md:pt-16">
      <Container>
        <Link
          href="/proyectos"
          className="inline-flex min-h-11 items-center gap-2 text-small font-bold text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft aria-hidden className="size-4" />
          {t.detalle.volver}
        </Link>

        <header className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <h1 className="text-title font-extrabold">{proyecto.titulo}</h1>
            <p className="mt-5 max-w-prose text-lead text-ink-muted">
              {proyecto.resumen}
            </p>
          </div>
          {(proyecto.repoUrl || proyecto.demoUrl) && (
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              {proyecto.demoUrl && (
                <Button
                  href={proyecto.demoUrl}
                  externo
                  icono={<ExternalLink aria-hidden />}
                >
                  {t.detalle.demo}
                </Button>
              )}
              {proyecto.repoUrl && (
                <Button
                  href={proyecto.repoUrl}
                  externo
                  variante={proyecto.demoUrl ? "secundario" : "primario"}
                  icono={<IconoGithub />}
                >
                  {t.detalle.codigo}
                </Button>
              )}
            </div>
          )}
        </header>

        {/* 16:10 = proporción de la portada: así no se recorta la captura. */}
        <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-media border border-line bg-line shadow-lifted">
          <Image
            src={proyecto.imagenPortada.src}
            alt={proyecto.imagenPortada.alt}
            fill
            sizes="(min-width: 1216px) 1136px, 100vw"
            quality={85}
            loading="eager"
            fetchPriority="high"
            className="object-cover dark:brightness-90"
          />
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="max-w-prose space-y-12 md:col-span-8">
            <section aria-labelledby="problema-titulo">
              <h2 id="problema-titulo" className="text-subheading font-bold">
                {t.detalle.problema}
              </h2>
              <p className="mt-3 text-lead text-ink">{proyecto.caso.problema}</p>
            </section>

            <section aria-labelledby="solucion-titulo">
              <h2 id="solucion-titulo" className="text-subheading font-bold">
                {t.detalle.solucion}
              </h2>
              <p className="mt-3 text-ink-muted">{proyecto.caso.solucion}</p>
              <ul className="mt-6 space-y-4">
                {/* space-y-4: con funcionalidades de 2-3 líneas cada punto debe verse
                    separado del siguiente; mt-1.5 centra el check en la primera línea. */}
                {proyecto.caso.funcionalidades.map((f) => (
                  <li key={f} className="flex gap-3 text-ink">
                    <Check aria-hidden className="mt-1.5 size-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="stack-titulo">
              <h2 id="stack-titulo" className="text-subheading font-bold">
                {t.detalle.stack}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {proyecto.tecnologias.map((tec) => (
                  <li key={tec}>
                    <Badge>{tec}</Badge>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="resultado-titulo">
              <h2 id="resultado-titulo" className="text-subheading font-bold">
                {t.detalle.resultado}
              </h2>
              <p className="mt-3 text-ink-muted">{proyecto.caso.resultado}</p>
            </section>
          </div>

          <aside className="space-y-8 md:col-span-4 md:border-l md:border-line md:pl-8">
            {proyecto.cliente && (
              <dl>
                <dt className="text-tiny font-bold text-ink-muted">
                  {t.detalle.cliente}
                </dt>
                <dd className="mt-1 font-bold text-ink">{proyecto.cliente}</dd>
              </dl>
            )}
            <div>
              <p className="font-display text-subheading font-bold">
                {t.detalle.cotizar}
              </p>
              <Button
                href={enlaceWhatsapp}
                externo
                icono={<MessageCircle aria-hidden />}
                className="mt-4"
              >
                {t.hero.cotizar}
              </Button>
            </div>
          </aside>
        </div>

        {proyecto.videoYoutube && (
          <section aria-labelledby="video-titulo" className="mt-section">
            <h2 id="video-titulo" className="mb-8 text-heading font-bold">
              {t.detalle.video}
            </h2>
            <VideoYoutube id={proyecto.videoYoutube} titulo={proyecto.titulo} />
          </section>
        )}

        {proyecto.galeria.length > 0 && (
          <section aria-labelledby="galeria-titulo" className="mt-section">
            <h2 id="galeria-titulo" className="mb-8 text-heading font-bold">
              {t.detalle.galeria}
            </h2>
            <Galeria imagenes={proyecto.galeria} />
          </section>
        )}

        {/* Cierre: tras una galería larga la página no termina en seco. */}
        <div className="mt-16 border-t border-line pt-8 md:mt-24">
          <Link
            href="/proyectos"
            className="inline-flex min-h-11 items-center gap-2 text-small font-bold text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft aria-hidden className="size-4" />
            {t.detalle.volver}
          </Link>
        </div>
      </Container>
    </article>
  )
}
