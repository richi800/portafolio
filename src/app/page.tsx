import { ComoTrabajo } from "@/components/sections/ComoTrabajo"
import { Contacto } from "@/components/sections/Contacto"
import { DatosRapidos } from "@/components/sections/DatosRapidos"
import { Habilidades } from "@/components/sections/Habilidades"
import { Hero } from "@/components/sections/Hero"
import { ProyectosDestacados } from "@/components/sections/ProyectosDestacados"
import { Servicios } from "@/components/sections/Servicios"
import { SobreMi } from "@/components/sections/SobreMi"
import { Trayectoria } from "@/components/sections/Trayectoria"

export default function Inicio() {
  return (
    <>
      <Hero />
      <DatosRapidos />
      <ProyectosDestacados />
      <Servicios />
      <ComoTrabajo />
      <Trayectoria />
      <SobreMi />
      <Habilidades />
      <Contacto />
    </>
  )
}
