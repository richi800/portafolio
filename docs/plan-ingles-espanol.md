# Plan: sitio bilingüe (español / inglés)

> **Para Claude Code (terminal):** especificación para hacer el portafolio bilingüe.
> Léelo completo junto con `CLAUDE.md`, `AGENTS.md` y estas guías locales de Next 16
> **antes de escribir código** (la versión de Next tiene cambios respecto a tu entrenamiento):
> - `node_modules/next/dist/docs/01-app/02-guides/internationalization.md`
> - `node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md`
> - `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/next-root-params.md`
> - la de `generateStaticParams` y la de `cacheComponents` (están en `next.config.ts` activos)
>
> Trabaja por fases, corre `npm run lint` y `npm run build` al final de cada una y **no
> hagas commit ni push** hasta que Ricardo lo pida.

---

## 1. Objetivo

- Todo el sitio disponible en **español (`es`, idioma por defecto)** e **inglés (`en`)**.
- Rutas por subcarpeta: `/es`, `/en`, `/es/proyectos/<slug>`, `/en/soporte`, etc.
- Que un reclutador de EE. UU. vea el sitio en inglés automáticamente, y que cualquiera
  pueda cambiar de idioma con un clic.
- Sin perder posicionamiento: las URLs actuales (`/`, `/proyectos/...`, `/soporte`) ya
  están publicadas y compartidas en LinkedIn y el CV.

## 2. Decisión de herramientas

**Usar el enfoque nativo de Next.js (App Router), sin librería de i18n.** Razones:

1. El proyecto ya tiene diccionarios tipados (`src/i18n/es.ts` + `Diccionario`) y el
   `CLAUDE.md` ya prevé este camino (`src/i18n/config.ts`).
2. Solo son dos idiomas y casi todo es contenido estático: no se necesitan plurales
   complejos, ICU ni traducción en el cliente.
3. Es lo que documenta la guía oficial de Next 16: `app/[lang]`, `proxy.ts`,
   `generateStaticParams` y `next/root-params`. Funciona con `cacheComponents` y deja
   todas las páginas estáticas (rápidas y gratis en Vercel).
4. Menos dependencias = menos riesgo de incompatibilidad con Next 16 / React 19.

**Dependencias nuevas permitidas (solo estas dos, las que recomienda la guía):**
`negotiator` (+ `@types/negotiator` en dev) y `@formatjs/intl-localematcher`, para elegir
el idioma a partir del encabezado `Accept-Language`.

> Si durante la implementación encuentras una incompatibilidad real del enfoque nativo
> con `cacheComponents`, detente y explícasela a Ricardo con la alternativa (por ejemplo
> `next-intl`) antes de cambiar de estrategia.

---

## 3. Arquitectura

### 3.1 Configuración de idiomas (`src/i18n/config.ts`)

```ts
export const locales = ["es", "en"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "es"
export const hasLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v)
/** Para metadata (og:locale) y formatos de fecha. */
export const regionDe: Record<Locale, string> = { es: "es_MX", en: "en_US" }
```

### 3.2 Rutas (`src/app/[lang]/`)

- Mover **todas** las páginas y el root layout bajo `src/app/[lang]/`:
  `layout.tsx`, `page.tsx`, `not-found.tsx`, `proyectos/`, `soporte/`,
  `opengraph-image.tsx`, `twitter-image.tsx`.
- Se quedan en la raíz de `src/app/`: `globals.css`, `icon.svg`, `apple-icon.png`,
  `sitemap.ts`, `robots.ts`.
- En `[lang]/layout.tsx`: `generateStaticParams` → `[{ lang: "es" }, { lang: "en" }]`
  (obligatorio con `cacheComponents`), `<html lang={lang}>`, validar con `hasLocale` y
  `notFound()` si no es válido.
- En páginas con slug: `generateStaticParams` debe combinar idiomas × slugs publicados.
- Usar los helpers tipados `PageProps<'/[lang]/...'>` y `LayoutProps<'/[lang]'>`.

### 3.3 Proxy (`src/proxy.ts`)

Comportamiento:

1. Si la ruta ya empieza con `/es` o `/en` → no hacer nada.
2. Si no tiene idioma:
   - Si existe la cookie `idioma` (la pone el selector de idioma) y es válida → usarla.
   - Si no, elegir con `negotiator` + `match()` sobre `Accept-Language`; si no hay
     coincidencia → `es`.
   - Redirigir con **308** a `/<idioma><ruta>` conservando query string. Así
     `rivasrosado.com/soporte` lleva a `/es/soporte` o `/en/soporte` sin romper enlaces
     viejos.
