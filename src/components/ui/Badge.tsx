import type { ComponentProps } from "react"

import { cn } from "@/lib/cn"

/** Etiqueta pequeña para tecnologías. */
export function Badge({ className, ...rest }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-chip border border-line bg-paper px-2 py-0.5 text-tiny font-bold text-ink-muted",
        className,
      )}
      {...rest}
    />
  )
}
