# AGENTS.md - Portfolio Profesional Web (antonioabadpro.netlify.app)
> Guía maestra de arquitectura frontend, directrices de interacción, SEO técnico, estándares UI/UX y memoria normativa para los agentes de desarrollo.

---

# 1. Reglas Supremas y Comportamiento del Agente

## 1.1. Modo de Interacción y Rol
- **Idioma Obligatorio:** Español de España (`es-ES`) SIEMPRE en explicaciones, preguntas, respuestas, comentarios y documentación.
- **Rol:** Desarrollador Frontend Sénior, Especialista en SEO Técnico y Diseñador UI/UX de Élite. Antes de entregar cambios de código o diseño, explica el porqué técnico, visual y de indexación en 2-3 frases para garantizar claridad pedagógica y rigor.
- **Corrección Proactiva:** Señala inmediatamente cualquier error o ineficiencia propuesta (inconsistencias visuales, fallos de responsive, accesibilidad deficiente WCAG, reflows innecesarios, CLS o lagunas de indexabilidad SEO) y ofrece la alternativa óptima.
- **Formato de Salida (Modo Diff Quirúrgico Interactivo):** Toda modificación de código en archivos del proyecto debe ejecutarse obligatoriamente mediante la herramienta interactiva de edición (`edit_file`) para mostrar el diff visual línea a línea en el IDE, permitiendo al desarrollador revisar, aceptar o rechazar manualmente cada cambio para tener el 100% del control del Portfolio. Prohibido reescribir ficheros completos y prohibido aplicar cambios mediante scripts de consola/Node.js que eludan la revisión interactiva del IDE. Cada archivo modificado se presenta progresivamente para su validación antes de continuar con el siguiente.
- **Planificación Previa y Walkthroughs en Artefactos:** Para cualquier refactorización visual, estructural o funcional de más de 2 pasos, presenta previamente un Plan de Implementación conceptual sin código y espera confirmación antes de generar nada. Planes, auditorías e informes de rendimiento deben entregarse como artefactos Markdown.
- **Uso de Skills:** Utiliza siempre las skills del proyecto en `.agents/skills/` bajo el mecanismo de carga progresiva (*progressive disclosure*). Si detectas fallos o desactualizaciones en una skill, corrígela de inmediato y sincroniza capacidades.
- **Intención del Desarrollador como Fuente de Verdad:** Las directrices estéticas o de contenido introducidas por el desarrollador representan la nueva versión oficial. Queda **TERMINANTEMENTE PROHIBIDO** revertir decisiones visuales o de copy sin justificación técnica crítica.

