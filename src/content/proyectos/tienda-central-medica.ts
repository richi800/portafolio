import type { ProyectoContenido } from "@/types"

export const tiendaCentralMedica: ProyectoContenido = {
  slug: "tienda-central-medica",
  titulo: { es: "Tienda en línea Central Médica", en: "Central Médica online store" },
  cliente: "Central Médica",
  resumen: {
    es: "Tienda de productos para ostomía con Next.js y Shopify, con un selector que guía al paciente hasta el producto compatible antes de comprar.",
    en: "An ostomy supply store built with Next.js and Shopify, with a product finder that guides patients to a compatible product before they buy.",
  },
  caso: {
    problema: {
      es: "Central Médica vende bolsas y barreras para ostomía. Muchos pacientes no saben qué bolsa o barrera necesitan, y elegir mal significa comprar un producto que no les sirve. Además, la tienda tenía que ser rápida en el celular, fácil de encontrar en buscadores y administrarse desde Shopify.",
      en: "Central Médica sells ostomy pouches and skin barriers. Many patients don't know which pouch or barrier they need, and choosing the wrong one means buying a product that won't work for them. The store also had to be fast on mobile, easy to find on search engines and managed from Shopify.",
    },
    solucion: {
      es: "Construí una tienda headless con Next.js, React y TypeScript conectada a la Shopify Storefront API. La pieza central es el selector de productos: un asistente de 8 pasos (tipo de estoma, medida, abertura, efluente, abdomen, superficie, tono y sistema) que recomienda productos compatibles y guía al paciente antes de comprar.",
      en: "I built a headless store with Next.js, React and TypeScript connected to the Shopify Storefront API. The centerpiece is the product finder: an 8-step wizard (stoma type, size, opening, output, abdomen, surface, skin tone and system) that recommends compatible products and guides patients before they buy.",
    },
    funcionalidades: [
      {
        es: "Selector de productos en 8 pasos con recomendaciones compatibles",
        en: "8-step product finder with compatible recommendations",
      },
      { es: "Búsqueda por código o medida", en: "Search by product code or size" },
      {
        es: "Filtros por producto, medida del aro y características",
        en: "Filters by product, flange size and features",
      },
      { es: "Precio por caja y por pieza", en: "Price per box and per unit" },
      {
        es: "Orientación por WhatsApp antes de pagar",
        en: "Guidance over WhatsApp before checkout",
      },
      {
        es: "Carrito persistente y checkout de Shopify",
        en: "Persistent cart and Shopify checkout",
      },
      {
        es: "Diseño responsivo, SEO técnico y despliegues en Vercel",
        en: "Responsive design, technical SEO and deployments on Vercel",
      },
    ],
    resultado: {
      es: "La tienda está en producción en centralmedica.com.mx y le doy soporte después de cada liberación.",
      en: "The store is live at centralmedica.com.mx, and I support it after every release.",
    },
  },
  tecnologias: ["Next.js", "React", "TypeScript", "Shopify Storefront API", "Vercel"],
  imagenPortada: {
    src: "/images/proyectos/tienda-central-medica/portada.webp",
    alt: {
      es: "Página de inicio de la tienda Central Médica con categorías de bolsas y barreras para ostomía y el acceso al selector de productos",
      en: "Central Médica store home page with ostomy pouch and barrier categories and the entry point to the product finder",
    },
  },
  galeria: [
    {
      src: "/images/proyectos/tienda-central-medica/selector-de-productos.webp",
      alt: {
        es: "Primer paso del selector de productos: elegir entre colostomía, ileostomía y urostomía, con una barra de progreso de 8 pasos",
        en: "First step of the product finder: choosing between colostomy, ileostomy and urostomy, with an 8-step progress bar",
      },
      leyenda: {
        es: "Selector de productos: 8 preguntas guiadas antes de recomendar.",
        en: "Product finder: 8 guided questions before recommending anything.",
      },
      ancho: 1289,
      alto: 910,
    },
    {
      src: "/images/proyectos/tienda-central-medica/catalogo-filtros.webp",
      alt: {
        es: "Catálogo de barreras cutáneas filtrado, con filtros por producto, medida del aro y características, y precio por caja y por pieza",
        en: "Filtered skin barrier catalog, with filters by product, flange size and features, and prices per box and per unit",
      },
      leyenda: {
        es: "Catálogo con filtros por medida del aro y precio por caja y por pieza.",
        en: "Catalog with flange size filters and prices per box and per unit.",
      },
      ancho: 1564,
      alto: 890,
    },
  ],
  demoUrl: "https://centralmedica.com.mx",
  destacado: true,
  // TODO(Ricardo): confirma la fecha real de lanzamiento (AAAA-MM-DD).
  fecha: "2025-02-01",
}
