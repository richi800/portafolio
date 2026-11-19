import type { EtapaTrayectoria } from "@/types"

/**
 * De lo más reciente a lo más antiguo.
 * El soporte SaaS L3 como Coordinador de TI en Grupo Komunah lo confirmó Ricardo el 2026-11-19.
 */
export const trayectoria: EtapaTrayectoria[] = [
  {
    tipo: "trabajo",
    lugar: "Central Médica",
    periodo: "Febrero 2025 – Actualidad",
    roles: ["Desarrollador Full Stack Freelance"],
    descripcion:
      "Desarrollo y mantengo la tienda en línea, Inventory Bridge y la plataforma de citas: del código al despliegue, el servidor Linux y el soporte en producción.",
  },
  {
    tipo: "trabajo",
    lugar: "Grupo Komunah",
    periodo: "2019 – Enero 2025",
    roles: ["Coordinador de TI", "Desarrollador de Software Junior"],
    descripcion:
      "Como Coordinador de TI estuve a cargo del soporte SaaS de nivel 3 (L3): escalaciones complejas, mesa de ayuda e infraestructura con Microsoft 365, redes, CRM y ERP. De ahí pasé al desarrollo: funcionalidades en React y Node.js, integraciones REST con CRM, ERP y Mercado Pago, y validación de datos con SQL.",
  },
  {
    tipo: "educacion",
    lugar: "UNID",
    periodo: "2019 – 2023",
    roles: ["Ingeniería en Tecnologías de la Información"],
  },
]