3. El `matcher` debe **excluir**: `_next`, `api`, archivos con extensión (imágenes, PDF del
   CV, `.webp`, `.svg`, `.png`, `.ico`, `.txt`, `.xml`), `sitemap.xml`, `robots.txt`,
   `icon.svg`, `apple-icon.png`, `opengraph-image`, `twitter-image` en la raíz.

### 3.4 Diccionarios de interfaz (`src/i18n/`)

- Crear `en.ts` con **exactamente** las mismas claves que `es.ts`, tipado como
  `Diccionario` (TypeScript debe fallar si falta una clave).
- `getDiccionario()` sin argumentos que lea el idioma con `lang()` de `next/root-params`
  (patrón de la guía). Mantener una versión `getDiccionario(locale)` para los pocos casos
  donde root-params no aplica (route handlers como las imágenes OG, si fuera necesario).
- **Client Components** (`Nav`, `ThemeToggle`, `ListadoProyectos`, `ListadoCertificados`,
  etc.) no pueden usar root-params: reciben los textos que necesitan **por props** desde
  su Server Component padre. No enviar el diccionario completo al cliente.

### 3.5 Contenido traducible (`src/content/`)

El contenido (perfil, proyectos, servicios, método, trayectoria, soporte, certificados) hoy
es texto en español. Patrón:

```ts
// src/types/index.ts
export type Traducible = { es: string; en: string }
```

- Los campos de **texto visible** pasan a `Traducible` (o `Traducible[]` para listas):
  títulos, resúmenes, descripciones, `caso.*`, funcionalidades, leyendas, `alt` de
  imágenes, bio, presentación, datos rápidos, roles y periodos de trayectoria, nombres de
  habilidades descriptivas ("Diseño responsivo", "Pruebas funcionales…"), textos de
  soporte, etc.
- Se quedan **sin traducir** (un solo valor): slugs, URLs, rutas de imágenes, fechas ISO,
  nombres de tecnologías (React, Next.js, PostgreSQL…), nombres propios (Central Médica,
  Grupo Komunah, UNID, Pablo Benlliure), títulos de certificados tal como los emite la
  plataforma, número de WhatsApp.
- Helper en `src/lib/`: `tr(texto: Traducible, lang: Locale): string`, y funciones de
  lectura que devuelvan el contenido ya resuelto al idioma (`getProyectos(lang)`, etc.)
  para que los componentes no repitan la lógica.
- Los **slugs son iguales en ambos idiomas** (`/en/proyectos/inventory-bridge`). No
  traducir segmentos de ruta (`proyectos` y `soporte` se quedan igual en `/en`) para
  mantenerlo simple; los títulos visibles sí se traducen.
- Las validaciones de build existentes (slug único, fechas) deben seguir funcionando.

### 3.6 Selector de idioma

- Componente en el Header (junto al botón de tema) y en el menú móvil.
- Son **enlaces reales** (`<a>`/`Link`), no un `<select>` con JavaScript: llevan a la
  **misma página** en el otro idioma (`/es/soporte` ↔ `/en/soporte`), conservando el hash
  si aplica.
