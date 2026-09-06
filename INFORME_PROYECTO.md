# INFORME DE DESARROLLO - JC STUDIOS
## Página Web Profesional con Panel de Administración

---

## 1. RESUMEN EJECUTIVO

Se migró la página web estática (HTML/CSS/JS) de JC Studios a un framework moderno **Vue 3 + Vite**, con panel de administración, modo oscuro/claro, animaciones profesionales y sistema de galería dinámico por carpetas.

---

## 2. TECNOLOGÍAS UTILIZADAS

| Tecnología | Versión | Propósito |
|---|---|---|
| Vue 3 | 3.x | Framework principal |
| Vite | 6.x | Bundler y desarrollo |
| Pinia | 2.x | Estado global (stores) |
| Vue Router | 4.x | Navegación SPA |
| Bootstrap 5 | 5.x | Grid y utilidades |
| Axios | 1.x | Cliente HTTP (listo para backend) |
| Font Awesome | 6.x | Iconos |
| Google Fonts | - | Tipografía Poppins |

---

## 3. CAMBIOS REALIZADOS (CRONOLOGÍA)

### 3.1 Estructura Base
- Proyecto Vue 3 creado en la raíz del directorio
- Router configurado: `/` (cliente), `/admin/login`, `/admin` (dashboard), `/admin/media`, `/admin/services`
- Guards de autenticación en rutas admin
- Layouts: `ClienteLayout` (Navbar + Footer) y `AdminLayout` (Sidebar + Header)

### 3.2 Componentes del Cliente
- **AppNavbar**: Navbar responsive con links, toggle de tema, hamburger menu
- **HeroCarousel**: Carrusel principal con slideshow de imágenes
- **AboutSection**: 3 cards (Quiénes Somos, Visión, Misión) con animaciones
- **ServiceTabs**: Cards de servicios con tabs Eventos/Sesiones
- **ServiceModal**: Modal con galería de fotos → planes/paquetes con lightbox
- **VideoGallery**: Grid de videos de YouTube con modal de reproducción
- **ContactSection**: Cards de contacto + redes sociales
- **AppFooter**: Pie de página con año automático

### 3.3 Panel de Administración
- **LoginView**: Formulario de login con credenciales hardcoded
- **DashboardView**: Estadísticas de fotos, videos, servicios
- **MediaView**: CRUD de fotos, videos y hero slides
- **ServicesView**: Vista de servicios (read-only, listo para CRUD)
- **AdminSidebar**: Menú lateral de navegación
- **AdminHeader**: Encabezado con fecha y dropdown de usuario

### 3.4 Stores (Pinia)
- `auth.js`: Autenticación con localStorage
- `hero.js`: Slides del carrusel con detección de imágenes de carpetas
- `portfolio.js`: Imágenes del portafolio
- `services.js`: Servicios y paquetes con categoría activa
- `videos.js`: Videos de YouTube
- `theme.js`: Modo oscuro/claro con persistencia en localStorage

### 3.5 Modo Dark/Light
- Variables CSS para ambos temas (`data-theme="dark/light"`)
- Toggle en navbar (luna/sol) y admin header
- Persistencia en `localStorage`
- Detección automática de preferencia del sistema
- Transiciones suaves en todos los elementos
- Colores de texto optimizados para ambos modos

### 3.6 Liquid Glass (Efecto Cristal)
- Navbar: `backdrop-filter: blur(20px) saturate(1.8)` con gradiente semi-transparente
- Modales (servicios, video, portfolio): Glass con blur y bordes translúcidos
- Lightbox: Glass oscuro con blur(30px)
- Dropdowns admin: Glass en ambos modos
- Botones de cerrar flotantes con glass effect

### 3.7 Animaciones
- **Scroll Reveal**: Sistema con IntersectionObserver
  - `.reveal`: Desliza desde abajo
  - `.reveal-left/right`: Desde lados
  - `.reveal-scale`: Escala
  - Delays escalonados (1-5)
- **Hover en cards**: `translateY(-10px)` con sombra rojiza
- **Overlay de servicios**: Nombre + flecha con animación `arrowBounce`
- **About cards**: Iconos que rotan y escalan en hover
- **Botones**: `translateY(-2px)` con sombra en hover

### 3.8 Sistema de Galería por Carpetas
- Estructura: `public/img/gallery/eventos/{servicio}/` y `sesiones/{servicio}/`
- Detección automática con `import.meta.glob` de Vite
- Imágenes ordenadas alfabéticamente
- Fallback a imágenes por defecto si la carpeta está vacía
- Carpeta `hero/` para portadas del carrusel

