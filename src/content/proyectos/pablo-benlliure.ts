import type { ProyectoContenido } from "@/types"

export const pabloBenlliure: ProyectoContenido = {
  slug: "pablo-benlliure",
  titulo: {
    es: "Sitio y tienda del artista Pablo Benlliure",
    en: "Website and store for artist Pablo Benlliure",
  },
  cliente: "Pablo Benlliure",
  resumen: {
    es: "Sitio y tienda de un artista plástico que se siente como una galería y, a la vez, vende obras y merch con compra segura vía Shopify.",
    en: "Website and store for a visual artist that feels like a gallery while selling artwork and merch with secure checkout through Shopify.",
  },
  caso: {
    problema: {
      es: "Pablo Benlliure necesitaba una presencia digital que se sintiera como una galería, a la altura de su obra, y que al mismo tiempo le permitiera vender obras originales y productos de su marca a clientes de México y del extranjero.",
      en: "Pablo Benlliure needed an online presence that felt like a gallery, worthy of his work, and that also let him sell original pieces and branded products to customers in Mexico and abroad.",
    },
    solucion: {
      es: "Diseñé y desarrollé el sitio con Next.js, React y TypeScript, integrado con Shopify (Storefront API y tema en Liquid) para la tienda. La portada abre con video e imagen a pantalla completa y el recorrido lleva de las obras a la biografía y a la tienda.",
      en: "I designed and built the site with Next.js, React and TypeScript, integrated with Shopify (Storefront API and a Liquid theme) for the store. The home page opens with full-screen video and imagery, and the journey leads from the artwork to the biography and the store.",
    },
    funcionalidades: [
      {
        es: "Portada con video e imagen a pantalla completa",
        en: "Home page with full-screen video and imagery",
      },
      { es: "Galería de obras destacadas", en: "Gallery of featured works" },
      { es: "Biografía y exposiciones", en: "Biography and exhibitions" },
      {
        es: "Sección de marca y ediciones (merch)",
        en: "Brand and editions section (merch)",
      },
      {
        es: "Compra segura vía Shopify, con envíos nacionales e internacionales",
        en: "Secure checkout through Shopify, with domestic and international shipping",
      },
      {
        es: "Despliegue en Vercel y soporte después del lanzamiento",
        en: "Deployment on Vercel and support after launch",
      },
    ],
    resultado: {
      es: "El sitio está en línea en pablobenlliure.com, con la galería y la tienda funcionando en un mismo lugar.",
      en: "The site is live at pablobenlliure.com, with the gallery and the store working together in one place.",
    },
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
    alt: {
      es: "Portada del sitio de Pablo Benlliure: el artista frente a un mural de colores y, a la derecha, dibujando, con su nombre y el menú de obras, marca, exposiciones y biografía",
      en: "Pablo Benlliure's home page: the artist in front of a colorful mural and, on the right, drawing, with his name and a menu for works, brand, exhibitions and biography",
    },
  },
  galeria: [
    {
      src: "/images/proyectos/pablo-benlliure/obras-destacadas.webp",
      alt: {
        es: "Sección de obras destacadas con tres piezas: una alfombra de colores, un mueble pintado con lámpara y una escultura verde",
        en: "Featured works section with three pieces: a colorful rug, a painted cabinet with a lamp and a green sculpture",
      },
      leyenda: {
        es: "Obras destacadas, presentadas como en una galería.",
        en: "Featured works, presented as in a gallery.",
      },
      ancho: 1587,
      alto: 824,
    },
    {
      src: "/images/proyectos/pablo-benlliure/sobre-el-artista.webp",
      alt: {
        es: "Sección sobre el artista con su retrato frente a una obra de colores y un enlace a la biografía completa",
        en: "About the artist section with his portrait in front of a colorful piece and a link to the full biography",
      },
      leyenda: { es: "Biografía del artista.", en: "The artist's biography." },
      ancho: 1424,
      alto: 844,
    },
    {
      src: "/images/proyectos/pablo-benlliure/marca-ediciones.webp",
      alt: {
        es: "Sección de marca y ediciones con gorras, bolsas y playeras ilustradas, y un carrusel de diseños",
        en: "Brand and editions section with illustrated caps, tote bags and T-shirts, and a carousel of designs",
      },
      leyenda: {
        es: "Marca y ediciones: el merch del artista, a la venta en la misma tienda.",
        en: "Brand and editions: the artist's merch, sold in the same store.",
      },
      ancho: 1600,
      alto: 762,
    },
  ],
  demoUrl: "https://pablobenlliure.com",
  destacado: true,
  // TODO(Ricardo): pon la fecha real de lanzamiento (AAAA-MM-DD).
  fecha: "2025-02-01",
}
