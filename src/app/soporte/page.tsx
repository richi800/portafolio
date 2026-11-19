import { Download, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

import { ArticuloCaso } from "@/components/soporte/ArticuloCaso"
import { CicloIncidente } from "@/components/soporte/CicloIncidente"
import { TarjetaPractica } from "@/components/soporte/TarjetaPractica"
import { Certificaciones } from "@/components/sections/Certificaciones"
import { Contacto } from "@/components/sections/Contacto"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { herramientasSoporte, introSoporte, practicasSoporte } from "@/content/soporte"
import { getDiccionario } from "@/i18n"
import { enlaceWhatsapp } from "@/lib/contacto"
import { getCvs, rutaCvSoporte } from "@/lib/cv"
import { getCertificados } from "@/lib/certificados"
import { getCasosSoporte } from "@/lib/soporte"
import type { AreaCertificado } from "@/types"

const t = getDiccionario()
const s = t.soportePagina
const areasSoporte: AreaCertificado[] = ["soporte", "seguridad", "redes"]

type Tono = "paper" | "surface"

export const metadata: Metadata = {
  title: { absolute: s.metaTitulo },
  description: s.metaDescripcion,
  alternates: { canonical: "/soporte" },
  openGraph: { title: s.metaTitulo, description: s.metaDescripcion, url: "/soporte" },
  twitter: { title: s.metaTitulo, description: s.metaDescripcion },
}

export default function PaginaSoporte() {
  const casos = getCasosSoporte()
  const cvSoporte = getCvs().find((cv) => cv.ruta === rutaCvSoporte)
  const hayCertificados = getCertificados(areasSoporte).length > 0

  /*
   * Bandas alternas aunque falten bloques: Ciclo (paper) → Prácticas (surface) →
   * [Casos (paper)] → Herramientas → [Certificaciones] → Contacto. Dos bandas paper seguidas
   * duplicarían el aire y dos surface se pegarían. Contacto solo necesita padding superior
   * si lo que tiene arriba es una banda surface.
   */
  const tonoHerramientas: Tono = casos.length > 0 ? "surface" : "paper"
  const tonoCertificados: Tono = tonoHerramientas === "surface" ? "paper" : "surface"
  const tonoFinal = hayCertificados ? tonoCertificados : tonoHerramientas

  return (
    <>
      <Container className="pt-12 md:pt-20">
        <header className="max-w-3xl">
          <h1 className="text-title font-extrabold">{s.titulo}</h1>
          <p className="mt-6 font-display text-subheading font-bold text-ink">
            {introSoporte.frase}
          </p>
          <p className="mt-5 max-w-prose text-lead text-ink-muted">
            {introSoporte.experiencia}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {cvSoporte && (
              <Button href={cvSoporte.ruta} descargar icono={<Download aria-hidden />}>
                {s.cvSoporte}
              </Button>
            )}
            <Button
              href={enlaceWhatsapp}
              externo
              variante={cvSoporte ? "secundario" : "primario"}
              icono={<MessageCircle aria-hidden />}
            >
              {s.whatsapp}
            </Button>
          </div>
        </header>
      </Container>

      <Section id="ciclo" titulo={s.ciclo} intro={s.cicloIntro}>
        <CicloIncidente />
      </Section>

      <Section
        id="practicas"
        titulo={s.practicas}
        intro={s.practicasIntro}
        tono="surface"
      >
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {practicasSoporte.map((p) => (
            <li key={p.titulo} className="flex">
              <TarjetaPractica practica={p} />
            </li>
          ))}
        </ul>
      </Section>

      {casos.length > 0 && (
        <Section id="casos" titulo={s.casos} intro={s.casosIntro}>
          <div className="space-y-8">
            {casos.map((c) => (
              <ArticuloCaso key={c.slug} caso={c} />
            ))}
          </div>
        </Section>
      )}

      <Section
        id="herramientas"
        titulo={s.herramientas}
        intro={s.herramientasIntro}
        tono={tonoHerramientas}
      >
        <ul className="flex flex-wrap gap-3">
          {herramientasSoporte.map((h) => (
            <li key={h}>
              <Badge className="px-4 py-2 text-small text-ink">{h}</Badge>
            </li>
          ))}
        </ul>
      </Section>

      <Certificaciones
        areas={areasSoporte}
        titulo={s.certificados}
        tono={tonoCertificados}
      />

      <Contacto
        titulo={s.ctaTitulo}
        intro={s.ctaIntro}
        cvPrimero={rutaCvSoporte}
        className={tonoFinal === "surface" ? "pt-section" : undefined}
      />
    </>
  )
}
