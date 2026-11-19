@AGENTS.md

# Portafolio de Ricardo Rivas

Sitio personal para que clientes y empleadores conozcan a Ricardo, vean sus proyectos
(imágenes, videos de YouTube y enlaces a GitHub) y lo contacten. Es un sitio muy visual:
**el diseño es prioridad**. Todo el contenido vive en el repositorio (sin base de datos)
y se publica en Vercel (plan gratis).

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
  app/                      páginas (App Router)
    page.tsx                inicio: Hero → Datos rápidos → Proyectos destacados → Servicios →
                            Cómo trabajo → Trayectoria → Sobre mí → Habilidades → Contacto
    proyectos/page.tsx      listado filtrable por tecnología
    proyectos/[slug]/       detalle de proyecto (generateStaticParams → estático)
    not-found.tsx           404 personalizada
    layout.tsx              fuentes, metadata global, Header/Footer, proveedores
    globals.css             SISTEMA DE DISEÑO (tokens)
    sitemap.ts, robots.ts, icon.svg, apple-icon.png, opengraph-image.tsx, twitter-image.tsx
  components/
    ui/                     base reutilizable: Button, Card, Badge, Section (prop tono), Container,
                            Icono (íconos por nombre), IconosMarca, FotoEncuadrada (foto con foco/zoom)
    layout/                 Header, Nav (menú + móvil), ThemeToggle, Footer, Providers
    sections/               Hero, HeroTitulo, DatosRapidos, ProyectosDestacados, Servicios,
                            ComoTrabajo, Trayectoria, SobreMi, Habilidades, Contacto
    proyectos/              TarjetaProyecto, ListadoProyectos, Galeria, VideoYoutube
  content/
    perfil.ts               datos personales, foto, redes, WhatsApp, datos rápidos, habilidades
    servicios.ts            tarjetas de Servicios
    metodo.ts               puntos de "Cómo trabajo"
    trayectoria.ts          línea de tiempo (trabajo y educación)
    proyectos/              un archivo .ts por proyecto + index.ts (registro)
  i18n/                     textos de interfaz (es.ts) y configuración de idiomas
  lib/                      cn, lectura de proyectos, URL del sitio, enlace de WhatsApp (contacto.ts)
  types/                    tipos Proyecto, Perfil, Imagen, Servicio, PuntoMetodo, EtapaTrayectoria
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
- Textos de interfaz en `src/i18n/es.ts`, nunca escritos directo en los componentes.
- Contenido real: no inventar cifras, clientes ni logros. El número de WhatsApp nunca se muestra
  escrito en la página (solo el botón, vía `enlaceWhatsapp` de `lib/contacto.ts`).
- Fotos de personas con `FotoEncuadrada`: el punto de interés va en `foco` (por ejemplo
  `"52% 46%"`) y el zoom con una clase `scale-*`; recuerda multiplicar `sizes` por el zoom.

## Regla obligatoria: revisión de diseño

**Todo cambio visual** (componentes, páginas o estilos) debe pasar por el subagente
`disenador-ui` (`.claude/agents/disenador-ui.md`) antes de darse por terminado. Invócalo
después de crear o modificar archivos en `src/app`, `src/components` o `globals.css`, aplica
sus correcciones y vuelve a correr lint y build.

## Cómo agregar un proyecto nuevo

1. Elige un `slug` en minúsculas con guiones, por ejemplo `clima-app`.
2. Guarda las imágenes en `public/images/proyectos/clima-app/`:
   - `portada.jpg` (proporción 16:10, ~1600×1000 px, menos de 300 KB)
   - `galeria-1.jpg`, `galeria-2.jpg`... (opcionales, misma proporción)
3. Copia un archivo de `src/content/proyectos/` (por ejemplo `inventory-bridge.ts`) a
   `src/content/proyectos/clima-app.ts`, cambia el nombre de la constante (`climaApp`) y
   rellena los campos:
   - `slug`, `titulo`, `cliente` (opcional), `resumen` (1-2 frases)
   - `caso`: `problema`, `solucion`, `funcionalidades` (lista breve) y `resultado`; se muestra
     como caso de estudio (problema → solución → stack → resultado). Solo hechos reales.
   - `tecnologias` (usa siempre el mismo nombre: "TypeScript", no "TS", para que el filtro agrupe bien)
   - `imagenPortada` y `galeria` con `src` y `alt` descriptivo
   - `videoYoutube` (opcional): solo el ID, lo que va después de `v=` en la URL
   - `repoUrl` (omítelo si el repositorio es privado) y `demoUrl` (opcionales)
   - `destacado: true` si debe salir en el inicio
   - `fecha` en formato `AAAA-MM-DD` (ordena el listado; con fechas iguales manda el orden de `index.ts`)
4. Regístralo en `src/content/proyectos/index.ts`: impórtalo y agrégalo al arreglo.
5. `npm run build`: falla con un mensaje claro si el slug está repetido o la fecha es inválida.
   La página `/proyectos/clima-app`, el sitemap y el filtro se actualizan solos.
6. Haz commit y push: Vercel publica automáticamente.

## Agregar inglés más adelante

Ver `src/i18n/config.ts`: crear `en.ts` con las mismas claves que `es.ts`, registrarlo, y mover
las páginas a `src/app/[lang]/`.
