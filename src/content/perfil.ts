import type { PerfilContenido } from "@/types"

/**
 * Datos personales. Cada texto visible va en los dos idiomas ({ es, en }); nombres,
 * tecnologías, URLs y el número de WhatsApp van una sola vez.
 */
export const perfil: PerfilContenido = {
  nombre: "Ricardo Rivas Rosado",
  nombreCorto: "Ricardo Rivas",
  titulo: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
  stack: ["Next.js", "React", "TypeScript", "Laravel"],
  presentacion: {
    es: "Desarrollo aplicaciones web completas: frontend, backend, base de datos e integraciones con APIs. Hoy mantengo tres sistemas en producción, del código al servidor.",
    en: "I build complete web applications: frontend, backend, database and API integrations. Today I maintain three systems in production, from the code to the server.",
  },
  bio: [
    {
      es: "Soy desarrollador Full Stack. Construyo comercio electrónico, sistemas internos e integraciones entre plataformas con Next.js, React, TypeScript, Node.js y Laravel.",
      en: "I'm a Full Stack Developer. I build e-commerce, internal systems and integrations between platforms with Next.js, React, TypeScript, Node.js and Laravel.",
    },
    {
      es: "Llegué al desarrollo desde TI: en 2019 empecé como Coordinador de TI, a cargo del soporte SaaS L3, y fui pasando a programar funcionalidades e integraciones. Por eso pienso en cómo se usa un sistema en el día a día, no solo en cómo se programa.",
      en: "I came to development from IT: in 2019 I started as IT Coordinator, in charge of L3 SaaS support, and gradually moved into building features and integrations. That's why I think about how a system is used day to day, not just how it's coded.",
    },
    {
      es: "Hoy me hago cargo de proyectos de principio a fin: requerimientos, código, base de datos, despliegue, servidor Linux y soporte después del lanzamiento.",
      en: "Today I own projects from start to finish: requirements, code, database, deployment, Linux server and support after launch.",
    },
  ],
  datos: [
    {
      termino: { es: "Ubicación", en: "Location" },
      valor: { es: "Mérida, Yucatán, México", en: "Mérida, Yucatán, Mexico" },
    },
    {
      termino: { es: "Experiencia", en: "Experience" },
      valor: { es: "En tecnología desde 2019", en: "Working in tech since 2019" },
    },
    {
      termino: { es: "Idiomas", en: "Languages" },
      valor: { es: "Inglés B2 certificado", en: "Certified B2 English" },
    },
  ],
  datosRapidos: [
    {
      valor: { es: "+6 años", en: "6+ years" },
      etiqueta: { es: "en tecnología", en: "in tech" },
    },
    {
      valor: { es: "3 sistemas", en: "3 systems" },
      etiqueta: { es: "en producción", en: "in production" },
    },
    {
      valor: {
        es: "E-commerce · Inventario · Citas",
        en: "E-commerce · Inventory · Scheduling",
      },
      etiqueta: { es: "lo que he construido", en: "what I've built" },
    },
    {
      valor: { es: "Inglés B2", en: "B2 English" },
      etiqueta: { es: "certificado", en: "certified" },
    },
  ],
  disponibilidad: {
    es: "Disponible para proyectos freelance",
    en: "Available for freelance projects",
  },
  foto: {
    src: "/images/perfil/ricardo-rivas-perfil.webp",
    alt: {
      es: "Retrato de Ricardo Rivas Rosado con saco y playera negros, mirando a la cámara, sobre un muro gris",
      en: "Portrait of Ricardo Rivas Rosado wearing a black blazer and T-shirt, looking at the camera, against a gray wall",
    },
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
    mensaje: {
      es: "Hola Ricardo, vi tu portafolio y me interesa cotizar un proyecto",
      en: "Hi Ricardo, I saw your portfolio and I'd like to get a quote for a project",
    },
  },
  cvs: [
    {
      etiqueta: { es: "CV Desarrollador Full Stack", en: "Full Stack Developer Resume" },
      ruta: "/cv/ricardo-rivas-cv.pdf",
      // Opcional: copia aquí tu CV en inglés. Mientras no exista, en /en se ofrece el de
      // español con la etiqueta "(Spanish, PDF)".
      rutaEn: "/cv/ricardo-rivas-cv-en.pdf",
    },
    // TODO(Ricardo): copia tu CV de Soporte TI a public/cv/ con este nombre. Mientras no
    // exista el archivo, este botón no aparece.
    {
      etiqueta: { es: "CV Soporte TI", en: "IT Support Resume" },
      ruta: "/cv/ricardo-rivas-cv-soporte-ti.pdf",
      rutaEn: "/cv/ricardo-rivas-cv-soporte-ti-en.pdf",
    },
  ],
  habilidades: [
    {
      categoria: { es: "Frontend", en: "Frontend" },
      icono: "frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        { es: "Diseño responsivo", en: "Responsive design" },
      ],
    },
    {
      categoria: { es: "Backend", en: "Backend" },
      icono: "backend",
      items: ["Node.js", "PHP", "Laravel"],
    },
    {
      categoria: { es: "Datos", en: "Data" },
      icono: "datos",
      items: ["PostgreSQL", "Prisma", "SQL"],
    },
    {
      categoria: { es: "Integraciones", en: "Integrations" },
      icono: "integraciones",
      items: [
        { es: "APIs REST", en: "REST APIs" },
        { es: "Shopify Storefront y Admin API", en: "Shopify Storefront and Admin API" },
        "Mercado Pago",
        "CRM/ERP",
      ],
    },
    {
      categoria: { es: "Calidad", en: "Quality" },
      icono: "calidad",
      items: [
        "Postman",
        {
          es: "Pruebas funcionales y de regresión",
          en: "Functional and regression testing",
        },
        "UAT",
        "Jira",
        "Notion",
      ],
    },
    {
      categoria: { es: "Infraestructura", en: "Infrastructure" },
      icono: "infraestructura",
      items: ["Git", "GitHub", "Vercel", "DigitalOcean", "Linux"],
    },
    {
      categoria: { es: "Idiomas", en: "Languages" },
      icono: "idiomas",
      items: [
        { es: "Español nativo", en: "Native Spanish" },
        { es: "Inglés B2 certificado", en: "Certified B2 English" },
      ],
    },
  ],
}
