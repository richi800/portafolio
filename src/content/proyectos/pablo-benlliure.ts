import type { Proyecto } from "@/types"

export const pabloBenlliure: Proyecto = {
  slug: "pablo-benlliure",
  titulo: "Sitio y tienda del artista Pablo Benlliure",
  cliente: "Pablo Benlliure",
  resumen:
    "Sitio y tienda de un artista plástico que se siente como una galería y, a la vez, vende obras y merch con compra segura vía Shopify.",
  caso: {
    problema:
      "Pablo Benlliure necesitaba una presencia digital que se sintiera como una galería, a la altura de su obra, y que al mismo tiempo le permitiera vender obras originales y productos de su marca a clientes de México y del extranjero.",
    solucion:
      "Diseñé y desarrollé el sitio con Next.js, React y TypeScript, integrado con Shopify (Storefront API y tema en Liquid) para la tienda. La portada abre con video e imagen a pantalla completa y el recorrido lleva de las obras a la biografía y a la tienda.",
    funcionalidades: [
      "Portada con video e imagen a pantalla completa",
      "Galería de obras destacadas",
      "Biografía y exposiciones",
      "Sección de marca y ediciones (merch)",
      "Compra segura vía Shopify, con envíos nacionales e internacionales",
      "Despliegue en Vercel y soporte después del lanzamiento",
    ],
    resultado:
      "El sitio está en línea en pablobenlliure.com, con la galería y la tienda funcionando en un mismo lugar.",
  },
  tecnologias: [
    "Next.js",
    "React",
    "TypeScript",
    "Shopify Storefront API",
    "Shopify Liquid",
    "Vercel",
  ],
  imagenPortada: {
    src: "/images/proyectos/pablo-benlliure/portada.webp",
    alt: "Portada del sitio de Pablo Benlliure: el artista frente a un mural de colores y, a la derecha, dibujando, con su nombre y el menú de obras, marca, exposiciones y biografía",
  },
  galeria: [
    {
      src: "/images/proyectos/pablo-benlliure/obras-destacadas.webp",
      alt: "Sección de obras destacadas con tres piezas: una alfombra de colores, un mueble pintado con lámpara y una escultura verde",
      leyenda: "Obras destacadas, presentadas como en una galería.",
      ancho: 1587,
      alto: 824,
    },
    {
      src: "/images/proyectos/pablo-benlliure/sobre-el-artista.webp",
      alt: "Sección sobre el artista con su retrato frente a una obra de colores y un enlace a la biografía completa",
      leyenda: "Biografía del artista.",
      ancho: 1424,
      alto: 844,
    },
    {
      src: "/images/proyectos/pablo-benlliure/marca-ediciones.webp",
      alt: "Sección de marca y ediciones con gorras, bolsas y playeras ilustradas, y un carrusel de diseños",
      leyenda: "Marca y ediciones: el merch del artista, a la venta en la misma tienda.",
      ancho: 1600,
      alto: 762,
    },
  ],
  demoUrl: "https://pablobenlliure.com",
  destacado: true,
  // TODO(Ricardo): pon la fecha real de lanzamiento (AAAA-MM-DD).
  fecha: "2025-02-01",
}
