# Portfolio — Alejandra Rodríguez

Sitio web personal construido con React, TypeScript y Vite.

## Estructura del proyecto

```
Porfolio-Alejandra/
├── public/              # (opcional) favicon, robots.txt, imágenes estáticas sin procesar
├── src/
│   ├── main.tsx         # Punto de entrada: monta React en #root
│   ├── App.tsx          # Componente raíz de la aplicación
│   ├── components/      # Componentes reutilizables (UI por piezas)
│   └── data/            # Datos estáticos, textos del portfolio, constantes de contenido
├── index.html           # HTML base; referencia /src/main.tsx
├── vite.config.ts
├── tsconfig.json
└── package.json
```

Convenciones habituales en proyectos React + Vite (puedes ir añadiendo carpetas según crezca el código):

| Carpeta | Uso |
|--------|-----|
| `src/hooks/` | Hooks personalizados (`useScroll`, `useMediaQuery`, …) |
| `src/lib/` o `src/utils/` | Funciones puras, formateo, validaciones |
| `src/types/` | Tipos e interfaces compartidos |
| `src/assets/` | Imágenes, fuentes importadas desde el bundle |

El alias `@/` apunta a `src/` (por ejemplo: `import { x } from '@/data/constants'`).

## Requisitos

- [Node.js](https://nodejs.org/) (versión LTS recomendada)

## Desarrollo local

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Arrancar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   La aplicación queda disponible en `http://localhost:3000`.

## Otros comandos

- `npm run build` — genera la versión de producción
- `npm run preview` — previsualiza el build localmente