- Texto visible corto: `ES` / `EN`, con `aria-label` completo ("Ver en inglés" / "View in
  Spanish"), `hrefLang` y `lang` en cada opción, `aria-current` en el idioma activo.
- Al hacer clic guarda la cookie `idioma` (1 año, `SameSite=Lax`, `path=/`) para que el
  proxy respete la elección en la próxima visita a una URL sin idioma.
- Área táctil de 44 px, foco visible, tokens del sistema de diseño.

### 3.7 SEO

- `generateMetadata` en cada página, por idioma: `title`, `description`, `openGraph`
  (`locale: es_MX | en_US`, `alternateLocale` del otro), `twitter`.
- `alternates`: `canonical` a la URL del idioma actual y `languages` con `es`, `en` y
  `x-default` (→ versión `es`). Usar `metadataBase` existente (`lib/` ya tiene la URL del
  sitio).
- `sitemap.ts`: una entrada por URL y por idioma, con `alternates.languages`.
- Imágenes OG / Twitter con el texto en el idioma de la ruta.
- `robots.ts` sin cambios salvo que apunte al sitemap correcto.

### 3.8 Otros detalles

- **Fechas y números** con `Intl.DateTimeFormat(lang === "es" ? "es-MX" : "en-US")`.
- **WhatsApp:** el mensaje prellenado se traduce (`perfil.whatsapp.mensaje` → `Traducible`).
- **CV:** si existe `public/cv/ricardo-rivas-cv-en.pdf`, en `/en` se ofrece ese; si no,
  se muestra el CV en español con la etiqueta "Resume (Spanish, PDF)". Misma regla de
  "si el archivo no existe, no se muestra" que ya usa el CV de Soporte TI.
- **404:** `not-found.tsx` en el idioma correspondiente.
- **Enlaces internos:** todos llevan el prefijo de idioma (`/${lang}/proyectos`,
  `/${lang}/#contacto`). Crear un helper `ruta(lang, path)` y usarlo en Nav, Footer,
  botones y tarjetas. Buscar con grep cualquier `href="/` que quede sin prefijo.
- Actualizar el `CLAUDE.md`: estructura nueva, cómo agregar textos en ambos idiomas y que
  todo proyecto nuevo necesita su versión en inglés. Actualizar también
  `.claude/agents/disenador-ui.md` para que revise ambos idiomas (los textos en inglés
  suelen ser más cortos o más largos y pueden romper diseños).

---

## 4. Calidad de la traducción al inglés

- Inglés **natural y profesional para reclutadores de EE. UU.**, no traducción literal.
  Ricardo tiene inglés B2 certificado: el sitio debe sonar a alguien con ese nivel, claro
  y directo, sin frases rebuscadas.
- Usar la terminología estándar de la industria: *Full Stack Developer*, *Production
  Support*, *Root Cause Analysis*, *Incident Response*, *Freelance*, *Case study*,
  *Tech stack*, *Resume* (no "CV" en EE. UU.; "CV / Resume" en el botón está bien).
- Cargo de Komunah en inglés: **"IT Coordinator"**, con la función **"SaaS Support (L3)"**
  en la descripción (mismas reglas de honestidad que en español: sin SLA, MTTR ni
  métricas no confirmadas; ver `docs/plan-soporte-y-certificaciones.md`, sección 2).
- **No inventar nada** que no exista en la versión en español. La versión en inglés es la
  misma información, no una versión "mejorada".
- Ubicación: "Mérida, Yucatán, Mexico". Disponibilidad: mencionar que trabaja de forma
  remota solo si el texto en español ya lo dice.
- Al terminar, entregar a Ricardo una **tabla de revisión** con los textos principales
  (hero, sobre mí, servicios, soporte, contacto, meta descripciones) en dos columnas
  ES | EN para que él la apruebe.

---

## 5. Fases

1. **Base:** dependencias, `config.ts`, `proxy.ts`, mover rutas a `[lang]`, layout con
   `generateStaticParams` y `<html lang>`. Al terminar, el sitio funciona igual en `/es`.
2. **Diccionarios:** `en.ts` completo, `getDiccionario()` con root-params, textos por
   props a los Client Components.
3. **Contenido:** tipo `Traducible`, migrar todos los archivos de `src/content/`,
   helpers de lectura por idioma, traducir al inglés.
4. **Selector de idioma**, enlaces internos con prefijo, WhatsApp, CV, fechas, 404.
5. **SEO:** metadata por idioma, `hreflang`, sitemap, imágenes OG.
6. **Revisión de diseño obligatoria** con el subagente `disenador-ui` en ambos idiomas
   (360, 768 y 1280 px; claro y oscuro), aplicar correcciones.
7. **Verificación final** (sección 6) y reporte a Ricardo. Sin commit ni push.

## 6. Criterios de aceptación

- `npm run lint` y `npm run build` sin errores ni advertencias; todas las rutas de ambos
  idiomas aparecen como estáticas en el resultado del build.
- `/` con navegador en inglés → `/en`; en español u otro idioma → `/es`.
- `/soporte` y `/proyectos/inventory-bridge` (URLs viejas) redirigen con 308 a su versión
  con idioma.
- El selector cambia a la misma página en el otro idioma y la elección se recuerda.
- No queda ningún texto en español dentro de `/en` (revisar también `alt`, `aria-label`,
  títulos de pestaña y metadata) ni texto en inglés dentro de `/es`.
- El HTML de cada página tiene `lang` correcto, `canonical` propio y `hreflang` para `es`,
  `en` y `x-default`.
- `sitemap.xml` lista ambas versiones de cada página.
- Las imágenes, el CV, `icon.svg`, `robots.txt` y `sitemap.xml` siguen cargando (el
  proxy no los redirige).
- El modo oscuro, el filtro de proyectos y el de certificaciones funcionan en ambos idiomas.
- `CLAUDE.md` y el agente `disenador-ui` actualizados.

## 7. Lo que necesita Ricardo

- Revisar y aprobar la tabla ES | EN de la sección 4.
- Opcional: un CV en inglés en `public/cv/ricardo-rivas-cv-en.pdf`.
- Cuando se publique: actualizar el enlace del portafolio en LinkedIn si quiere que lleve
  directo a `/en` (por ejemplo, `https://www.rivasrosado.com/en`).