### 3.9 Responsive Design
- Breakpoints: 991px (tablet), 767px (mobile), 480px (small mobile)
- `100dvh` para altura de pantalla en iOS
- Navbar collapse con glass effect en mobile
- Grid adaptativo: 3 → 2 → 1 columnas
- Touch-friendly: `hover: none` para dispositivos táctiles

### 3.10 Servicios
- 12 servicios migrados con datos completos
- Categorías: Eventos (6) y Sesiones (5)
- Cada servicio tiene: galería, paquetes (básico/estándar/premium), precios
- Modal con 2 pasos: Galería → Planes/Cotización

### 3.11 Navbar
- Texto con contraste optimizado
- Logo con borde glass y efecto hover
- Scroll behavior suave
- Colores más opacos en light mode

---

## 4. ARCHIVOS CREADOS/MODIFICADOS

### Nuevos
- `src/stores/theme.js`
- `src/composables/useScrollReveal.js`
- `src/services/galleryLoader.js`
- `public/img/gallery/` (estructura de carpetas)

### Principales modificados
- `src/assets/styles/main.css` (~2100 líneas)
- `src/services/serviceData.js`
- `src/views/cliente/HomeView.vue`
- `src/components/services/ServiceTabs.vue`
- `src/components/services/ServiceModal.vue`
- `src/components/about/AboutSection.vue`
- `src/components/contact/ContactSection.vue`
- `src/components/videos/VideoGallery.vue`
- `src/components/common/AppNavbar.vue`
- `src/components/common/AppFooter.vue`
- `src/stores/hero.js`
- `src/views/admin/*.vue` (todos los admin views)

---

## 5. PRESUPUESTO ESTIMADO (Mercado Peruano 2025/2026)

### Desarrollo Frontend (lo realizado)

| Concepto | Horas Est. | Costo S/. | Costo USD |
|---|---|---|---|
| Maquetación HTML/CSS responsive | 12h | S/. 600 | $160 |
| Desarrollo Vue 3 + Componentes | 25h | S/. 1,250 | $335 |
| Panel de administración | 15h | S/. 750 | $200 |
| Integración de datos y stores | 8h | S/. 400 | $107 |
| Modo dark/light + Liquid Glass | 10h | S/. 500 | $133 |
| Animaciones (scroll reveal + hover) | 6h | S/. 300 | $80 |
| Sistema de galería por carpetas | 5h | S/. 250 | $67 |
| Responsive (mobile/tablet) | 8h | S/. 400 | $107 |
| Testing y corrección de bugs | 5h | S/. 250 | $67 |
| **SUBTOTAL FRONTEND** | **94h** | **S/. 4,700** | **$1,256** |

### Servicios Adicionales (recomendados)

| Concepto | Costo S/. | Costo USD |
|---|---|---|
| Backend API (Node.js/Express) | S/. 2,000 | $533 |
| Base de datos (MongoDB/PostgreSQL) | S/. 800 | $213 |
| Autenticación JWT completa | S/. 500 | $133 |
| Deploy + Dominio + SSL (1 año) | S/. 400 | $107 |
| CRUD completo de servicios (admin) | S/. 1,200 | $320 |
| Subida de imágenes desde admin | S/. 800 | $213 |
| **SUBTOTAL ADICIONAL** | **S/. 5,700** | **$1,520** |

### TOTAL ESTIMADO

| Concepto | Costo S/. | Costo USD |
|---|---|---|
| **Proyecto Completo (Frontend)** | **S/. 4,700** | **$1,256** |
| **Proyecto Completo (Full Stack)** | **S/. 10,400** | **$2,776** |

### Notas de Precios
- Precios basados en tarifas promedio de freelance en Lima, Perú (2025-2026)
- Freelance junior: S/. 30-40/hora
- Freelance mid-level: S/. 45-60/hora
- Freelance senior: S/. 70-100/hora
- Agencia digital: S/. 80-150/hora
- El costo puede variar según complejidad adicional, plazos y soporte post-entrega

---

## 6. ESTADO ACTUAL

- ✅ Frontend completo y funcional
- ✅ Modo dark/light funcional
- ✅ Responsive optimizado
- ✅ Animaciones profesionales
- ✅ Sistema de galería por carpetas
- ✅ Panel de administración básico
- ⏳ Backend pendiente (para datos dinámicos reales)
- ⏳ CRUD de servicios en admin pendiente
- ⏳ Subida de imágenes desde admin pendiente

---

*Informe generado el 5 de septiembre de 2026*
*JC Studios - Fotografía Profesional*
