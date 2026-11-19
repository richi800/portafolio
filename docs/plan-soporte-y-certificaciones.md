# Plan: Soporte de producción y certificaciones

> **Para Claude Code (terminal):** este documento es la especificación completa de la
> siguiente iteración del portafolio. Léelo entero junto con `CLAUDE.md` antes de tocar
> código. Implementa las fases en orden, respeta las reglas de honestidad de la sección 2
> y **no hagas commit ni push** hasta que Ricardo lo pida. Si un dato marcado como
> `PENDIENTE` no está, usa la regla de la sección 5 (ocultar, nunca inventar).

---

## 1. Objetivo

Ricardo quiere dos apartados claros en su perfil, sin mentir sobre su experiencia:

1. **Desarrollo** (lo que ya existe): Desarrollador Full Stack, proyectos en producción.
2. **Soporte de producción** (nuevo): su experiencia real en soporte técnico e
   infraestructura, las buenas prácticas con las que trabaja y casos reales anonimizados.

Además:

3. **Certificaciones y formación continua** (nuevo): cursos de Udemy u otras plataformas
   de soporte, seguridad, redes, etc., marcando cuáles están terminados y cuáles en curso.
4. **Dos versiones de CV** descargables: *Full Stack* y *Soporte TI* (Ricardo ya tiene los dos).

### Posicionamiento (perfil en T)

- La identidad principal **sigue siendo Desarrollador Full Stack** (hero, título, meta).
- El soporte es la **segunda especialidad y el diferenciador**: "un desarrollador que
  sabe qué pasa cuando algo falla en producción".
- Frase de apertura del apartado de soporte (aprobada):
  > **Conecto soporte e ingeniería: reproduzco fallas, encuentro la causa raíz y convierto
  > incidentes en mejoras permanentes.**

---

## 2. Reglas de honestidad (obligatorias)

La información de soporte que Ricardo compartió es una guía de buenas prácticas de un
"Soporte Técnico SaaS L3". **No se copia tal cual**: se adapta a lo que él puede demostrar.

### 2.1 Hechos ya confirmados (se pueden usar)

| Dónde | Qué hizo | Fuente |
|---|---|---|
| Grupo Komunah, 2019 – ene 2025 | Coordinador de TI: mesa de ayuda, infraestructura (Microsoft 365, redes, CRM, ERP); después desarrollo junior: React, Node.js, integraciones REST con CRM, ERP y Mercado Pago, validación de datos con SQL | `src/content/trayectoria.ts` |
| Central Médica, feb 2025 – hoy | Desarrolla y **da soporte en producción** a la tienda, Inventory Bridge y la plataforma de citas: despliegues, servidor Linux, corrección de errores | `trayectoria.ts`, `proyectos/` |
| Herramientas | Postman, Jira, Notion, SQL, Git, Vercel, DigitalOcean, Linux; pruebas funcionales, de regresión y UAT | `perfil.ts` → habilidades |

### 2.2 Solo con confirmación de Ricardo (`PENDIENTE` hasta que lo confirme)

- La palabra **"SaaS"** asociada a un puesto, y el nivel **"L3"** (o L1/L2). Ricardo dice
  que sí trabajó en soporte SaaS: falta empresa (o descripción anónima), fechas, puesto y
  nivel. Ver plantilla en la sección 8.
- **SLA, MTTR, severidades, correlation IDs, postmortems formales, coordinación con
  Producto / Customer Success**: solo si los vivió en ese puesto.
- **Herramientas de observabilidad** (Sentry, Datadog, Grafana, ELK, ServiceNow, Zendesk,
  Freshdesk…): solo las que realmente usó.
- **Cualquier número** (tickets al mes, % de SLA, reducción de MTTR, cuentas atendidas).

### 2.3 Prohibido

- Inventar métricas, porcentajes, clientes o incidentes.
- Usar el titular "Ingeniero de Soporte Técnico SaaS L3" si L3 no está confirmado.
  Alternativa honesta por defecto: **"Soporte de producción"** / **"Soporte técnico y de
  producción"**.
- Nombrar a VibeCity o presentar QA como puesto actual (decisión previa de Ricardo).
- Publicar capturas reales con datos de clientes o pacientes, correos, teléfonos, tokens,
  contraseñas, cadenas de conexión, IPs internas o código propietario.

### 2.4 Cómo redactar sin mentir

