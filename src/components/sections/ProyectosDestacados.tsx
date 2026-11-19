import { TarjetaProyecto } from "@/components/proyectos/TarjetaProyecto"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { getDiccionario, getLang } from "@/i18n"
import { ruta } from "@/i18n/config"
import { cn } from "@/lib/cn"
import { getProyectosDestacados } from "@/lib/proyectos"

export async function ProyectosDestacados() {
  const lang = await getLang()
  const t = await getDiccionario()
  const [principal, ...otros] = getProyectosDestacados(lang)
  if (!principal) return null

  return (
    <Section
      id="proyectos"
      titulo={t.destacados.titulo}
      intro={t.destacados.intro}
      accion={
        <Button
          href={ruta(lang, "/proyectos")}
          variante="secundario"
          className="self-start md:self-auto"
        >
          {t.destacados.verTodos}
        </Button>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <div className="flex md:col-span-2 [&>article]:flex-1">
          <TarjetaProyecto proyecto={principal} formato="ancha" />
        </div>
        {otros.map((p, i) => {
          // Si sobra una tarjeta (cantidad impar en la grilla de 2), se vuelve ancha
          // con la imagen a la derecha: así nunca queda un hueco a su lado.
          const sola = otros.length % 2 === 1 && i === otros.length - 1
          return (
            <div
              key={p.slug}
              className={cn("flex [&>article]:flex-1", sola && "md:col-span-2")}
            >
              <TarjetaProyecto
                proyecto={p}
                formato={sola ? "ancha" : "normal"}
                invertida={sola}
              />
            </div>
          )
        })}
      </div>
    </Section>
  )
}
