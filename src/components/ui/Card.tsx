import type { ComponentProps, ElementType } from "react"

import { cn } from "@/lib/cn"

type CardProps<T extends ElementType> = {
  as?: T
  /** Eleva la tarjeta al pasar el cursor (solo si toda la tarjeta es un enlace). */
  interactiva?: boolean
} & Omit<ComponentProps<T>, "as">

/** Superficie elevada para agrupar contenido relacionado. */
export function Card<T extends ElementType = "div">({
  as,
  interactiva = false,
  className,
  ...rest
}: CardProps<T>) {
  const Componente: ElementType = as ?? "div"
  return (
    <Componente
      className={cn(
        "relative overflow-hidden rounded-card border border-line bg-surface shadow-raised",
        interactiva &&
          "transition-[box-shadow,border-color] duration-300 ease-out-expo hover:border-accent/50 hover:shadow-lifted",
        className,
      )}
      {...rest}
    />
  )
}
