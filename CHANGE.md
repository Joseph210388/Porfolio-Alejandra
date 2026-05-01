# Registro de cambios

## 2026-04-29 – Rediseño HeroSection: dos columnas

### HeroSection.tsx — rediseño completo
- **Layout**: `grid-cols-1 md:grid-cols-2`. Imagen a la derecha, texto a la izquierda en escritorio; imagen arriba, texto abajo en móvil.
- **Columna izquierda**: nombre (Playfair bold) → "Educadora Infantil" (Dancing Script) → texto descriptivo (Montserrat light) → 3 botones.
- **Botones**: "Descargar CV" (pill blanco primario) + fila Teléfono / Correo (pills transparentes con borde).
- **Columna derecha**: imagen circular grande (`md:w-80 md:h-80`) con anillo estático y anillo giratorio (`animate-spin-slow`), detalles ✨.
- **Responsive**: imagen `w-44→w-56→w-80`; texto con `clamp` y breakpoints; botones de contacto truncan el texto si es necesario.
- Iconos SVG inlineados en el componente para control total de tamaño (sin `mr-3` forzado).
- Eliminados imports no usados: `DownloadIcon`, `PhoneIcon`, `MailIcon`, `LocationIcon`.

---

## 2026-04-29 – Carrusel interactivo en ExperienceSection

### Archivos creados
- **`src/components/ui/ExperienceCarousel.tsx`** — Nuevo componente que implementa un carrusel visual interactivo:
  - Soporte para arrastrar (drag) con gestos táctiles
  - Autoplay cada 5 segundos (pausado al pasar el mouse)
  - Indicadores de posición (dots) interactivos
  - Botones de navegación anterior/siguiente (chevron)
  - Animaciones suaves con Framer Motion
  - Información de cada experiencia (fecha, título, subtítulo) mostrada al pie de la imagen
  - Respuesta adaptativa para desktop y mobile

### Archivos modificados
- **`src/data/experience.ts`**
  - Importado `experienceImages` del archivo images.ts
  - Agregada exportación `experienceCarouselData` que mapea datos de experiencia con imágenes

- **`src/components/ui/index.ts`**
  - Agregada exportación de `ExperienceCarousel`

- **`src/components/sections/ExperienceSection.tsx`**
  - Importado `ExperienceCarousel` y `experienceCarouselData`
  - Agregada nueva sección visual con carrusel de experiencias debajo del timeline
  - Sección animada con `motion.div` usando `itemVariants`

### Características del carrusel
- **Navegación**: Arrastrar, botones chevron, indicadores interactivos
- **Autoplay**: 5 segundos de intervalo, pausado al hover
- **Diseño**: Tarjetas redondeadas con sombra, gradiente oscuro al pie
- **Responsive**: Escalas adaptativas para todas las pantallas
- **Estilo**: Tailwind CSS con soporte dark mode

## 2026-04-29 – Responsive de ExperienceSection y HeroSection

### ExperienceSection.tsx
- Padding del `<section>` aumentado a `pt-20 pb-20` (80 px) en móvil/tablet para que el contenido no quede detrás de los botones de navegación; `md:py-12` en escritorio.
- Añadido `justify-center` al div interior (z-[1]) para centrar verticalmente el bloque de contenido en la pantalla.
- Gap de la cuadrícula: `gap-16` → `gap-8 md:gap-10`.
- Altura máxima de la timeline: `max-h-[52dvh]` → `max-h-[calc(100dvh-16rem)]` en móvil y `sm:max-h-[calc(100dvh-18rem)]` en tablet, para adaptarse a cualquier altura de pantalla.

### HeroSection.tsx
- Layout tablet (sm): añadido `sm:grid-cols-2`. La foto ocupa las 2 filas de la columna izquierda (`sm:row-span-2`) y el nombre + contacto se apilan en la columna derecha.
- Layout móvil: la foto pasa a ser `order-1` (primera visualmente), el nombre `order-2` y el contacto `order-3`.
- Layout escritorio (md): `md:order-none` en foto y nombre para respetar el orden DOM original (nombre | foto | contacto).
- Contacto usa `sm:col-start-2 md:col-auto` para colocarse en la columna derecha en tablet y volver al flujo normal en escritorio.
- Padding del `<section>`: `pt-4 pb-20` (móvil), `sm:pt-6 sm:pb-20` (tablet), `md:py-12` (escritorio).
- Tamaños de texto y foto ligeramente reducidos en móvil para mejor encaje en pantallas pequeñas.

## 2026-04-29 – Rediseño ContactSection con tarjetas

