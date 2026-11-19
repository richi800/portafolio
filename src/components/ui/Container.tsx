import type { ComponentProps } from "react"

import { cn } from "@/lib/cn"

/** Centra el contenido con el ancho máximo y los márgenes laterales del sistema. */
export function Container({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto w-full max-w-page px-gutter", className)} {...rest} />
  )
}
