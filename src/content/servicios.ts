import type { Servicio } from "@/types"

export const servicios: Servicio[] = [
  {
    icono: "tienda",
    titulo: "Tiendas en línea",
    descripcion:
      "Shopify headless con Next.js: tiendas rápidas, responsivas y con buen SEO.",
    incluye: [
      "Catálogo, búsqueda y filtros",
      "Carrito y checkout con Shopify",
      "SEO técnico y despliegue en Vercel",
    ],
  },
  {
    icono: "integraciones",
    titulo: "Sistemas a medida e integraciones",
    descripcion: "Herramientas internas que se conectan con lo que tu negocio ya usa.",
    incluye: [
      "Inventario y cotizaciones",
      "APIs REST e integraciones con CRM/ERP",
      "Pagos con Mercado Pago",
    ],
  },
  {
    icono: "soporte",
    titulo: "Mantenimiento y soporte en producción",
    descripcion: "Me quedo después de la liberación para que todo siga funcionando.",
    incluye: ["Despliegues y monitoreo", "Corrección de errores", "Servidores Linux"],
  },
]
