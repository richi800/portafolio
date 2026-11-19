import type { Perfil } from "@/types"

export const perfil: Perfil = {
  nombre: "Ricardo Rivas Rosado",
  nombreCorto: "Ricardo Rivas",
  titulo: "Desarrollador Full Stack",
  stack: ["Next.js", "React", "TypeScript", "Laravel"],
  presentacion:
    "Desarrollo aplicaciones web completas: frontend, backend, base de datos e integraciones con APIs. Hoy mantengo tres sistemas en producción, del código al servidor.",
  bio: [
    "Soy desarrollador Full Stack. Construyo comercio electrónico, sistemas internos e integraciones entre plataformas con Next.js, React, TypeScript, Node.js y Laravel.",
    "Llegué al desarrollo desde TI: en 2019 empecé coordinando soporte e infraestructura y fui pasando a programar funcionalidades e integraciones. Por eso pienso en cómo se usa un sistema en el día a día, no solo en cómo se programa.",
    "Hoy me hago cargo de proyectos de principio a fin: requerimientos, código, base de datos, despliegue, servidor Linux y soporte después del lanzamiento.",
  ],
  datos: [
    { termino: "Ubicación", valor: "Mérida, Yucatán, México" },
    { termino: "Experiencia", valor: "En tecnología desde 2019" },
    { termino: "Idiomas", valor: "Inglés B2 certificado" },
  ],
  datosRapidos: [
    { valor: "+6 años", etiqueta: "en tecnología" },
    { valor: "3 sistemas", etiqueta: "en producción" },
    { valor: "E-commerce · Inventario · Citas", etiqueta: "lo que he construido" },
    { valor: "Inglés B2", etiqueta: "certificado" },
  ],
  disponibilidad: "Disponible para proyectos freelance",
  foto: {
    src: "/images/perfil/ricardo-rivas-perfil.webp",
    alt: "Retrato de Ricardo Rivas Rosado con saco y playera negros, mirando a la cámara, sobre un muro gris",
    // Centro del rostro en la foto original: los recortes cerrados hacen zoom aquí.
    foco: "50% 42%",
  },
  correo: "ricardo.rivas.rosadoo@gmail.com",
  redes: {
    github: "https://github.com/richi800",
    // TODO(Ricardo): pega aquí la URL de tu perfil, por ejemplo
    // "https://www.linkedin.com/in/tu-usuario". Mientras esté vacío, el botón no aparece.
    linkedin: "",
  },
  whatsapp: {
    numero: "529991493958",
    mensaje: "Hola Ricardo, vi tu portafolio y me interesa cotizar un proyecto",
  },
  cv: "/cv/ricardo-rivas-cv.pdf",
  habilidades: [
    {
      categoria: "Frontend",
      icono: "frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Diseño responsivo"],
    },
    {
      categoria: "Backend",
      icono: "backend",
      items: ["Node.js", "PHP", "Laravel"],
    },
    {
      categoria: "Datos",
      icono: "datos",
      items: ["PostgreSQL", "Prisma", "SQL"],
    },
    {
      categoria: "Integraciones",
      icono: "integraciones",
      items: ["APIs REST", "Shopify Storefront y Admin API", "Mercado Pago", "CRM/ERP"],
    },
    {
      categoria: "Calidad",
      icono: "calidad",
      items: ["Postman", "Pruebas funcionales y de regresión", "UAT", "Jira", "Notion"],
    },
    {
      categoria: "Infraestructura",
      icono: "infraestructura",
      items: ["Git", "GitHub", "Vercel", "DigitalOcean", "Linux"],
    },
    {
      categoria: "Idiomas",
      icono: "idiomas",
      items: ["Español nativo", "Inglés B2 certificado"],
    },
  ],
}
