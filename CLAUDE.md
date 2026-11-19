@AGENTS.md

# Portafolio de Ricardo Rivas

Sitio personal para que clientes y empleadores conozcan a Ricardo, vean sus proyectos
(imágenes, videos de YouTube y enlaces a GitHub) y lo contacten. Es un sitio muy visual:
**el diseño es prioridad**. Todo el contenido vive en el repositorio (sin base de datos)
y se publica en Vercel (plan gratis). **Bilingüe**: español (`/es`, por defecto) e inglés
(`/en`); ver "Idiomas" más abajo.

## Stack

- Next.js 16 (App Router, `cacheComponents` y `partialPrefetching` activos) + React 19
- TypeScript en modo estricto
- Tailwind CSS v4 (configuración en CSS, sin `tailwind.config`)
- `next-themes` (modo claro/oscuro), `motion` (animaciones), `lucide-react` (íconos)
- `clsx` + `tailwind-merge` mediante la utilidad `cn`
- ESLint (flat config) y Prettier con `prettier-plugin-tailwindcss`
- npm como gestor de paquetes

## Comandos

```bash
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # build de producción (también valida tipos y los datos de proyectos)
npm run start    # sirve el build
npm run lint     # ESLint
npm run format   # Prettier sobre todo el proyecto
```

Antes de dar por terminado cualquier cambio: `npm run lint` y `npm run build` deben pasar sin
errores ni advertencias.

## Estructura

```
src/
  proxy.ts                  redirige URLs sin idioma (/, /soporte...) con 308 a /es o /en
  app/
    [lang]/                 TODAS las páginas, una versión estática por idioma
      layout.tsx            root layout: <html lang>, fuentes, metadata global, Header/Footer,
                            generateStaticParams (es, en)
      page.tsx              inicio: Hero → Datos rápidos → Proyectos destacados → Servicios →
                            Cómo trabajo → Soporte → Trayectoria → Sobre mí → Habilidades →
                            Certificaciones → Contacto
      proyectos/page.tsx    listado filtrable por tecnología
      proyectos/[slug]/     detalle de proyecto (idiomas × slugs → estático)
      soporte/page.tsx      soporte de producción
      not-found.tsx         404 en el idioma de la ruta
      [...resto]/page.tsx   rutas inexistentes dentro de un idioma → not-found
      opengraph-image.tsx, twitter-image.tsx   imagen para redes, una por idioma
    globals.css             SISTEMA DE DISEÑO (tokens)
    sitemap.ts, robots.ts, icon.svg, apple-icon.png
  components/
    ui/                     base reutilizable: Button, Card, Badge, Section (prop tono), Container,
                            Icono (íconos por nombre), IconosMarca, FotoEncuadrada (foto con foco/zoom)
    layout/                 Header, Nav (menú + móvil), SelectorIdioma, ThemeToggle, Footer,
                            Providers, navegacion.ts (enlaces del menú)
    sections/               Hero, HeroTitulo, DatosRapidos, ProyectosDestacados, Servicios,
                            ComoTrabajo, Trayectoria, SobreMi, Habilidades, Contacto
    proyectos/              TarjetaProyecto, ListadoProyectos, Galeria, VideoYoutube
  content/
    perfil.ts               datos personales, foto, redes, WhatsApp, datos rápidos, habilidades
    servicios.ts            tarjetas de Servicios
    metodo.ts               puntos de "Cómo trabajo"
    trayectoria.ts          línea de tiempo (trabajo y educación)
    soporte.ts, certificados.ts   apartado de soporte y certificaciones
    proyectos/              un archivo .ts por proyecto + index.ts (registro)
  i18n/
    config.ts               locales, idioma por defecto, ruta(lang, path), cookie del selector
    es.ts, en.ts            textos de interfaz (mismas claves; en.ts tipado como Diccionario)
    index.ts                getLang() y getDiccionario() (leen el idioma con next/root-params)
    diccionarios.ts         getDiccionarioDe(lang) para imágenes OG, sitemap y similares
  lib/                      cn, i18n (tr, resolver), contenido/proyectos/soporte/certificados
                            (lectura por idioma), cv, contacto (WhatsApp), seo, sitio
  types/                    Traducible, Resuelto<T> y los tipos ...Contenido / resueltos
public/
  images/perfil/            foto de perfil
  images/proyectos/<slug>/  portada y capturas de cada proyecto
  cv/                       CV en PDF
```