### Archivos modificados
- **`src/data/contact.ts`** — Añadido campo `linkedin` (URL del perfil; actualizar con la URL real).
- **`src/components/icons/LinkedInIcon.tsx`** — Nuevo icono LinkedIn (h-8 w-8, fill currentColor).
- **`src/components/icons/index.ts`** — Exportado `LinkedInIcon`.
- **`src/components/sections/ContactSection.tsx`** — Rediseño completo:
  - Eliminado el formulario de contacto.
  - Añadida frase de inspiración Waldorf centrada arriba de las tarjetas.
  - 3 tarjetas en fila (columna en móvil, 3 columnas en sm+): Teléfono, Email, LinkedIn.
  - Cada tarjeta: icono (h-8 w-8) + título en mayúsculas + descripción + dato en `text-orange-300`.
  - Animación stagger heredada del `sectionVariants` via `containerVariants`.
  - Hover: `scale(1.04)`, fondo y borde más visibles, icono/texto naranja más claros.

---

## 2026-04-30 – Corrección: blobs visibles en todas las secciones y figuras completas

### Archivos modificados

- **`index.html`**
  - `.art-blob`: cambiado de `position: absolute` a `position: fixed`. Con `absolute`, los blobs se desplazaban fuera del viewport al hacer scroll; con `fixed` permanecen anclados al viewport en todas las secciones.

- **`src/components/SectionArtBackdrop.tsx`**
  - Wrapper del backdrop: eliminado el condicional `overflow-hidden` / `overflow-visible`; ahora siempre usa `overflow-visible` para no cortar las figuras decorativas.
  - Corregidas todas las posiciones negativas que hacían que las figuras se vieran cortadas:
    - `home`: `-right-[18%]` → `right-0`, `-left-[12%]` → `left-0`
    - `about`: `-left-[20%]` → `left-0`
    - `experience`: `-left-[15%]` → `left-0`
    - `contact`: `-top-[8%]` → `top-0`, `-right-[12%]` → `right-0`

---

## 2026-04-30 – Fondo artístico animado con manchas de color (blobs)

### Archivos modificados

- **`index.html`**
  - Eliminadas las clases `art-blob-drift` y `art-blob-drift-slow` (estaban sin usar).
  - Añadidos 3 nuevos keyframes de movimiento orgánico: `blob-drift-a`, `blob-drift-b`, `blob-drift-c`.
  - Añadidas 5 clases CSS: `.art-blob` (base), `.art-blob-a` (melocotón/naranja, esquina superior izquierda), `.art-blob-b` (menta/verde, derecha), `.art-blob-c` (amarillo cálido, inferior), `.art-blob-d` (lavanda/violeta, centro).
  - Cada blob usa `filter: blur(65-90px)`, opacidad ~30-45%, y animación de 22-34 s para simular un efecto acuarela suave.

- **`src/App.tsx`**
  - Añadido `relative` al `className` del `motion.div` principal (necesario para que los blobs con `position: absolute` se anclen al contenedor).
  - Añadido bloque `<div aria-hidden="true">` con 4 divs `.art-blob` (`art-blob-a`, `b`, `c`, `d`) como primer hijo del contenedor, antes de la navegación y las secciones.

---

## 2026-04-29 – Navegación por botones sin scroll de usuario

### Archivos modificados

- **`index.html`**
  - Añadido `overflow: hidden` a `html` y `body` para bloquear el scroll del documento.

- **`src/App.tsx`**
  - Eliminado el estado `showScrollButton` y el callback `scrollToTop` (ya no necesarios).
  - Eliminado el componente `ScrollToTopButton` del árbol de renderizado y de las importaciones.
  - Cambiada la clase del contenedor principal: `overflow-y-auto overscroll-y-contain no-scrollbar [-webkit-overflow-scrolling:touch]` → `overflow-hidden scroll-smooth`.
  - Reemplazado `scrollIntoView` por `container.scrollTo({ top, behavior: 'smooth' })` calculando el offset con `getBoundingClientRect`, compatible con `overflow: hidden`.

- **`src/components/ui/SectionNavigation.tsx`**
  - Botón "subir" (chevron up): reposicionado a `fixed top` + `left-1/2 -translate-x-1/2` (centrado horizontalmente, pegado a la parte superior).
  - Botón "bajar" (chevron down): reposicionado a `fixed bottom` + `left-1/2 -translate-x-1/2` (centrado horizontalmente, pegado a la parte inferior).
  - Cada botón envuelto en su propio `AnimatePresence` + `motion.div` para animación de entrada/salida independiente.
  - Visibilidad controlada por `canNavigateUp` / `canNavigateDown` (sin cambios en la lógica).
