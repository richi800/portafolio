import {
  BadgeCheck,
  Blocks,
  Cloud,
  Database,
  KanbanSquare,
  Languages,
  LayoutTemplate,
  LifeBuoy,
  ListChecks,
  Rocket,
  Server,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react"

import type { NombreIcono } from "@/types"

const iconos: Record<NombreIcono, LucideIcon> = {
  tienda: ShoppingBag,
  integraciones: Blocks,
  soporte: LifeBuoy,
  pruebas: ListChecks,
  datos: Database,
  organizacion: KanbanSquare,
  produccion: Rocket,
  frontend: LayoutTemplate,
  backend: Server,
  calidad: BadgeCheck,
  infraestructura: Cloud,
  idiomas: Languages,
}

/** Ícono decorativo a partir del nombre usado en /src/content. */
export function Icono({
  nombre,
  className,
}: {
  nombre: NombreIcono
  className?: string
}) {
  const Componente = iconos[nombre]
  return <Componente aria-hidden className={className} />
}

/** Contenedor de ícono con el tratamiento del sistema (tinte del acento). */
export function IconoEnMarco({ nombre }: { nombre: NombreIcono }) {
  return (
    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-control bg-accent/10 text-accent">
      <Icono nombre={nombre} className="size-6" />
    </span>
  )
}
