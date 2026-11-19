import type { ProyectoContenido } from "@/types"

export const inventoryBridge: ProyectoContenido = {
  slug: "inventory-bridge",
  titulo: { es: "Inventory Bridge", en: "Inventory Bridge" },
  cliente: "Central Médica",
  resumen: {
    es: "Sistema interno conectado a Shopify para controlar inventario por almacén con pistola de código de barras y administrar el selector de productos de la tienda.",
    en: "An internal system connected to Shopify to track inventory by warehouse with a barcode scanner and manage the store's product finder.",
  },
  caso: {
    problema: {
      es: "La tienda necesitaba controlar su inventario real por almacén, registrar cada entrada y salida sin errores y configurar las recomendaciones del selector de productos, sin hacerlo todo a mano desde el panel de Shopify.",
      en: "The store needed to track its actual inventory by warehouse, log every stock entry and exit without errors, and configure the product finder's recommendations, without doing it all by hand in the Shopify admin.",
    },
    solucion: {
      es: "Desarrollé un sistema interno con Next.js y TypeScript conectado a la Shopify Admin API y a una base de datos PostgreSQL con Prisma. Reúne la operación diaria del inventario y la administración del selector en un solo lugar.",
      en: "I built an internal system with Next.js and TypeScript connected to the Shopify Admin API and a PostgreSQL database with Prisma. It brings daily inventory operations and product finder management together in one place.",
    },
    funcionalidades: [
      {
        es: "Dashboard con el inventario real de Shopify por almacén: productos críticos, agotados y stock bajo",
        en: "Dashboard with actual Shopify inventory by warehouse: critical, out-of-stock and low-stock products",
      },
      {
        es: "Capturador por escaneo: con pistola de código de barras agrega o descuenta inventario en Shopify; funciona en celular y tablet",
        en: "Scan-based entry: add or deduct Shopify inventory with a barcode scanner; works on phones and tablets",
      },
      {
        es: "Movimientos: historial de entradas y salidas con usuario, producto, código, ubicación, cantidad y estado, con exportación a CSV",
        en: "Stock movements: history of entries and exits with user, product, code, location, quantity and status, with CSV export",
      },
      {
        es: "Administración del selector de productos: catálogo, reglas, rangos de aros, bolsas compatibles, cotizaciones y simulador",
        en: "Product finder admin: catalog, rules, flange size ranges, compatible pouches, quotes and a simulator",
      },
      {
        es: "Estadísticas de la tienda con conteos anónimos: visitas, vistas de producto, búsquedas, uso del selector, cotizaciones, clics a WhatsApp, carrito e inicios de pago",
        en: "Store analytics with anonymous counts: visits, product views, searches, product finder usage, quotes, WhatsApp clicks, cart activity and checkouts started",
      },
      {
        es: "Órdenes de compra, cotizaciones en PDF, gestión de usuarios y configuración",
        en: "Purchase orders, PDF quotes, user management and settings",
      },
    ],
    resultado: {
      es: "Está en producción como la herramienta interna de la tienda: ahí se registra cada movimiento de inventario y es el motor que alimenta el selector de productos.",
      en: "It's in production as the store's internal tool: every inventory movement is logged there, and it's the engine behind the product finder.",
    },
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
    alt: {
      es: "Dashboard de Inventory Bridge con productos críticos, agotados y la tabla de productos con inventario bajo",
      en: "Inventory Bridge dashboard showing critical and out-of-stock products and the table of low-stock products",
    },
  },
  galeria: [
    {
      src: "/images/proyectos/inventory-bridge/capturador-escaneo.webp",
      alt: {
        es: "Capturador de inventario: selector de almacén, campo para código de barras, cantidad y botones para agregar, descontar y ejecutar",
        en: "Inventory entry screen: warehouse selector, barcode field, quantity and buttons to add, deduct and run",
      },
      leyenda: {
        es: "Capturador por escaneo: se usa con pistola de código de barras.",
        en: "Scan-based entry: used with a barcode scanner.",
      },
      ancho: 1600,
      alto: 855,
    },
    {
      src: "/images/proyectos/inventory-bridge/movimientos.webp",
      alt: {
        es: "Historial de movimientos de inventario con fecha, usuario, acción, producto, código, cantidad y estado, y botón para descargar CSV",
        en: "Inventory movement history with date, user, action, product, code, quantity and status, and a button to download CSV",
      },
      leyenda: {
        es: "Movimientos: historial de entradas y salidas con exportación a CSV.",
        en: "Stock movements: history of entries and exits with CSV export.",
      },
      ancho: 1600,
      alto: 879,
    },
    {
      src: "/images/proyectos/inventory-bridge/admin-selector.webp",
      alt: {
        es: "Panel de administración del selector de productos con catálogo, reglas, rangos activos, cotizaciones y la ruta de publicación",
        en: "Product finder admin panel with catalog, rules, active ranges, quotes and the publishing path",
      },
      leyenda: {
        es: "Administración del selector: el motor de recomendaciones de la tienda.",
        en: "Product finder admin: the store's recommendation engine.",
      },
      ancho: 1600,
      alto: 794,
    },
    {
      src: "/images/proyectos/inventory-bridge/estadisticas.webp",
      alt: {
        es: "Estadísticas de la tienda de los últimos 30 días: visitas, vistas de producto, búsquedas, uso del selector, cotizaciones y clics a WhatsApp, con gráfica de visitas por día",
        en: "Store analytics for the last 30 days: visits, product views, searches, product finder usage, quotes and WhatsApp clicks, with a chart of daily visits",
      },
      leyenda: {
        es: "Estadísticas de la tienda con conteos anónimos, sin datos personales.",
        en: "Store analytics with anonymous counts, no personal data.",
      },
      ancho: 1600,
      alto: 650,
    },
  ],
  destacado: true,
  // TODO(Ricardo): confirma la fecha real de lanzamiento (AAAA-MM-DD).
  fecha: "2025-02-01",
}
