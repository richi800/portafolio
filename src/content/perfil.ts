import type { Perfil } from "@/types"

export const perfil: Perfil = {
  nombre: "Ricardo Rivas Rosado",
  nombreCorto: "Ricardo Rivas",
  titulo: "Desarrollador Full Stack",
  stack: ["Next.js", "React", "TypeScript", "Laravel"],
  presentacion:
    "Construyo tiendas en línea, sistemas a medida e integraciones que funcionan en producción, y los pruebo antes de que lleguen a tus usuarios.",
  bio: [
    "Soy desarrollador Full Stack enfocado en aplicaciones web, comercio electrónico e integraciones entre sistemas.",
    "Empecé en 2019 en el área de TI, coordinando soporte e infraestructura, y fui creciendo hacia el desarrollo. Esa base me hace entender la operación real del negocio y a sus usuarios.",
    "Hoy desarrollo y mantengo soluciones completas: desde el código hasta el despliegue, el servidor y el soporte en producción.",
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
    src: "/images/perfil/ricardo-rivas.webp",
    alt: "Ricardo Rivas Rosado sonriendo, con saco y camiseta negros, en una oficina con paneles de madera",
    // Centro del rostro en la foto original: los recortes cerrados hacen zoom aquí.
    foco: "52% 46%",
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
