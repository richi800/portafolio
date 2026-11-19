import type { ServicioContenido } from "@/types"

export const servicios: ServicioContenido[] = [
  {
    icono: "tienda",
    titulo: { es: "Tiendas en línea", en: "Online stores" },
    descripcion: {
      es: "Tiendas headless con Next.js y Shopify: rápidas en el celular, bien posicionadas en buscadores y fáciles de administrar.",
      en: "Headless stores with Next.js and Shopify: fast on mobile, well ranked in search engines and easy to manage.",
    },
    incluye: [
      { es: "Catálogo, búsqueda y filtros", en: "Catalog, search and filters" },
      { es: "Carrito y checkout con Shopify", en: "Cart and checkout with Shopify" },
      {
        es: "SEO técnico y despliegue en Vercel",
        en: "Technical SEO and deployment on Vercel",
      },
    ],
  },
  {
    icono: "integraciones",
    titulo: {
      es: "Sistemas a medida e integraciones",
      en: "Custom systems and integrations",
    },
    descripcion: {
      es: "Herramientas internas que conectan inventario, ventas y pagos con las plataformas que tu negocio ya usa.",
      en: "Internal tools that connect inventory, sales and payments with the platforms your business already uses.",
    },
    incluye: [
      { es: "Inventario y cotizaciones", en: "Inventory and quotes" },
      {
        es: "APIs REST e integraciones con CRM/ERP",
        en: "REST APIs and CRM/ERP integrations",
      },
      { es: "Pagos con Mercado Pago", en: "Payments with Mercado Pago" },
    ],
  },
  {
    icono: "soporte",
    titulo: {
      es: "Mantenimiento y soporte en producción",
      en: "Maintenance and production support",
    },
    descripcion: {
      es: "El trabajo no termina en el lanzamiento: despliegues, corrección de errores y mantenimiento del servidor.",
      en: "The work doesn't end at launch: deployments, bug fixes and server maintenance.",
    },
    incluye: [
      { es: "Despliegues y monitoreo", en: "Deployments and monitoring" },
      { es: "Corrección de errores", en: "Bug fixes" },
      { es: "Servidores Linux", en: "Linux servers" },
    ],
  },
]
