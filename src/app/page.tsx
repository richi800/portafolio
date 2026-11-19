import { Certificaciones } from "@/components/sections/Certificaciones"
import { ComoTrabajo } from "@/components/sections/ComoTrabajo"
import { Contacto } from "@/components/sections/Contacto"
import { DatosRapidos } from "@/components/sections/DatosRapidos"
import { Habilidades } from "@/components/sections/Habilidades"
import { Hero } from "@/components/sections/Hero"
import { ProyectosDestacados } from "@/components/sections/ProyectosDestacados"
import { Servicios } from "@/components/sections/Servicios"
import { SobreMi } from "@/components/sections/SobreMi"
import { SoporteResumen } from "@/components/sections/SoporteResumen"
import { Trayectoria } from "@/components/sections/Trayectoria"
import { getCertificados } from "@/lib/certificados"

/*
 * Bandas: Servicios (surface) → Cómo trabajo → Soporte (surface) → Trayectoria → Sobre mí →
 * Habilidades → Certificaciones (surface) → Contacto. Contacto no trae padding superior: tras
 * una banda surface necesita el suyo; tras Habilidades (paper) ya hay aire.
 */
export default function Inicio() {
  const hayCertificados = getCertificados().length > 0
  return (
    <>
      <Hero />
      <DatosRapidos />
      <ProyectosDestacados />
      <Servicios />
      <ComoTrabajo />
      <SoporteResumen />
      <Trayectoria />
      <SobreMi />
      <Habilidades />
      <Certificaciones tono="surface" />
      <Contacto className={hayCertificados ? "pt-section" : undefined} />
    </>
  )
}
