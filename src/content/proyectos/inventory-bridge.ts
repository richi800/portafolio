import type { Proyecto } from "@/types"

export const inventoryBridge: Proyecto = {
  slug: "inventory-bridge",
  titulo: "Inventory Bridge",
  cliente: "Central Médica",
  resumen:
    "Sistema interno conectado a Shopify para administrar productos, precios e inventario y generar cotizaciones en PDF.",
  caso: {
    problema:
      "El equipo necesitaba administrar productos, precios e inventario de la tienda y preparar cotizaciones desde un solo lugar.",
    solucion:
      "Desarrollé un sistema interno con Next.js y TypeScript conectado a la Shopify Admin API, con su propia base de datos en PostgreSQL mediante Prisma.",
    funcionalidades: [
      "Administración de productos y precios",
      "Control de inventario sincronizado con Shopify",
      "Cotizaciones en PDF",
    ],
    resultado:
      "Está en producción como la herramienta interna para administrar el catálogo de la tienda.",
  },
  tecnologias: [
    "Next.js",
    "TypeScript",
    "Shopify Admin API",
    "PostgreSQL",
    "Prisma",
    "Vercel",
  ],
  // TODO(Ricardo): reemplaza con capturas reales (1600×1000 px, JPG o WebP) en
  // public/images/proyectos/inventory-bridge/portada.jpg, galeria-1.jpg y galeria-2.jpg.
  // Es un sistema interno: oculta precios, clientes o datos sensibles antes de capturar.
  imagenPortada: {
    src: "/images/proyectos/inventory-bridge/portada.jpg",
    alt: "Panel de Inventory Bridge con la lista de productos",
  },
  galeria: [
    {
      src: "/images/proyectos/inventory-bridge/galeria-1.jpg",
      alt: "Edición de precio e inventario de un producto",
    },
    {
      src: "/images/proyectos/inventory-bridge/galeria-2.jpg",
      alt: "Cotización generada en PDF",
    },
  ],
  destacado: true,
  // TODO(Ricardo): confirma la fecha real de liberación (AAAA-MM-DD).
  fecha: "2025-02-01",
}
