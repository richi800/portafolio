import { Contacto } from "@/components/sections/Contacto"
import { Habilidades } from "@/components/sections/Habilidades"
import { Hero } from "@/components/sections/Hero"
import { ProyectosDestacados } from "@/components/sections/ProyectosDestacados"
import { SobreMi } from "@/components/sections/SobreMi"

export default function Inicio() {
  return (
    <>
      <Hero />
      <SobreMi />
      <ProyectosDestacados />
      <Habilidades />
      <Contacto />
    </>
  )
}
