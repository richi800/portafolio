import { ListadoCertificados } from "@/components/certificados/ListadoCertificados"
import { TarjetaCertificado } from "@/components/certificados/TarjetaCertificado"
import { Section } from "@/components/ui/Section"
import { getDiccionario } from "@/i18n"
import { getAreasCertificados, getCertificados } from "@/lib/certificados"
import type { AreaCertificado } from "@/types"

const t = getDiccionario()

/** Si no hay certificados (en las áreas pedidas), la sección no se renderiza. */
export function Certificaciones({
  areas,
  titulo = t.certificados.titulo,
  tono,
}: {
  /** Limita la sección a estas áreas (en /soporte: soporte, seguridad y redes). */
  areas?: AreaCertificado[]
  titulo?: string
  tono?: "paper" | "surface"
}) {
  const lista = getCertificados(areas)
  if (lista.length === 0) return null

  return (
    <Section
      id="certificaciones"
      titulo={titulo}
      intro={t.certificados.intro}
      tono={tono}
    >
      <ListadoCertificados
        areas={getAreasCertificados(lista)}
        items={lista.map((c) => ({
          clave: `${c.emisor}-${c.titulo}`,
          area: c.area,
          tarjeta: <TarjetaCertificado certificado={c} sobreBanda={tono === "surface"} />,
        }))}
      />
    </Section>
  )
}
