import type { Proyecto } from "@/types"

export const tiendaCentralMedica: Proyecto = {
  slug: "tienda-central-medica",
  titulo: "Tienda en línea Central Médica",
  cliente: "Central Médica",
  resumen:
    "Tienda de productos para ostomía con Next.js y Shopify, con un selector que guía al paciente hasta el producto compatible antes de comprar.",
  caso: {
    problema:
      "Central Médica vende bolsas y barreras para ostomía. Muchos pacientes no saben qué bolsa o barrera necesitan, y elegir mal significa comprar un producto que no les sirve. Además, la tienda tenía que ser rápida en el celular, fácil de encontrar en buscadores y administrarse desde Shopify.",
    solucion:
      "Construí una tienda headless con Next.js, React y TypeScript conectada a la Shopify Storefront API. La pieza central es el selector de productos: un asistente de 8 pasos (tipo de estoma, medida, abertura, efluente, abdomen, superficie, tono y sistema) que recomienda productos compatibles y guía al paciente antes de comprar.",
    funcionalidades: [
      "Selector de productos en 8 pasos con recomendaciones compatibles",
      "Búsqueda por código o medida",
      "Filtros por producto, medida del aro y características",
      "Precio por caja y por pieza",
      "Orientación por WhatsApp antes de pagar",
      "Carrito persistente y checkout de Shopify",
      "Diseño responsivo, SEO técnico y despliegues en Vercel",
    ],
    resultado:
      "La tienda está en producción en centralmedica.com.mx y le doy soporte después de cada liberación.",
  },
  tecnologias: ["Next.js", "React", "TypeScript", "Shopify Storefront API", "Vercel"],
  imagenPortada: {
    src: "/images/proyectos/tienda-central-medica/portada.webp",
    alt: "Página de inicio de la tienda Central Médica con categorías de bolsas y barreras para ostomía y el acceso al selector de productos",
  },
  galeria: [
    {
      src: "/images/proyectos/tienda-central-medica/selector-de-productos.webp",
      alt: "Primer paso del selector de productos: elegir entre colostomía, ileostomía y urostomía, con una barra de progreso de 8 pasos",
      leyenda: "Selector de productos: 8 preguntas guiadas antes de recomendar.",
      ancho: 1289,
      alto: 910,
    },
    {
      src: "/images/proyectos/tienda-central-medica/catalogo-filtros.webp",
      alt: "Catálogo de barreras cutáneas filtrado, con filtros por producto, medida del aro y características, y precio por caja y por pieza",
      leyenda: "Catálogo con filtros por medida del aro y precio por caja y por pieza.",
      ancho: 1564,
      alto: 890,
    },
  ],
  demoUrl: "https://centralmedica.com.mx",
  destacado: true,
  // TODO(Ricardo): confirma la fecha real de lanzamiento (AAAA-MM-DD).
  fecha: "2025-02-01",
}
