import type { Servicio } from "@/types"

export const servicios: Servicio[] = [
  {
    icono: "tienda",
    titulo: "Tiendas en línea",
    descripcion:
      "Tiendas headless con Next.js y Shopify: rápidas en el celular, bien posicionadas en buscadores y fáciles de administrar.",
    incluye: [
      "Catálogo, búsqueda y filtros",
      "Carrito y checkout con Shopify",
      "SEO técnico y despliegue en Vercel",
    ],
  },
  {
    icono: "integraciones",
    titulo: "Sistemas a medida e integraciones",
    descripcion:
      "Herramientas internas que conectan inventario, ventas y pagos con las plataformas que tu negocio ya usa.",
    incluye: [
      "Inventario y cotizaciones",
      "APIs REST e integraciones con CRM/ERP",
      "Pagos con Mercado Pago",
    ],
  },
  {
    icono: "soporte",
    titulo: "Mantenimiento y soporte en producción",
    descripcion:
      "El trabajo no termina en el lanzamiento: despliegues, corrección de errores y mantenimiento del servidor.",
    incluye: ["Despliegues y monitoreo", "Corrección de errores", "Servidores Linux"],
  },
]
