import type { CertificadoContenido } from "@/types"

/**
 * Certificaciones y formación continua. El orden del arreglo es el orden del sitio:
 * primero los completados más recientes. Los "en-curso" se muestran siempre al final,
 * con la etiqueta "En curso" y sin botón de verificar.
 *
 * El título va tal como lo emite la plataforma (no se traduce); `aprendizaje`, si lo hay,
 * va en { es, en }.
 *
 * Al terminar un curso: cambia `estado` a "completado" y agrega `fecha` (AAAA-MM) y
 * `urlVerificacion` (el enlace público del certificado, con https://).
 */
export const certificados: CertificadoContenido[] = [
  {
    titulo: "Soporte Técnico SaaS desde Cero: Tu Primer Trabajo en Tech",
    emisor: "Udemy · Denis Chepik Antropov",
    area: "soporte",
    estado: "en-curso",
  },
]
