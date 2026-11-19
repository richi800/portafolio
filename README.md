# Portafolio de Ricardo Rivas

Sitio personal con mis proyectos, habilidades y datos de contacto.

Hecho con Next.js 16, TypeScript, Tailwind CSS v4 y motion. Modo claro y oscuro, accesible
(WCAG AA) y generado de forma estática para Vercel.

## Empezar

Necesitas Node.js 20.9 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Comandos

| Comando          | Qué hace                        |
| ---------------- | ------------------------------- |
| `npm run dev`    | Servidor de desarrollo          |
| `npm run build`  | Build de producción             |
| `npm run start`  | Sirve el build                  |
| `npm run lint`   | Revisa el código con ESLint     |
| `npm run format` | Formatea el código con Prettier |

## Editar el contenido

- Datos personales, redes y habilidades: `src/content/perfil.ts`
- Proyectos: un archivo por proyecto en `src/content/proyectos/` (registro en `index.ts`)
- Fotos: `public/images/perfil/` y `public/images/proyectos/<slug>/`
- CV: `public/cv/ricardo-rivas-cv.pdf`

La guía paso a paso para agregar un proyecto está en [CLAUDE.md](./CLAUDE.md).

## Publicar

Sube el repositorio a GitHub e impórtalo en [Vercel](https://vercel.com/new). Si usas un dominio
propio, define la variable `NEXT_PUBLIC_SITE_URL` con la URL final.
