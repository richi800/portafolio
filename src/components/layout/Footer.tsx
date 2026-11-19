import { Container } from "@/components/ui/Container"
import { perfil } from "@/content/perfil"
import { getDiccionario } from "@/i18n"

const t = getDiccionario()

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-4 py-10 text-small text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-bold text-ink">{perfil.nombre}</span>. {t.footer.hecho}
        </p>
        <ul className="flex flex-wrap gap-x-6">
          <li>
            <a
              href={perfil.redes.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center underline-offset-4 hover:text-ink hover:underline"
            >
              GitHub
              <span className="sr-only"> {t.nav.nuevaPestana}</span>
            </a>
          </li>
          {perfil.redes.linkedin && (
            <li>
              <a
                href={perfil.redes.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline-offset-4 hover:text-ink hover:underline"
              >
                LinkedIn
                <span className="sr-only"> {t.nav.nuevaPestana}</span>
              </a>
            </li>
          )}
          <li>
            <a
              href={`mailto:${perfil.correo}`}
              className="inline-flex min-h-11 items-center underline-offset-4 hover:text-ink hover:underline"
            >
              {perfil.correo}
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  )
}