- Las **buenas prácticas** se presentan como *principios de trabajo* ("Así trabajo un
  incidente"), no como logros medidos. Eso es verdadero aunque no haya métricas.
- Los **logros** solo aparecen dentro de casos reales, con alcance cualitativo si no hay
  números ("el error dejó de repetirse", "el equipo de mesa de ayuda ya lo resolvía sin
  escalar").

---

## 3. Arquitectura de contenido (datos)

Todo el contenido vive en `src/content/` y los tipos en `src/types/index.ts`, igual que el
resto del sitio.

### 3.1 Tipos nuevos (`src/types/index.ts`)

```ts
export type AreaCertificado =
  | "soporte"
  | "seguridad"
  | "redes"
  | "cloud"
  | "desarrollo"
  | "datos"

export type Certificado = {
  titulo: string
  /** Quién emite o imparte: "Udemy · Denis Chepik Antropov", "Cisco", "Google"... */
  emisor: string
  area: AreaCertificado
  /** "en-curso" se muestra con etiqueta; nunca se presenta como terminado. */
  estado: "completado" | "en-curso"
  /** AAAA-MM. Obligatoria si estado = "completado". */
  fecha?: string
  /** Enlace público para verificar el certificado (Udemy da uno por certificado). */
  urlVerificacion?: string
  /** Horas del curso, si la plataforma las indica. */
  horas?: number
  /** Qué aprendió y aplica, una frase. Opcional. */
  aprendizaje?: string
}

export type PracticaSoporte = {
  icono: NombreIcono
  titulo: string
  descripcion: string
}

/** Caso real anonimizado. Estructura de 8 pasos. */
export type CasoSoporte = {
  slug: string
  titulo: string
  /** Contexto sin nombres sensibles: "Tienda en línea con Shopify", "Mesa de ayuda corporativa". */
  contexto: string
  sintoma: string
  impacto: string
  /** Arquitectura o flujo afectado, en una o dos frases. */
  flujo: string
  evidencia: string[]
  hipotesis: { idea: string; resultado: string }[]
  causaRaiz: string
  mitigacion: string
  solucion: string
  prevencion: string[]
  /** Cualitativo si no hay números reales. */
  resultado: string
  tecnologias: string[]
  /** false = oculto. Por defecto oculto hasta que Ricardo confirme que es real. */
  publicado?: boolean
}

export type VersionCv = {
  etiqueta: string
  /** Ruta dentro de /public. */
  ruta: string
}
```

- Agregar a `NombreIcono`: `"incidentes" | "diagnostico" | "seguridad" | "documentacion" |
  "comunicacion" | "certificado" | "automatizacion"` y mapearlos en
  `components/ui/Icono.tsx` (sugerencia lucide: `Siren`, `SearchCode`, `ShieldCheck`,
  `BookOpenText`, `MessagesSquare`, `Award`, `Workflow`).
- En `Perfil`, reemplazar `cv: string` por `cvs: VersionCv[]` y actualizar `Contacto.tsx`.

### 3.2 Archivos de contenido nuevos

- `src/content/soporte.ts` → exporta `introSoporte`, `practicasSoporte`,
  `cicloIncidente`, `herramientasSoporte` y `casosSoporte`.
- `src/content/certificados.ts` → exporta `certificados: Certificado[]` (el orden del
  arreglo es el orden del sitio; primero los completados más recientes).
- Validación en build (igual que proyectos): slug de caso único, `fecha` obligatoria y
  válida (`AAAA-MM`) si `estado === "completado"`, URL de verificación con `https://`.

### 3.3 Dos versiones de CV

```ts
cvs: [
  { etiqueta: "CV Desarrollador Full Stack (PDF)", ruta: "/cv/ricardo-rivas-cv.pdf" },
  { etiqueta: "CV Soporte TI (PDF)", ruta: "/cv/ricardo-rivas-cv-soporte-ti.pdf" },
]
```

- `PENDIENTE`: Ricardo debe copiar su CV de Soporte TI a
  `public/cv/ricardo-rivas-cv-soporte-ti.pdf`. **Si el archivo no existe, esa versión no se
  muestra** (validarlo en build con `fs.existsSync` o filtrar en el componente servidor).
- En Contacto se muestran los dos botones. En `/soporte` el CV de Soporte TI va primero.
- Antes de publicarlo, revisar que el CV de soporte diga lo mismo que la web (mismas
  fechas, puestos y nivel).

---

## 4. Interfaz (qué se construye)

### 4.1 Página nueva `/soporte` — "Soporte de producción"

Archivo: `src/app/soporte/page.tsx` (estático, con `metadata` propia).

Orden de bloques:

1. **Encabezado**: `h1` "Soporte de producción" + frase de apertura (sección 1) + párrafo
   de experiencia (texto en 6.1) + botones: *Descargar CV Soporte TI* y *Escribir por
   WhatsApp*.
2. **Así trabajo un incidente** (ciclo): lista ordenada, accesible, que se ve como línea
   de pasos en escritorio y vertical en móvil:
   Detectar → Priorizar por impacto → Diagnosticar con evidencia → Mitigar → Resolver →
   Causa raíz → Prevenir. Cada paso con una frase (texto en 6.2).
3. **Buenas prácticas** (8 tarjetas, `PracticaSoporte`, texto en 6.3). Reutilizar `Card`
   e `IconoEnMarco`.
4. **Casos reales** (solo los `publicado !== false`). Cada caso como `<article>` con los
   8 pasos: Síntoma e impacto → Flujo afectado → Evidencia → Hipótesis (investigada /
   descartada) → Causa raíz → Mitigación y solución → Prevención → Resultado. Si no hay
   ningún caso publicado, **el bloque completo no se renderiza** (sin mensajes de "próximamente").
5. **Herramientas de soporte**: chips con lo confirmado en 2.1 (Postman, SQL, Jira,
   Notion, Git, Linux, Microsoft 365, redes, Vercel, DigitalOcean). Agregar más solo si
   Ricardo las confirma.
6. **Certificaciones de soporte y seguridad**: las de `certificados.ts` con área
   `soporte`, `seguridad` o `redes` (reutiliza el componente de 4.3).
7. **CTA final** reutilizando el estilo de Contacto.

Metadata: título "Soporte de producción · Ricardo Rivas Rosado"; descripción con palabras
clave **reales** (Production Support, Troubleshooting, Incident Response, RCA, APIs REST,
SQL, Runbooks). Agregar `/soporte` a `sitemap.ts`.

### 4.2 Inicio: sección puente "Soporte y confiabilidad"

Nueva sección `components/sections/SoporteResumen.tsx`, ubicada **después de
`ComoTrabajo`** y antes de `Trayectoria`:

- Título "Soporte y confiabilidad", la frase de apertura y **4** prácticas destacadas
  (Priorizar por impacto, Diagnóstico con evidencia, Causa raíz sin culpables, Prevención).
- Enlace claro: "Ver cómo trabajo el soporte" → `/soporte`.
- Revisar que no repita a `ComoTrabajo`: si se pisan, `ComoTrabajo` queda enfocado en el
  proceso de **desarrollo** (calidad antes de liberar, APIs y datos, orden, despliegues) y
  la nueva sección en **operación/incidentes**.

### 4.3 Sección "Certificaciones y formación continua"

Componente `components/sections/Certificaciones.tsx`, en el inicio **después de
`Habilidades`** (con `id="certificaciones"`):

- Filtro por área (chips accesibles, como el filtro de tecnologías de `/proyectos`), con
  "Todas" por defecto. Si un área no tiene certificados, no aparece el chip.
- Cada certificado: título, emisor, área, fecha, horas y botón "Verificar" (enlace externo,
  `rel="noopener noreferrer"`, aviso de pestaña nueva) cuando hay `urlVerificacion`.
- Los `en-curso` llevan una `Badge` "En curso" y van después de los completados. **Nunca
  muestran botón de verificar.**
- Si el arreglo está vacío, la sección no se renderiza.
- Logos de plataformas: no usar logos de marcas ajenas; solo texto e ícono `certificado`.

### 4.4 Navegación

- Nav principal: **Proyectos · Soporte · Servicios · Trayectoria · Sobre mí · Contacto**.
  "Soporte" apunta a `/soporte` (marcarlo `aria-current` en esa ruta). "Cómo trabajo" sale
  del menú (la sección sigue en la página). Certificaciones se alcanza desde el inicio y
  desde `/soporte`; no se agrega al menú para no saturarlo.
- Todos los textos nuevos de interfaz en `src/i18n/es.ts`.

### 4.5 Trayectoria

- Reescribir la descripción de **Grupo Komunah** destacando el soporte real (texto en 6.4).
- `PENDIENTE`: agregar la etapa del **puesto de soporte SaaS** cuando Ricardo dé los datos
  de la sección 8 (con el nombre de la empresa o "Empresa SaaS (confidencial)" si prefiere
  no nombrarla). Si no hay datos, no se agrega nada.

---

## 5. Comportamiento con datos pendientes

| Dato pendiente | Qué hace el sitio |
|---|---|
| Sin casos publicados | No se muestra el bloque de casos en `/soporte` |
| Sin certificados | No se muestra la sección de certificaciones |
| Certificado sin terminar | Badge "En curso", sin fecha ni botón de verificar |
| Sin CV de Soporte TI | Solo se muestra el CV Full Stack |
| Sin datos del puesto SaaS | No se menciona SaaS ni L3 en ningún texto |

---

## 6. Textos aprobados (listos para usar)

### 6.1 Párrafo de experiencia (`/soporte`, encabezado)

> Antes de programar sistemas estuve del lado del soporte. Durante seis años coordiné la
> mesa de ayuda y la infraestructura de una empresa: usuarios, Microsoft 365, redes, CRM y
> ERP. Hoy, como desarrollador, sigo dando soporte en producción a los sistemas que
> construyo: despliegues, servidor Linux, diagnóstico de errores y corrección.

(Cuando el puesto SaaS esté confirmado, agregar una frase con él.)

### 6.2 Ciclo de un incidente

1. **Detectar** — Entiendo el síntoma tal como lo vive el usuario y confirmo que se puede reproducir.
2. **Priorizar por impacto** — Ordeno por usuarios afectados, funciones críticas y efecto en el negocio, no por orden de llegada.
3. **Diagnosticar con evidencia** — Reviso registros, respuestas de la API, datos en la base y cambios recientes antes de suponer.
4. **Mitigar** — Primero restablezco el servicio de forma segura; la solución definitiva viene después.
5. **Resolver** — Pruebo la corrección en un entorno controlado, la libero con plan de reversa y la valido en producción.
6. **Causa raíz** — Documento qué pasó, por qué y qué lo permitió, sin buscar culpables.
7. **Prevenir** — Convierto lo aprendido en una prueba, una alerta, una guía o una mejora del sistema.

### 6.3 Buenas prácticas (8 tarjetas)

| Ícono | Título | Descripción |
|---|---|---|
| `incidentes` | Prioridad por impacto | Atiendo primero lo que afecta a más usuarios o a funciones críticas del negocio. |
| `diagnostico` | Diagnóstico con evidencia | Registros, códigos HTTP, consultas SQL y cambios recientes: decido con datos, no con suposiciones. |
| `integraciones` | Escalamientos completos | Cuando escalo, entrego impacto, pasos para reproducir, evidencia, lo que ya probé y mi hipótesis. |
| `produccion` | Cambios seguros | Reproduzco antes de tocar producción, uso el mínimo acceso necesario y siempre tengo cómo revertir. |
| `documentacion` | Causa raíz sin culpables | Documento qué falló y qué lo permitió para corregir el proceso, no para señalar personas. |
| `automatizacion` | Prevención | Lo que se repite se vuelve guía, prueba, alerta o mejora del sistema. |
| `comunicacion` | Comunicación clara | Informo impacto, estado y siguientes pasos sin prometer tiempos que no puedo cumplir. |
| `seguridad` | Datos protegidos | Comparto evidencia sin contraseñas, tokens ni datos personales de usuarios. |

### 6.4 Trayectoria — Grupo Komunah (nueva descripción)

> Coordiné la mesa de ayuda y la infraestructura: atención a usuarios, Microsoft 365, redes,
> CRM y ERP. De ahí pasé al desarrollo: funcionalidades en React y Node.js, integraciones
> REST con CRM, ERP y Mercado Pago, y validación de datos con SQL.

### 6.5 Textos de interfaz para `es.ts`

- `nav.soporte`: "Soporte"
- `soporteResumen.titulo`: "Soporte y confiabilidad"
- `soporteResumen.enlace`: "Ver cómo trabajo el soporte"
- `soportePagina.ciclo`: "Así trabajo un incidente"
- `soportePagina.practicas`: "Buenas prácticas"
- `soportePagina.casos`: "Casos reales"
- `soportePagina.casosIntro`: "Incidentes reales, anonimizados: sin datos de clientes ni de usuarios."
- `soportePagina.herramientas`: "Herramientas"
- `soportePagina.pasos`: síntoma e impacto / flujo afectado / evidencia / hipótesis / causa raíz / mitigación y solución / prevención / resultado
- `certificados.titulo`: "Certificaciones y formación continua"
- `certificados.intro`: "Lo que estoy estudiando para seguir creciendo en soporte, seguridad y desarrollo."
- `certificados.enCurso`: "En curso"
- `certificados.verificar`: "Verificar"
- `certificados.todas`: "Todas"
- Nombres de área: Soporte, Seguridad, Redes, Cloud, Desarrollo, Datos

---

## 7. Fases de implementación

Cada fase termina con `npm run lint` y `npm run build` sin errores ni advertencias.

0. **Agente de diseño al día**: actualizar `.claude/agents/disenador-ui.md` para que
   describa el Hero actual (retrato grande a la derecha con bloque cobalto, nombre en tres
   líneas a la izquierda) en vez de "la foto encajada como letra".
1. **Tipos y contenido**: tipos de la sección 3.1, íconos nuevos, `soporte.ts` con textos
   de la sección 6 y `casosSoporte` vacío, `certificados.ts` con lo que haya en la
   sección 8 (vacío si no hay), `cvs` en perfil.
2. **Certificaciones**: componente y sección del inicio (4.3).
3. **Página `/soporte`** (4.1), metadata y sitemap.
4. **Inicio y navegación**: `SoporteResumen` (4.2), menú (4.4) y Trayectoria (4.5).
5. **CV doble** en Contacto y `/soporte` (3.3).
6. **Revisión de diseño obligatoria** con el subagente `disenador-ui` sobre todo lo nuevo
   (360, 768 y 1280 px; claro y oscuro; teclado; contraste), aplicar correcciones y volver
   a correr lint y build.
7. **Reporte a Ricardo**: qué se hizo, capturas, y la lista de `PENDIENTE` que siguen sin
   datos. **Sin commit ni push** hasta que él lo pida.

### Criterios de aceptación

- No aparece "SaaS", "L3", SLA, MTTR ni ninguna métrica sin confirmación en la sección 8.
- `/soporte` funciona con 0 casos y 0 certificados sin verse vacía ni rota.
- Un solo `h1` por página; textos en `es.ts`; solo tokens de `globals.css`.
- El hero y la identidad principal siguen siendo de Desarrollador Full Stack.

---

## 8. Datos que llena Ricardo

> Ricardo: llena lo que tengas y guarda el archivo. Lo que dejes vacío se queda oculto en
> la web. También puedes dictárselo a Claude en la terminal.

### 8.1 Puesto de soporte SaaS

```yaml
empresa: "Grupo Komunah"   # confirmado 2026-11-19 (mismo puesto 2019 – ene 2025)
producto: ""           # qué hacía el software, ej. "plataforma de reservas para hoteles"
puesto: "Coordinador de TI"   # función: soporte SaaS L3
nivel: "L3"            # confirmado por Ricardo
periodo: "2019 – Ene 2025"
herramientas: []       # ej. [Zendesk, Jira, Postman, SQL]  solo las que usaste
que_hacias: []         # 3 a 5 frases reales
numeros_reales: []     # opcional: tickets/mes, cuentas, etc. Solo si los recuerdas con certeza
```

### 8.2 Casos reales (2 o 3)

Para cada uno, aunque sea en borrador; Claude lo redacta con la estructura de 8 pasos.
Ideas para buscar en tu memoria: un error de sincronización con Shopify o el inventario,
un despliegue que falló, un problema que se repetía en la mesa de ayuda y que resolviste
de raíz, una integración (CRM, ERP, Mercado Pago) que dejó de funcionar.

```yaml
- titulo: ""
  contexto: ""          # sin nombres sensibles
  que_paso: ""          # síntoma y a quién afectó
  como_lo_investigaste: ""
  que_descartaste: ""
  causa: ""
  como_lo_arreglaste: ""
  que_hiciste_para_que_no_se_repita: ""
  resultado: ""
```

### 8.3 Certificados

```yaml
- titulo: "Soporte Técnico SaaS desde Cero: Tu Primer Trabajo en Tech"
  emisor: "Udemy · Denis Chepik Antropov"
  area: soporte
  estado: en-curso      # cambia a completado cuando lo termines
  fecha: ""             # AAAA-MM al terminar
  urlVerificacion: ""   # el enlace del certificado de Udemy
# agrega aquí los demás (seguridad, redes, etc.)
```

### 8.4 CV de Soporte TI

- [ ] Copiar el PDF a `public/cv/ricardo-rivas-cv-soporte-ti.pdf`
- [ ] Confirmar que sus fechas y puestos coinciden con la web y LinkedIn
