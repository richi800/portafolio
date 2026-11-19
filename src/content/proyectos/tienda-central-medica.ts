import type { Proyecto } from "@/types"

export const tiendaCentralMedica: Proyecto = {
  slug: "tienda-central-medica",
  titulo: "Tienda en línea Central Médica",
  cliente: "Central Médica",
  resumen:
    "Tienda en línea con Next.js integrada con Shopify: catálogo, búsqueda, filtros, carrito persistente y checkout.",
  caso: {
    problema:
      "Central Médica necesitaba vender en línea con una tienda propia: rápida en el celular, fácil de encontrar en buscadores y administrada desde Shopify.",
    solucion:
      "Construí una tienda headless con Next.js, React y TypeScript conectada a la Shopify Storefront API. Shopify se encarga de productos, pagos y pedidos; el sitio, de la experiencia de compra.",
    funcionalidades: [
      "Catálogo con búsqueda y filtros",
      "Carrito persistente y checkout de Shopify",
      "Diseño responsivo y SEO técnico",
      "Despliegues en Vercel",
    ],
    resultado:
      "La tienda está en producción en centralmedica.com.mx y le doy soporte después de cada liberación.",
  },
  tecnologias: ["Next.js", "React", "TypeScript", "Shopify Storefront API", "Vercel"],
  // TODO(Ricardo): reemplaza con capturas reales (1600×1000 px, JPG o WebP) en
  // public/images/proyectos/tienda-central-medica/portada.jpg, galeria-1.jpg y galeria-2.jpg
  imagenPortada: {
    src: "/images/proyectos/tienda-central-medica/portada.jpg",
    alt: "Página de inicio de la tienda en línea de Central Médica",
  },
  galeria: [
    {
      src: "/images/proyectos/tienda-central-medica/galeria-1.jpg",
      alt: "Catálogo de productos con búsqueda y filtros",
    },
    {
      src: "/images/proyectos/tienda-central-medica/galeria-2.jpg",
      alt: "Carrito de compras antes del checkout",
    },
  ],
  demoUrl: "https://centralmedica.com.mx",
  destacado: true,
  // TODO(Ricardo): confirma la fecha real de liberación (AAAA-MM-DD).
  fecha: "2025-02-01",
}
