import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { IconoEnMarco } from "@/components/ui/Icono"
import { getDiccionario, getLang } from "@/i18n"
import { cn } from "@/lib/cn"
import { formatearMes } from "@/lib/certificados"
import type { Certificado } from "@/types"

export async function TarjetaCertificado({
  certificado: c,
  sobreBanda = false,
}: {
  certificado: Certificado
  /** Sobre una banda `surface` la tarjeta pasa a `paper` para no fundirse con el fondo. */
  sobreBanda?: boolean
}) {
  const lang = await getLang()
  const t = await getDiccionario()
  const completado = c.estado === "completado"
  const idiomaTitulo = c.idiomaTitulo ?? "es"
  // Un curso en curso nunca muestra fecha ni enlace de verificación.
  const detalles = [
    t.certificados.areas[c.area],
    completado && c.fecha ? formatearMes(c.fecha, lang) : null,
    c.horas ? t.certificados.horas(c.horas) : null,
  ].filter(Boolean)

  return (
    <Card
      as="article"
      className={cn(
        "flex flex-col gap-4 p-6 shadow-none md:p-8",
        sobreBanda && "bg-paper",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <IconoEnMarco nombre="certificado" />
        {!completado && (
          <Badge className="border-accent/40 text-accent">{t.certificados.enCurso}</Badge>
        )}
      </div>
      <div>
        {/* El título va tal como lo emite la plataforma, en su idioma original. */}
        <h3
          lang={idiomaTitulo !== lang ? idiomaTitulo : undefined}
          className="text-subheading font-bold"
        >
          {c.titulo}
        </h3>
        <p className="mt-2 text-small font-bold text-ink">{c.emisor}</p>
        <p className="mt-1 text-small text-ink-muted">{detalles.join(" · ")}</p>
      </div>
      {c.aprendizaje && <p className="text-ink-muted">{c.aprendizaje}</p>}
      {completado && c.urlVerificacion && (
        <div className="mt-auto pt-2">
          <Button
            href={c.urlVerificacion}
            externo
            variante="secundario"
            icono={<ExternalLink aria-hidden />}
          >
            {t.certificados.verificar}
            <span className="sr-only">
              :{" "}
              <span lang={idiomaTitulo !== lang ? idiomaTitulo : undefined}>
                {c.titulo}
              </span>
            </span>
          </Button>
        </div>
      )}
    </Card>
  )
}