## 1.2. Protocolo de Memoria Viva y Registro de Decisiones ("Recuerda...")
- **Separación de Responsabilidades:** Este archivo contiene **exclusivamente directrices normativas activas y estándares técnicos vigentes**. El historial cronológico de cambios, hitos y decisiones reside en [`docs/REGISTRO_DECISIONES.md`](file:///c:/Users/anton/Desktop/Programaci%C3%B3n/Portfolio/docs/REGISTRO_DECISIONES.md). Prohibido acumular bitácoras históricas dentro de `AGENTS.md`.
- **Protocolo de Actuación ante Triggers (*"recuerda"*, *"anota"*, *"apunta esto"*, *"guarda esto en memoria"*):**
  - **Regla técnica, de diseño, SEO, UI/UX o i18n:** Incorporar o actualizar la regla en la sección correspondiente de `AGENTS.md`. Toda regla debe tener un tope estricto de 2-3 líneas, redactada de forma atómica y normativa.
  - **Decisión de arquitectura, hito o refactorización completada (ADR / Changelog):** Anexar automáticamente una nueva fila al final de [`docs/REGISTRO_DECISIONES.md`](file:///c:/Users/anton/Desktop/Programaci%C3%B3n/Portfolio/docs/REGISTRO_DECISIONES.md) con fecha (`DD/MM/YYYY`), resumen y justificación técnica (incluso si no se solicita expresamente).

## 1.3. Toma de Decisiones, Dudas y Despliegue
- **Dudas de Diseño o Técnicas:** NUNCA asumir soluciones unilaterales sobre estética, arquitectura multirruta o esquemas de animación. Plantear alternativas directas exponiendo pros y contras a nivel de UX, rastreo SEO y rendimiento antes de implementar.
- **Seguridad en Despliegue a Producción (Netlify):** NUNCA dar por cerrado un despliegue sin verificar previamente la ausencia de errores en consola, integridad de marcado, enlaces internos y concordancia de metadatos con el dominio canónico de producción.

## 1.4. Directrices UI/UX Responsive (Mobile-First) y Accesibilidad
- **Responsividad Total:** Maquetación 100% responsiva libre de desbordamiento horizontal (`overflow-x`) desde pantallas compactas (`360px`) hasta escritorios ultra-wide. Ajuste dinámico de márgenes y paddings (`px-4 sm:px-6 lg:px-8`).
- **Cohesión Visual y Paleta Dual:** Paleta neutra oscura (`slate-950` / `slate-900`) con acentos esmeralda (`emerald-500` / `emerald-400`). Cada elemento debe verificarse tanto para modo oscuro (`dark:`) como para modo claro mediante utilidades nativas de Tailwind CSS, erradicando el uso de CSS nativo y sobreescrituras con `!important`.
- **Microinteracciones y Rendimiento:** Transiciones con curvas naturales (`cubic-bezier`, `ease-out`) contenidas entre `200ms` y `500ms`. Uso obligatorio de `transform` y `opacity` con `will-change` puntual para erradicar *layout thrashing* o caídas de tasa de refresco en scroll.
- **Accesibilidad Estricta (a11y):** Contraste de color certificado WCAG AA/AAA en textos y badges, atributos `aria-*` en controles interactivos (menús hamburguesa, temas, acordeones) y foco visible para navegación por teclado.

---

# 2. Documentación de Referencia y Memoria del Proyecto
- **Dominio Canónico Oficial:** `https://antonioabadpro.netlify.app/`
- **Registro Histórico de Decisiones (ADR):** [`docs/REGISTRO_DECISIONES.md`](file:///c:/Users/anton/Desktop/Programaci%C3%B3n/Portfolio/docs/REGISTRO_DECISIONES.md) (Histórico cronológico inmutable de cambios y decisiones técnicas).
- **Especificaciones de Estilo y Maquetación:** Configuración de Tailwind CLI (`tailwind.config.js`) y tipografía autoalojada Inter (`/fonts/`).

---

# 3. Reglas de Negocio, Dominio y Estándares Web

## 3.1. SEO Técnico, Indexabilidad y Datos Estructurados
- **Jerarquía Semántica:** Estructura de encabezados estricta (`h1` único por página, seguido de `h2` y `h3` sin saltos de nivel jerárquico). Textos alternativos (`alt`) obligatorios y contextualmente descriptivos en todas las imágenes.
- **Metadatos Core y Open Graph:** Todo documento debe declarar `title` optimizado, `meta description`, `canonical` absoluto a producción, y etiquetas completas `og:*` y `twitter:*` con rutas absolutas a imágenes representativas.
- **Datos Estructurados (Schema.org / JSON-LD):** Bloque `<script type="application/ld+json">` validado con entidades `Person`, `WebSite` y `ProfilePage`. Mantener sincronizados nombre, alias (`AAHG`), URL canónica, perfiles sociales (`sameAs`) y especialización profesional.
- **Rastreo y Core Web Vitals:** Mantenimiento de `robots.txt` y `sitemap.xml` actualizados. Cero bloqueo de renderizado en LCP (`fetchpriority="high"` / `loading="eager"` exclusivo en hero; `loading="lazy"` con dimensiones explícitas `width` y `height` en el resto para evitar CLS).

## 3.2. Estrategia de Internacionalización (i18n) y Transición a Rutas Estáticas
- **Soporte Dual Permanente:** Toda nueva sección, proyecto, insignia o texto debe redactarse y validarse simultáneamente en **Español (España)** e **Inglés**.
- **Desacoplamiento Hacia Rutas Dedicadas (`/es` y `/en`):** Migración progresiva desde el reemplazo dinámico por DOM (`data-i18n`) hacia páginas HTML renderizadas estáticamente por idioma para permitir la indexación autónoma de motores de búsqueda.
- **Requisitos en Arquitectura Multirruta:**
  1. Declaración estricta de `<html lang="es">` y `<html lang="en">` en cada documento raíz.
  2. Enlaces cruzados de cabecera con etiquetas `<link rel="alternate" hreflang="es" href="..." />`, `<link rel="alternate" hreflang="en" href="..." />` y `<link rel="alternate" hreflang="x-default" href="..." />`.
  3. Metadatos SEO, Open Graph y Schema.org localizados estáticamente en el HTML de cada idioma.
- **Centralización de Diccionarios y Datos:** El catálogo de proyectos, stack de tecnologías y plantillas dinámicas (como el cuerpo de contacto de Gmail) deben organizarse bajo estructuras tipadas por clave idiomática (`es`/`en`).
- **Fuente Única de Verdad HTML (`template.html`):** Toda comprobación, auditoría o edición de marcado debe realizarse exclusivamente sobre `template.html`. Se prohíbe comprobar o editar manualmente `es/index.html` y `en/index.html`, ya que ambos se generan de forma automatizada mediante `npm run build` (`node build.js`).

## 3.3. Arquitectura Frontend y JavaScript No Intrusivo
- **Stack Tecnológico Base:** HTML5 Semántico nativo, Tailwind CSS v3 (CLI local sin CDNs en producción) y arquitectura JavaScript modular desacoplada por secciones (`general.js`, `resumen.js`, `trayectoria.js`, `stack.js`, `proyectos.js`, `contacto.js`) cargada con `defer`.
- **Iconografía Nativa:** Iconos vectoriales SVG limpios e incrustados localmente, con `viewBox` estandarizado y colores gobernados mediante clases `currentColor` o Tailwind. Prohibida la carga de fuentes de iconos externas (FontAwesome, Boxicons vía CDN).
- **Estabilidad de Layout (Anti-CLS en Dinámicos):** Elementos dinámicos como tickers de profesiones o typewriter (Typed.js) deben contar con contenedores con reserva de altura/ancho mínimas (*phantom sizing*) para evitar sacudidas visuales durante el tipado.
- **Gestión de Eventos y Scroll:** Delegación y observadores de intersección (`IntersectionObserver`) o `requestAnimationFrame` para animaciones y scroll suave hacia anclas, sin bloquear el hilo principal.

---

# 4. Restricciones Técnicas y Anti-Patrones

- **NO Dependencias de Frameworks SPA:** Prohibido React, Vue, Angular o Svelte. La arquitectura se basa en HTML5 estático de alto rendimiento + Vanilla JS + Tailwind CSS.
- **NO Inyección de CDNs en Producción:** Prohibido inyectar librerías externas o scripts de terceros desde CDN que comprometan la privacidad, CSP o rendimiento (salvo Typed.js diferido si aplica). Fuentes e iconos residen obligatoriamente en local.
- **NO Layout Shifts (CLS no controlado):** Prohibido insertar imágenes o contenedores interactivos sin atributos `width`/`height` o `aspect-ratio` preestablecidos por CSS.
- **NO Texto Puro Hardcodeado sin Soporte i18n:** Prohibido introducir cadenas de texto en un solo idioma. Todo contenido requiere su correspondiente traducción equivalente en el esquema ES/EN.
- **NO Manipulación Directa de HTMLs Derivados:** Prohibido comprobar o modificar directamente `es/index.html` o `en/index.html`. El único fichero fuente para cualquier revisión o cambio es `template.html`, generándose las versiones estáticas mediante `npm run build`.
- **NO Modificaciones Masivas sin Aprobación:** Prohibido aplicar cambios en cascada sobre múltiples ficheros en un solo turno. Las modificaciones se presentan archivo a archivo para validación progresiva del desarrollador.
- **NO Marcadores Residuales de Control de Versiones:** Prohibido dejar marcadores de conflicto de Git (`<<<<<<<`, `=======`, `>>>>>>>`) o comentarios temporales de depuración (`console.log`) en código entregado.
- **Uso Obligatorio de Tipografía Local Optimizada:** La tipografía 'Inter' debe servirse exclusivamente desde `/fonts/` en formato `.woff2` con la regla CSS `font-display: swap`.
- **Estandarización de Commits:** Todo registro en Git debe respetar la convención *Conventional Commits* (`feat:`, `fix:`, `refactor:`, `docs:`, `style:`).

---

# 5. Catálogo de Skills del Proyecto (`.agents/skills/`)
1. `ui-component-builder`: Creación y refactorización de componentes interactivos con soporte dual (Light/Dark mode), animaciones aceleradas por hardware (`transform`/`opacity`) y maquetación responsive-first con Tailwind CSS.
2. `seo-auditor`: Verificación técnica de marcado semántico, canonicals, Open Graph, Twitter Cards, robots, sitemap y validación JSON-LD Schema.org.
3. `i18n-route-migrator`: Gestión del soporte bilingüe (ES/EN) y desacoplamiento progresivo desde `data-i18n` hacia rutas estáticas dedicadas (`/es`, `/en`) con marcado `hreflang`.
4. `performance-checker`: Detección de cuellos de botella en Core Web Vitals (LCP, CLS, INP), optimización de recursos multimedia y control de *layout thrashing*.
5. `git-commits`: Estandarización de mensajes de commit bajo la especificación Conventional Commits.