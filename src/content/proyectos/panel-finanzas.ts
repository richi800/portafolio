import type { Proyecto } from "@/types"

// EJEMPLO — reemplaza o borra este archivo cuando tengas proyectos reales.
export const panelFinanzas: Proyecto = {
  slug: "panel-finanzas",
  titulo: "Panel de finanzas personales (EJEMPLO)",
  resumen:
    "Proyecto de ejemplo: una app para registrar gastos e ingresos y ver en qué se va el dinero cada mes.",
  descripcion: `Este es un proyecto de EJEMPLO para que veas el formato. Aquí va la descripción larga: qué problema resuelve, para quién es y qué decisiones técnicas tomaste.

Puedes escribir varios párrafos separados por una línea en blanco. Por ejemplo: los movimientos se guardan en el navegador, las gráficas se generan en el cliente y todo funciona sin conexión.

Cierra con lo que aprendiste o lo que harías distinto la próxima vez.`,
  tecnologias: ["Next.js", "TypeScript", "Tailwind CSS"],
  imagenPortada: {
    src: "/images/proyectos/panel-finanzas/portada.jpg",
    alt: "Captura de ejemplo del panel de finanzas con gráficas de gastos",
  },
  galeria: [
    {
      src: "/images/proyectos/panel-finanzas/galeria-1.jpg",
      alt: "Captura de ejemplo: formulario para registrar un gasto",
    },
    {
      src: "/images/proyectos/panel-finanzas/galeria-2.jpg",
      alt: "Captura de ejemplo: resumen mensual por categoría",
    },
  ],
  repoUrl: "https://github.com/usuario-ejemplo/panel-finanzas",
  demoUrl: "https://panel-finanzas-ejemplo.vercel.app",
  destacado: true,
  fecha: "2026-10-12",
}
