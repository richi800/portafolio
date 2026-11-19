import type { Perfil } from "@/types"

/**
 * DATOS DE EJEMPLO — reemplaza cada valor por los tuyos.
 * Fotos en /public/images/perfil y CV en /public/cv.
 */
export const perfil: Perfil = {
  nombre: "Ricardo Rivas",
  titulo: "Desarrollador web full stack",
  presentacion:
    "Construyo sitios y aplicaciones web rápidas, accesibles y fáciles de mantener, desde la idea hasta producción.",
  bio: [
    "Texto de ejemplo: soy desarrollador web y me gusta convertir problemas concretos en herramientas que la gente usa todos los días. Trabajo sobre todo con TypeScript, React y Node.js.",
    "Texto de ejemplo: me importa el detalle. Que una página cargue rápido en un celular de gama baja, que se pueda usar con teclado y que el código lo entienda quien venga después.",
    "Texto de ejemplo: cuando no estoy programando, publico mini proyectos abiertos para aprender cosas nuevas. Abajo puedes ver algunos.",
  ],
  ubicacion: "Ciudad de ejemplo, País",
  disponibilidad: "Disponible para proyectos freelance",
  idiomas: ["Español (nativo)", "Inglés (intermedio)"],
  foto: {
    src: "/images/perfil/ricardo-rivas.jpg",
    alt: "Retrato de Ricardo Rivas",
  },
  correo: "hola@ejemplo.com",
  redes: {
    github: "https://github.com/usuario-ejemplo",
    linkedin: "https://www.linkedin.com/in/usuario-ejemplo",
  },
  cv: "/cv/ricardo-rivas-cv.pdf",
  habilidades: [
    {
      categoria: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Accesibilidad web"],
    },
    {
      categoria: "Backend",
      items: ["Node.js", "PostgreSQL", "APIs REST", "Prisma", "Python"],
    },
    {
      categoria: "Herramientas",
      items: ["Git y GitHub", "Vercel", "Figma", "Testing con Vitest", "Docker"],
    },
  ],
}
