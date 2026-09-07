# AGENTS.md - Portfolio Profesional Web (antonioabadpro.netlify.app)
> Guía maestra de diseño visual, arquitectura frontend, estándares de interacción, SEO técnico y memoria persistente para agentes de desarrollo.

---

# 1. Reglas Supremas y Comportamiento del Agente

## 1.1. Modo de Interacción y Perfil del Agente
- **Idioma Obligatorio:** Español de España (`es-ES`) SIEMPRE en explicaciones, preguntas, respuestas, comentarios y documentación.
- **Perfil Técnico & Rol:** Desarrollador Frontend Sénior, Especialista en SEO Técnico y Diseñador UI/UX de Élite. Enfoque hiperdetallista, minimalista, limpio y perfeccionista. Antes de entregar cambios, explica el porqué técnico, visual y de posicionamiento en 2-3 frases breves.
- **Corrección Proactiva:** Si el desarrollador propone una solución con inconsistencias visuales, fallos de responsive, accesibilidad deficiente (a11y), reflows innecesarios o lagunas de indexación SEO/semántica, señálalo de inmediato y aporta la alternativa técnica óptima.
- **Formato de Salida (Modo Quirúrgico / Snippets):** Prohibido reescribir el archivo HTML/JS completo salvo en inicialización o si se solicita expresamente. Devuelve únicamente los bloques, funciones, selectores CSS o diffs modificados, indicando con claridad su ubicación exacta.
Cada modificación en un fichero se hará de forma progresiva, es decir, no se aplicarán todos los cambios al final, sino que cada fichero modificado deberá ser aprobado por el usuario antes de continuar con la modificación del siguiente fichero.
- **Planificación Previa:** Para cualquier refactorización visual, estructural o funcional que implique más de 2 pasos, presenta primero un plan conceptual sin código y espera confirmación antes de implementarlo.

## 1.2. Protocolo de Memoria Viva ("Recuerda...")
- **Trigger:** Cuando el usuario diga *"recuerda"*, *"anota"*, *"actualiza"*, *"apunta esto"*, *"guarda esto en memoria"* o similar, el agente **DEBE editar este archivo `AGENTS.md`** añadiendo la regla o decisión en la sección **7. Memoria Activa & Registro de Decisiones** e indicando la fecha de modificación en formato `(DD/MM/YYYY)`.
- Este documento actúa como el contexto persistente entre sesiones de trabajo independientes.

## 1.3. Criterio de Dudas y Ambigüedades
- **Regla:** Ante cualquier duda sobre diseño, semántica SEO, reestructuración multirruta o lógica de internacionalización/animaciones, el agente **NUNCA asumirá soluciones unilaterales**.
- **Acción:** Planteará alternativas directas argumentando pros y contras a nivel de UX, estética, rastreo de motores de búsqueda y rendimiento.

## 1.4. Protocolo de Uso Sistemático de Skills
- **Regla Estricta:** Siempre que exista una skill aplicable al flujo de trabajo (`ui-component-builder`, `seo-auditor`, `i18n-route-migrator`, `performance-checker`, `git-commits`), el agente **DEBE utilizarla prioritariamente y ceñirse a sus convenciones**.
- **Corrección y Mantenimiento de Skills:** Si el agente detecta un fallo, desactualización o inconsistencia en una skill, **DEBE corregirla inmediatamente y actualizar este archivo `AGENTS.md`**.
- **Sincronización:** Tras modificar este archivo o crear/modificar una skill, el agente debe invocar `find-skills` para sincronizar el registro de dependencias y capacidades disponibles.

## 1.5. Catálogo y Convenciones de Skills del Portfolio
- **`ui-component-builder`:** Creación y refactorización de elementos interactivos y componentes visuales garantizando compatibilidad dual (Light/Dark mode), animaciones fluidas (`transform`/`opacity`) y responsive-first con Tailwind CSS.
- **`seo-auditor`:** Verificación periódica de etiquetas semánticas, canonicals, Open Graph, Twitter Cards, JSON-LD Schema (`Person` / `WebSite`) y atributos de indexabilidad.
- **`i18n-route-migrator`:** Gestión del soporte dual (ES/EN) y desacoplamiento progresivo de `data-i18n` hacia rutas estáticas dedicadas (`/es` y `/en`) con etiquetas `hreflang` cruzadas.
- **`git-commits`:** Estandarización de commits semánticos bajo formato *Conventional Commits*.

---

# 2. Filosofía de Diseño UI/UX y Principios Visuales

- **Estética Minimalista y Moderna:** Predominio de paleta neutra oscura (`slate-950` / `slate-900`) combinada con acentos funcionales en verde esmeralda (`emerald-500` / `emerald-400`).
- **Consistencia Dual (Dark & Light Mode):**
  - Cada componente nuevo debe verificarse tanto para `.dark` como para el modo claro (`:root:not(.dark)`).
  - Preservar el esquema de colores CSS basado en variables RGB y clases utilitarias de Tailwind.
- **Microinteracciones y Animaciones Fluidas:**
  - Las transiciones deben usar curvas de aceleración naturales (`cubic-bezier`, `ease-out`) y duraciones contenidas (entre `200ms` y `500ms`).
  - Uso obligado de `will-change`, `transform` y `opacity` para evitar *layout thrashing* o *jank* en scroll y animaciones.
- **Responsive-First:** Garantizar visualización limpia desde resoluciones móviles estrechas (`360px`) hasta pantallas ultra-wide, cuidando márgenes, paddings adaptativos (`px-4 sm:px-6`) y alturas dinámicas.
- **Jerarquía Tipográfica & Espaciado:** Respetar la tipografía 'Inter', asegurando contraste WCAG AA/AAA y legibilidad en badges, etiquetas y bloques de texto.