## Reglas de diseño

- **Una sola fuente de verdad**: colores, tipografías, tamaños, espaciados, radios, sombras y
  easing están en `src/app/globals.css`. Nada de valores mágicos (hex sueltos, `text-[17px]`,
  `p-[13px]`, sombras inventadas). Si falta algo, se agrega como token ahí.
- Tokens: colores `paper surface ink ink-muted line accent accent-strong accent-ink signal`;
  texto `text-display title heading subheading lead body small tiny`; `font-display` para
  títulos y `font-sans` para texto; `py-section`, `px-gutter`, `max-w-page`, `max-w-prose`;
  radios `rounded-chip control card media`; sombras `shadow-raised lifted`.
- Reutiliza los componentes de `components/ui` antes de crear estilos nuevos.
- Mobile-first; verificar en 360 px, 768 px y 1280 px+. Áreas táctiles de 44 px mínimo.
- Modo oscuro por clase `.dark`: los tokens cambian solos, evita `dark:` salvo casos puntuales.
- Movimiento: solo el título del hero se anima al cargar. Lo demás solo responde a acciones del
  usuario. Todo respeta `prefers-reduced-motion` (`MotionConfig reducedMotion="user"`).
- `signal` (caléndula) solo para detalles no textuales: no pasa contraste como texto.
- Todas las imágenes con `next/image`, con `alt` descriptivo y `sizes` correcto. Solo la imagen
  principal de cada página lleva `loading="eager"` + `fetchPriority="high"` (`priority` está
  deprecado en Next 16).
- Accesibilidad WCAG AA: contraste, foco visible, teclado, HTML semántico, un solo `h1`.
- Textos de interfaz en `src/i18n/es.ts` **y** `src/i18n/en.ts`, nunca escritos directo en los
  componentes. Ningún texto en español dentro de `/en` (ni en `alt`, `aria-label` o metadata).
- Contenido real: no inventar cifras, clientes ni logros. El número de WhatsApp nunca se muestra
  escrito en la página (solo el botón, vía `enlaceWhatsapp(lang)` de `lib/contacto.ts`).
- Fotos de personas con `FotoEncuadrada`: el punto de interés va en `foco` (por ejemplo
  `"52% 46%"`) y el zoom con una clase `scale-*`; recuerda multiplicar `sizes` por el zoom.

## Idiomas (español / inglés)

Enfoque nativo de Next 16, sin librería de i18n (guía local:
`node_modules/next/dist/docs/01-app/02-guides/internationalization.md`).

- **Rutas**: `/es/...` y `/en/...`, mismos slugs y segmentos en ambos (`/en/proyectos/<slug>`,
  `/en/soporte`). `src/proxy.ts` manda las URLs sin idioma a `/<idioma><ruta>` con 308: usa la
  cookie `idioma` (la pone el selector) o, si no hay, el `Accept-Language` del navegador
  (inglés → `/en`; cualquier otro → `/es`).
- **Enlaces internos**: siempre con `ruta(lang, "/proyectos")` de `@/i18n/config`, nunca
  `href="/..."` a secas.
- **Server Components**: `const lang = await getLang()` y `const t = await getDiccionario()`
  (de `@/i18n`), dentro del componente (no a nivel de módulo).
- **Client Components** no pueden leer el idioma: reciben sus textos ya traducidos por props
  desde el Server Component padre (ver `Nav`, `ListadoProyectos`). No mandes el diccionario
  completo al cliente; las funciones (`resultados(n)`) se mandan ya evaluadas.
- **Contenido** (`src/content/`): todo texto visible es `Traducible` (`{ es: "...", en: "..." }`);
  slugs, URLs, rutas, fechas, tecnologías y nombres propios van como `string`. Los componentes
  reciben el contenido ya resuelto con los helpers de `lib/` (`getPerfil(lang)`,
  `getProyectos(lang)`, `getServicios(lang)`...). TypeScript falla si falta un idioma.
