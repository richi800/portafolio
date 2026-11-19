"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { getDiccionario } from "@/i18n"
import { cn } from "@/lib/cn"

/**
 * Los dos íconos se renderizan siempre y el CSS (variante dark:) decide cuál se ve,
 * así no hay desajuste de hidratación ni parpadeo.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const t = getDiccionario()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={t.nav.tema}
      title={t.nav.tema}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-control text-ink-muted transition-colors hover:bg-surface hover:text-ink",
        className,
      )}
    >
      <Moon aria-hidden className="size-5 dark:hidden" />
      <Sun aria-hidden className="hidden size-5 dark:block" />
    </button>
  )
}