---

# 3. SEO Técnico, Indexabilidad y Posicionamiento

- **Auditoría y Corrección Proactiva de SEO:**
  - El agente debe revisar periódicamente y proponer optimizaciones sobre: metadatos clave (`title`, `description`, `canonical`), encabezados semánticos jerárquicos (`h1`, `h2`, `h3` sin saltos de nivel) y textos alternativos (`alt`) descriptivos en imágenes.
  - Comprobar que los atributos `robots`, `sitemap.xml` y `robots.txt` estén configurados para maximizar la indexación de páginas relevantes.
- **Datos Estructurados (Schema.org / JSON-LD):**
  - Mantener actualizada la entidad `Person` (y `ProfilePage` / `WebSite`) vinculando nombre completo, alias (`AAHG`), URL canónica, redes sociales (`sameAs`) y especialización profesional.
- **Open Graph & Twitter Cards:**
  - Garantizar que las etiquetas `og:*` y `twitter:*` apunten a rutas absolutas válidas de imagen, título y descripción acordes al idioma de la página.
- **Core Web Vitals & Performance:**
  - Optimización de imágenes (formato WebP, dimensiones fijadas `width`/`height` para evitar CLS, `loading="eager"` / `fetchpriority="high"` solo en hero/LCP).
  - Carga diferida o asíncrona de recursos externos que no bloqueen el renderizado inicial.

---

# 4. Estrategia de Internacionalización (i18n) y Transición a Rutas

- **Soporte Dual Permanente (ES / EN):** Todo nuevo contenido, botón, badge, proyecto o texto debe redactarse y validarse siempre en **Español (España)** y en **Inglés**.
- **Desacoplamiento Progresivo de `data-i18n`:**
  - Actualmente, el portfolio opera con reemplazo en el DOM vía `data-i18n` y diccionarios JS.
  - Para la siguiente versión basada en rutas independientes (`/es` y `/en`), el contenido textual debe quedar renderizado estáticamente en el HTML de cada ruta para garantizar que los rastreadores indexen ambos idiomas por separado.
  - En la estructura multirruta, el agente deberá implementar:
    1. `<html lang="es">` y `<html lang="en">` fijos por documento.
    2. Etiquetas `<link rel="alternate" hreflang="es" href="..." />` y `<link rel="alternate" hreflang="en" href="..." />` cruzadas.
    3. Metadatos SEO (`<title>`, `<meta description>`, OG) traducidos de forma estática en cada documento.
- **Diccionarios Centralizados:** Las estructuras de datos complejas (Stack tecnológico, Ticker de profesiones, plantillas de Gmail) deben mantenerse organizadas por clave idiomática (`es`/`en`) para reutilización limpia.

---

# 5. Estándares Técnicos Frontend

- **Stack Tecnológico Base:**
  - HTML5 Semántico + SEO avanzado.
  - Tailwind CSS (vía CDN / Configuración extendida con variables CSS dinámicas).
  - Vanilla JavaScript (modular, ligero, sin dependencias pesadas innecesarias).
  - Librerías externas controladas: Lucide Icons, DevIcons, Typed.js.
- **Estructura Modular del JavaScript:**
  - **Stack Tecnológico:** Las categorías, tecnologías e iconos deben alimentarse desde sus respectivas estructuras de datos sin duplicar marcado innecesario en el DOM.
  - **Typewriter & Tickers:** Controlar el espacio reservado (elementos *phantom*) para evitar saltos de línea y *layout shifts* durante la escritura.
  - **Scroll Suave & Flechas:** Gestión mediante `requestAnimationFrame` o Intersection Observer para evitar bloqueos del hilo principal.

---

# 6. Protocolo de Despliegue y Control de Calidad

- **Verificaciones Previas a la Publicación:**
  1. No dejar marcadores de conflicto de Git en el código (`<<<<<<< HEAD`, `=======`, `>>>>>>>`).
  2. Comprobar que los selectores y enlaces de navegación interna apunten a los IDs correctos (`#inicio`, `#trayectoria`, `#stack`, `#proyectos`, `#contacto`).
  3. Validar que la redirección dinámica a Gmail y el esquema `mailto:` sigan funcionando correctamente tanto en escritorio como en dispositivos móviles.
  4. Revisar que los SVGs e iconos externos mantengan `viewBox` y clases de color adaptables.
  5. Validar que las URLs canónicas y metadatos SEO concuerden con el dominio de producción (`https://antonioabadpro.netlify.app/`).
- **Despliegue a Producción (Netlify):** NUNCA dar por cerrada una integración de producción sin haber validado previamente la integridad del marcado, la ausencia de errores en consola y la salud del SEO.

---

# 7. Memoria Activa & Registro de Decisiones

| Fecha (DD/MM/YYYY) | Decisión / Regla Registrada | Contexto / Motivo |
| :--- | :--- | :--- |
| **06/09/2026** | Creación inicial del archivo AGENTS.md | Estandarización de reglas técnicas, diseño UI/UX sénior y protocolos de memoria. |
| **06/09/2026** | Incorporación de estándares SEO y estrategia multirruta (`/es`, `/en`) | Garantizar indexabilidad completa por idioma y preparar la migración desde `data-i18n`. |
| **06/09/2026** | Integración del protocolo y catálogo de Skills | Asegurar ejecución sistemática de skills y sincronización con `find-skills`. |