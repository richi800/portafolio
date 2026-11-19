import type { ProyectoContenido } from "@/types"

export const agendadoCitas: ProyectoContenido = {
  slug: "agendado-citas",
  titulo: {
    es: "Plataforma de agendado de citas",
    en: "Appointment scheduling platform",
  },
  cliente: "Central Médica",
  resumen: {
    es: "Plataforma web para que los pacientes agenden sus citas en línea.",
    en: "A web platform for patients to book their appointments online.",
  },
  caso: {
    problema: {
      es: "Los pacientes necesitaban una forma sencilla de agendar citas desde la web.",
      en: "Patients needed a simple way to book appointments on the web.",
    },
    solucion: {
      es: "Desarrollé una plataforma web con PHP y Laravel para el agendado de citas.",
      en: "I built a web platform for appointment scheduling with PHP and Laravel.",
    },
    funcionalidades: [
      {
        es: "Agendado de citas en línea para pacientes",
        en: "Online appointment booking for patients",
      },
    ],
    resultado: {
      es: "La plataforma está en producción y le doy mantenimiento y soporte.",
      en: "The platform is in production, and I maintain and support it.",
    },
  },
  tecnologias: ["PHP", "Laravel"],
  // TODO(Ricardo): reemplaza con capturas reales (1600×1000 px, JPG o WebP) en
  // public/images/proyectos/agendado-citas/portada.jpg, galeria-1.jpg y galeria-2.jpg.
  // No muestres datos de pacientes: usa datos de prueba o difumina.
  imagenPortada: {
    src: "/images/proyectos/agendado-citas/portada.jpg",
    alt: {
      es: "Pantalla para elegir fecha y hora de una cita",
      en: "Screen for choosing an appointment date and time",
    },
  },
  galeria: [
    {
      src: "/images/proyectos/agendado-citas/galeria-1.jpg",
      alt: {
        es: "Formulario de agendado de cita",
        en: "Appointment booking form",
      },
    },
    {
      src: "/images/proyectos/agendado-citas/galeria-2.jpg",
      alt: {
        es: "Confirmación de cita agendada",
        en: "Booked appointment confirmation",
      },
    },
  ],
  destacado: true,
  // Oculto hasta tener capturas reales: no aparece en listados, detalle, destacados ni sitemap.
  publicado: false,
  // TODO(Ricardo): confirma la fecha real de liberación (AAAA-MM-DD).
  fecha: "2025-02-01",
}