- **Textos de interfaz nuevos**: agrégalos a `es.ts` y la misma clave a `en.ts`.
- **Inglés**: natural y profesional para reclutadores de EE. UU., con terminología estándar
  (Full Stack Developer, Production Support, Root Cause Analysis, Resume). Es la misma
  información que en español, nunca una versión "mejorada".
- **CV**: cada versión en `perfil.cvs` puede tener `rutaEn`. Si ese PDF existe, `/en` lo ofrece;
  si no, ofrece el de español con la etiqueta "(Spanish, PDF)".
- **SEO**: cada página exporta `generateMetadata` con `metadataDePagina()` de `lib/seo.ts`
  (canonical propio, hreflang `es`/`en`/`x-default`, Open Graph con `locale`). El sitemap lista
  ambas versiones de cada página.

## Regla obligatoria: revisión de diseño

**Todo cambio visual** (componentes, páginas o estilos) debe pasar por el subagente
`disenador-ui` (`.claude/agents/disenador-ui.md`) antes de darse por terminado. Invócalo
después de crear o modificar archivos en `src/app`, `src/components` o `globals.css`, aplica
sus correcciones y vuelve a correr lint y build. La revisión cubre **ambos idiomas**: los textos
en inglés suelen tener otra longitud y pueden romper el diseño.

## Cómo agregar un proyecto nuevo

1. Elige un `slug` en minúsculas con guiones, por ejemplo `clima-app`.
2. Procesa las capturas a WebP y guárdalas en `public/images/proyectos/clima-app/`:
   - `portada.webp`: recorte 16:10, 1600×1000 px, menos de 300 KB
   - Galería (`nombre-descriptivo.webp`): proporción original, máximo 1600 px de ancho,
     menos de 300 KB. Antes de publicar, difumina direcciones, datos de pacientes o clientes,
     correos, teléfonos personales, contraseñas, tokens y variables de entorno.
3. Copia un archivo de `src/content/proyectos/` (por ejemplo `inventory-bridge.ts`) a
   `src/content/proyectos/clima-app.ts`, cambia el nombre de la constante (`climaApp`) y
   rellena los campos:
   - **Cada texto visible va en los dos idiomas**: `{ es: "...", en: "..." }`. Un proyecto
     nuevo necesita su versión en inglés; sin ella, el build falla.
   - `slug`, `titulo`, `cliente` (opcional, nombre propio sin traducir), `resumen` (1-2 frases)
   - `caso`: `problema`, `solucion`, `funcionalidades` (lista breve) y `resultado`; se muestra
     como caso de estudio (problema → solución → stack → resultado). Solo hechos reales.
   - `tecnologias` (usa siempre el mismo nombre: "TypeScript", no "TS", para que el filtro agrupe bien)
   - `imagenPortada` con `src` y `alt` descriptivo (en ambos idiomas)
   - `galeria`: las imágenes que haya, cada una con `src`, `alt` y `leyenda` (texto visible
     opcional) en ambos idiomas, y `ancho`/`alto` en px para mostrarla sin recortar
   - `videoYoutube` (opcional): solo el ID, lo que va después de `v=` en la URL
   - `repoUrl` (omítelo si el repositorio es privado) y `demoUrl` (opcionales)
   - `destacado: true` si debe salir en el inicio
   - `publicado: false` para ocultarlo en todo el sitio (listados, detalle, destacados y
     sitemap) mientras no esté listo
   - `fecha` de lanzamiento en formato `AAAA-MM-DD` (se usa en el sitemap)
4. Regístralo en `src/content/proyectos/index.ts`: impórtalo y agrégalo al arreglo. **El orden
   de ese arreglo es el orden del sitio** (listado y destacados).
5. `npm run build`: falla con un mensaje claro si el slug está repetido o la fecha es inválida.
   Las páginas `/es/proyectos/clima-app` y `/en/proyectos/clima-app`, el sitemap y el filtro
   se actualizan solos.
6. Haz commit y push: Vercel publica automáticamente.

## Agregar otro idioma más adelante

Ver `src/i18n/config.ts`: sumarlo a `locales`, crear su diccionario con las mismas claves que
`es.ts`, registrarlo en `diccionarios.ts`, agregar su clave a `Traducible` (`src/types`), su
texto a todo el contenido y su región a `regionDe`/`formatoDe`.
