import type { Proyecto } from "@/types"

export const inventoryBridge: Proyecto = {
  slug: "inventory-bridge",
  titulo: "Inventory Bridge",
  cliente: "Central Médica",
  resumen:
    "Sistema interno conectado a Shopify para controlar inventario por almacén con pistola de código de barras y administrar el selector de productos de la tienda.",
  caso: {
    problema:
      "La tienda necesitaba controlar su inventario real por almacén, registrar cada entrada y salida sin errores y configurar las recomendaciones del selector de productos, sin hacerlo todo a mano desde el panel de Shopify.",
    solucion:
      "Desarrollé un sistema interno con Next.js y TypeScript conectado a la Shopify Admin API y a una base de datos PostgreSQL con Prisma. Reúne la operación diaria del inventario y la administración del selector en un solo lugar.",
    funcionalidades: [
      "Dashboard con el inventario real de Shopify por almacén: productos críticos, agotados y stock bajo",
      "Capturador por escaneo: con pistola de código de barras agrega o descuenta inventario en Shopify; funciona en celular y tablet",
      "Movimientos: historial de entradas y salidas con usuario, producto, código, ubicación, cantidad y estado, con exportación a CSV",
      "Administración del selector de productos: catálogo, reglas, rangos de aros, bolsas compatibles, cotizaciones y simulador",
      "Estadísticas de la tienda con conteos anónimos: visitas, vistas de producto, búsquedas, uso del selector, cotizaciones, clics a WhatsApp, carrito e inicios de pago",
      "Órdenes de compra, cotizaciones en PDF, gestión de usuarios y configuración",
    ],
    resultado:
      "Está en producción como la herramienta interna de la tienda: ahí se registra cada movimiento de inventario y es el motor que alimenta el selector de productos.",
  },
  tecnologias: [
    "Next.js",
    "TypeScript",
    "Shopify Admin API",
    "PostgreSQL",
    "Prisma",
    "Vercel",
  ],
  // Privacidad: la dirección del almacén está difuminada en todas las capturas.
  imagenPortada: {
    src: "/images/proyectos/inventory-bridge/portada.webp",
    alt: "Dashboard de Inventory Bridge con productos críticos, agotados y la tabla de productos con inventario bajo",
  },
  galeria: [
    {
      src: "/images/proyectos/inventory-bridge/capturador-escaneo.webp",
      alt: "Capturador de inventario: selector de almacén, campo para código de barras, cantidad y botones para agregar, descontar y ejecutar",
      leyenda: "Capturador por escaneo: se usa con pistola de código de barras.",
      ancho: 1600,
      alto: 855,
    },
    {
      src: "/images/proyectos/inventory-bridge/movimientos.webp",
      alt: "Historial de movimientos de inventario con fecha, usuario, acción, producto, código, cantidad y estado, y botón para descargar CSV",
      leyenda: "Movimientos: historial de entradas y salidas con exportación a CSV.",
      ancho: 1600,
      alto: 879,
    },
    {
      src: "/images/proyectos/inventory-bridge/admin-selector.webp",
      alt: "Panel de administración del selector de productos con catálogo, reglas, rangos activos, cotizaciones y la ruta de publicación",
      leyenda: "Administración del selector: el motor de recomendaciones de la tienda.",
      ancho: 1600,
      alto: 794,
    },
    {
      src: "/images/proyectos/inventory-bridge/estadisticas.webp",
      alt: "Estadísticas de la tienda de los últimos 30 días: visitas, vistas de producto, búsquedas, uso del selector, cotizaciones y clics a WhatsApp, con gráfica de visitas por día",
      leyenda: "Estadísticas de la tienda con conteos anónimos, sin datos personales.",
      ancho: 1600,
      alto: 650,
    },
  ],
  destacado: true,
  // TODO(Ricardo): confirma la fecha real de lanzamiento (AAAA-MM-DD).
  fecha: "2025-02-01",
}
