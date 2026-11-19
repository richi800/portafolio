import { Card } from "@/components/ui/Card"
import { IconoEnMarco } from "@/components/ui/Icono"
import type { PracticaSoporte } from "@/types"

/** Buena práctica de soporte. Va sobre bandas `surface`, por eso la tarjeta es `paper`. */
export function TarjetaPractica({ practica }: { practica: PracticaSoporte }) {
  return (
    <Card as="article" className="flex flex-1 flex-col gap-4 bg-paper p-6 shadow-none">
      <IconoEnMarco nombre={practica.icono} />
      <h3 className="text-subheading font-bold">{practica.titulo}</h3>
      <p className="text-ink-muted">{practica.descripcion}</p>
    </Card>
  )
}
