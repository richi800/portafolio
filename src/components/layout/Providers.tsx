"use client"

import { MotionConfig } from "motion/react"
import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

/** Tema claro/oscuro y configuración global de animaciones. */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* reducedMotion="user": si el sistema pide menos movimiento, motion desactiva desplazamientos. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  )
}
