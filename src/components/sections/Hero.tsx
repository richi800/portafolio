import { MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { FotoEncuadrada } from "@/components/ui/FotoEncuadrada"
import { getDiccionario, getLang } from "@/i18n"
import { ruta } from "@/i18n/config"
import { enlaceWhatsapp } from "@/lib/contacto"
import { getPerfil } from "@/lib/contenido"

import { HeroTitulo } from "./HeroTitulo"

/**
 * Retrato y nombre comparten protagonismo en una retícula de 12 columnas.
 * - Móvil: el nombre (7 col.) y la foto (5 col.) van lado a lado, así la cara se ve en la
 *   primera pantalla sin empujar el título y la presentación hacia abajo.
 * - Desde md: todo el texto a la izquierda (7 col.) y el retrato completo a la derecha
 *   (5 col.), centrado en altura, con un bloque cobalto detrás que lo ancla al texto.
 */
export async function Hero() {
  const lang = await getLang()
  const t = await getDiccionario()
  const perfil = getPerfil(lang)
  return (
    <section aria-labelledby="hero-titulo" className="pt-8 pb-16 md:pt-12 md:pb-24">
      <Container className="grid grid-cols-12 gap-x-4 md:gap-x-8 lg:gap-x-12">
        <p className="col-span-12 inline-flex items-center gap-3 justify-self-start rounded-full border border-line bg-surface py-2 pr-4 pl-3 text-small font-bold text-ink md:col-span-7">
          <span aria-hidden className="size-2.5 shrink-0 rounded-full bg-signal" />
          {perfil.disponibilidad}
        </p>

        <HeroTitulo
          nombre={perfil.nombre}
          className="col-span-7 mt-6 self-end md:mt-10 md:self-auto"
        />

        <div className="relative col-span-5 mt-6 md:col-start-8 md:row-span-3 md:row-start-1 md:mt-0 md:self-center">
          {/* Bloque decorativo: asoma por la esquina inferior izquierda, hacia el texto. */}
          <div
            aria-hidden
            className="absolute -bottom-4 -left-4 hidden size-2/3 rounded-media bg-accent md:block"
          />
          <div className="relative aspect-4/5 overflow-hidden rounded-card bg-line shadow-lifted md:rounded-media">
            <FotoEncuadrada
              foto={perfil.foto}
              // Móvil: 5 de 12 columnas con zoom 1.5 → hasta ~55vw pintados. Desde md la caja
              // mide ~37vw sin zoom, hasta 448 px cuando el contenedor llega a max-w-page.
              sizes="(min-width: 1296px) 448px, (min-width: 768px) 37vw, 55vw"
              zoom="scale-150 md:scale-100"
              prioritaria
            />
          </div>
        </div>

        <div className="col-span-12 mt-8 max-w-prose md:col-span-7 md:mt-10">
          <p className="font-display text-subheading font-bold text-ink">
            {perfil.titulo}
          </p>
          <ul
            aria-label={t.hero.stack}
            className="mt-2 flex flex-wrap gap-x-2 text-small font-bold text-accent"
          >
            {perfil.stack.map((tec, i) => (
              <li key={tec} className="flex items-center gap-x-2">
                {i > 0 && (
                  <span aria-hidden className="text-ink-muted">
                    ·
                  </span>
                )}
                {tec}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-body text-ink-muted md:text-lead">
            {perfil.presentacion}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={enlaceWhatsapp(lang)} externo icono={<MessageCircle aria-hidden />}>
              {t.hero.cotizar}
            </Button>
            <Button href={ruta(lang, "/#proyectos")} variante="secundario">
              {t.hero.verProyectos}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
