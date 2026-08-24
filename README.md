# Digital Portfolio - Next.js 16 Showcase

Un proyecto portfolio moderno que demuestra todas las características y mejoras de **Next.js 16** con estética contemporánea.

## 🚀 Características Principales

### Next.js 16 Features
- ✅ **Turbopack Estable**: Compilador rápido como el bundler por defecto
- ✅ **React Compiler Stable**: Memoización automática de componentes
- ✅ **Cache Components**: Directiva `use cache` para caching granular
- ✅ **File System Caching**: Caché en disco para development más rápido
- ✅ **React 19.2**: View Transitions, useEffectEvent, Activity component
- ✅ **Proxy.ts**: Remplazo moderno para middleware
- ✅ **DevTools MCP**: Debugging mejorado con AI integration
- ✅ **Enhanced Routing**: Layout deduplication e incremental prefetching

### Tecnologías
- **React 19.2** con Server Components
- **Framer Motion** para animaciones fluidas
- **Tailwind CSS 3.4** con sistema de diseño custom
- **TypeScript 5.3** con strict mode
- **Lucide React** para iconos
- **Modern CSS**: Glassmorphism, gradientes, animaciones

### Componentes
- 🎨 Hero Section con animaciones parallax
- 🖼️ Portfolio Grid con hover effects
- 💼 Skills Section con categorías
- ⭐ Testimonial Section
- 📞 CTA Section con social links
- 📱 Navbar responsivo con mobile menu
- 🔖 Footer con links

## 📦 Instalación

```bash
# Clonar o navegar al proyecto
cd digital-portfolio

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Verificar tipos
npm run type-check

# Linting
npm run lint
```

El proyecto estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
digital-portfolio/
├── app/
│   ├── globals.css          # Estilos globales y variables
│   ├── layout.tsx           # Root layout con Cache Components
│   └── page.tsx             # Página principal
├── components/
│   ├── navbar.tsx           # Navegación
│   ├── hero-section.tsx     # Sección hero
│   ├── portfolio-grid.tsx   # Grid de proyectos
│   ├── skills-section.tsx   # Sección de skills
│   ├── testimonial-section.tsx # Testimonios
│   ├── cta-section.tsx      # Call to action
│   └── footer.tsx           # Footer
├── next.config.ts           # Configuración de Next.js
├── tailwind.config.ts       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias
```

## ⚡ Optimizaciones Implementadas

### Performance
- Turbopack habilitado por defecto (2-5x builds más rápido)
- File System Caching en desarrollo
- React Compiler para auto-memoización
- Image optimization con formatos modernos (AVIF, WebP)
- Lazy loading de componentes con React.lazy
- View Transitions para navegación suave

### Caching
- `use cache` directive en Home
- Cache Components experimental
- Partial Pre-Rendering ready

### SEO & Meta
- Metadatos optimizados
- Open Graph ready
- Canonical URLs
- Mobile responsive

## 🎨 Sistema de Diseño

### Colores
- Primary: `#6366f1` (Indigo)
- Secondary: `#7c3aed` (Purple)
- Accent: `#f59e0b` (Amber)
- Background: Modo claro/oscuro

### Tipografía
- Headlines: Font bold
- Body: Font regular
- Utilidades Tailwind CSS

### Componentes Reutilizables
- Motion buttons con Framer Motion
- Glass effect cards
- Gradient text
- Glow effects

## 🔧 Configuración Personalizable

### Cambiar Tema de Colores
Editar en `app/globals.css`:
```css
:root {
  --primary: 280 100% 55%;
  --secondary: 280 85% 45%;
  --accent: 40 100% 50%;
}
```

### Modificar Contenido
- Proyectos: `components/portfolio-grid.tsx`
- Skills: `components/skills-section.tsx`
- Testimonios: `components/testimonial-section.tsx`

## 📱 Responsiveness

- Diseño mobile-first
- Breakpoints: sm, md, lg
- Navbar colapsable en mobile
- Grid flexible en todos los tamaños

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Otros Hosts
```bash
npm run build
npm start
```

## 📚 Recursos

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Turbopack](https://turbo.build/pack)

## 💡 Consejos

1. **Habilitar React Compiler**: Descomentar en `next.config.ts` para obtener beneficios de rendimiento
2. **File System Caching**: Ya habilitado para desarrollo rápido
3. **Turbopack**: Es el bundler por defecto, no necesita configuración
4. **Type Safety**: Usar `@` para imports limpios

## 📄 Licencia

MIT - Libre para usar y modificar

---

**Made with ❤️ using Next.js 16**
