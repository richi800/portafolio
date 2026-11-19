/**
 * Idiomas del sitio. Hoy solo español. Para agregar inglés:
 * 1. Agrega "en" a `locales` y crea `en.ts` con las mismas claves que `es.ts`.
 * 2. Registra el diccionario en `index.ts`.
 * 3. Mueve las páginas a `src/app/[lang]/` y usa `getDiccionario(lang)`.
 */
export const locales = ["es"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "es"
