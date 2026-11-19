import type { Proyecto } from "@/types"

// EJEMPLO — reemplaza o borra este archivo cuando tengas proyectos reales.
export const reservasBarberia: Proyecto = {
  slug: "reservas-barberia",
  titulo: "Reservas para una barbería (EJEMPLO)",
  resumen:
    "Proyecto de ejemplo: sistema de citas en línea con recordatorios y panel para el negocio.",
  descripcion: `Este es un proyecto de EJEMPLO que incluye un video de YouTube. El video no se guarda en el repositorio: solo pones su ID y se carga cuando el visitante hace clic.

Describe aquí el flujo principal: el cliente elige servicio, día y hora; el negocio ve su agenda y recibe avisos.

Menciona números si los tienes: tiempo de carga, usuarios, reservas por semana.`,
  tecnologias: ["React", "Node.js", "PostgreSQL", "TypeScript"],
  imagenPortada: {
    src: "/images/proyectos/reservas-barberia/portada.jpg",
    alt: "Captura de ejemplo del calendario de reservas",
  },
  galeria: [
    {
      src: "/images/proyectos/reservas-barberia/galeria-1.jpg",
      alt: "Captura de ejemplo: selección de servicio y horario",
    },
    {
      src: "/images/proyectos/reservas-barberia/galeria-2.jpg",
      alt: "Captura de ejemplo: agenda del día para el negocio",
    },
  ],
  // EJEMPLO: video de dominio público (Big Buck Bunny). Cámbialo por el ID del tuyo.
  videoYoutube: "aqz-KE-bpKQ",
  repoUrl: "https://github.com/usuario-ejemplo/reservas-barberia",
  destacado: true,
  fecha: "2026-08-03",
}
