import type { EtapaTrayectoriaContenido } from "@/types"

/**
 * De lo más reciente a lo más antiguo.
 * El soporte SaaS L3 como Coordinador de TI en Grupo Komunah lo confirmó Ricardo el 2026-11-19.
 * En inglés el cargo es "IT Coordinator" y la función "SaaS Support (L3)".
 */
export const trayectoria: EtapaTrayectoriaContenido[] = [
  {
    tipo: "trabajo",
    lugar: "Central Médica",
    periodo: { es: "Febrero 2025 – Actualidad", en: "February 2025 – Present" },
    roles: [{ es: "Desarrollador Full Stack Freelance", en: "Freelance Full Stack Developer" }],
    descripcion: {
      es: "Desarrollo y mantengo la tienda en línea, Inventory Bridge y la plataforma de citas: del código al despliegue, el servidor Linux y el soporte en producción.",
      en: "I build and maintain the online store, Inventory Bridge and the appointment platform: from the code to deployment, the Linux server and production support.",
    },
  },
  {
    tipo: "trabajo",
    lugar: "Grupo Komunah",
    periodo: { es: "2019 – Enero 2025", en: "2019 – January 2025" },
    roles: [
      { es: "Coordinador de TI", en: "IT Coordinator" },
      { es: "Desarrollador de Software Junior", en: "Junior Software Developer" },
    ],
    descripcion: {
      es: "Como Coordinador de TI estuve a cargo del soporte SaaS de nivel 3 (L3): escalaciones complejas, mesa de ayuda e infraestructura con Microsoft 365, redes, CRM y ERP. De ahí pasé al desarrollo: funcionalidades en React y Node.js, integraciones REST con CRM, ERP y Mercado Pago, y validación de datos con SQL.",
      en: "As IT Coordinator I was in charge of SaaS Support (L3): complex escalations, the help desk and infrastructure with Microsoft 365, networking, CRM and ERP. From there I moved into development: features in React and Node.js, REST integrations with CRM, ERP and Mercado Pago, and data validation with SQL.",
    },
  },
  {
    tipo: "educacion",
    lugar: "UNID",
    periodo: { es: "2019 – 2023", en: "2019 – 2023" },
    roles: [
      {
        es: "Ingeniería en Tecnologías de la Información",
        en: "Information Technology Engineering",
      },
    ],
  },
]
