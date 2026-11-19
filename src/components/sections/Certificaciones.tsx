import { ListadoCertificados } from "@/components/certificados/ListadoCertificados"
import { TarjetaCertificado } from "@/components/certificados/TarjetaCertificado"
import { Section } from "@/components/ui/Section"
import { getDiccionario, getLang } from "@/i18n"
import { getAreasCertificados, getCertificados } from "@/lib/certificados"
import type { AreaCertificado } from "@/types"

/** Si no hay certificados (en las áreas pedidas), la sección no se renderiza. */
export async function Certificaciones({
  areas,
  titulo,
  tono,
}: {
  /** Limita la sección a estas áreas (en /soporte: soporte, seguridad y redes). */
  areas?: AreaCertificado[]
  titulo?: string
  tono?: "paper" | "surface"
}) {
  const lang = await getLang()
  const t = (await getDiccionario()).certificados
  const lista = getCertificados(lang, areas)
  if (lista.length === 0) return null

  return (
    <Section id="certificaciones" titulo={titulo ?? t.titulo} intro={t.intro} tono={tono}>
      <ListadoCertificados
        areas={getAreasCertificados(lista)}
        textos={{
          todas: t.todas,
          filtrar: t.filtrar,
          areas: t.areas,
          resultados: Array.from({ length: lista.length + 1 }, (_, n) => t.resultados(n)),
        }}
        items={lista.map((c) => ({
          clave: `${c.emisor}-${c.titulo}`,
          area: c.area,
          tarjeta: <TarjetaCertificado certificado={c} sobreBanda={tono === "surface"} />,
        }))}
      />
    </Section>
  )
}
