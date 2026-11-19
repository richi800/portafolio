import type { Proyecto } from "@/types"

export const agendadoCitas: Proyecto = {
  slug: "agendado-citas",
  titulo: "Plataforma de agendado de citas",
  cliente: "Central Médica",
  resumen: "Plataforma web para que los pacientes agenden sus citas en línea.",
  caso: {
    problema:
      "Los pacientes necesitaban una forma sencilla de agendar citas desde la web.",
    solucion:
      "Desarrollé una plataforma web con PHP y Laravel para el agendado de citas.",
    funcionalidades: ["Agendado de citas en línea para pacientes"],
    resultado: "La plataforma está en producción y le doy mantenimiento y soporte.",
  },
  tecnologias: ["PHP", "Laravel"],
  // TODO(Ricardo): reemplaza con capturas reales (1600×1000 px, JPG o WebP) en
  // public/images/proyectos/agendado-citas/portada.jpg, galeria-1.jpg y galeria-2.jpg.
  // No muestres datos de pacientes: usa datos de prueba o difumina.
  imagenPortada: {
    src: "/images/proyectos/agendado-citas/portada.jpg",
    alt: "Pantalla para elegir fecha y hora de una cita",
  },
  galeria: [
    {
      src: "/images/proyectos/agendado-citas/galeria-1.jpg",
      alt: "Formulario de agendado de cita",
    },
    {
      src: "/images/proyectos/agendado-citas/galeria-2.jpg",
      alt: "Confirmación de cita agendada",
    },
  ],
  destacado: true,
  // TODO(Ricardo): confirma la fecha real de liberación (AAAA-MM-DD).
  fecha: "2025-02-01",
}
