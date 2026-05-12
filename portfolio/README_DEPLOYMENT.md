# Portfolio - Ivo Vicencio

Una portafolio profesional construida con **Angular 21** con diseño futurista estilo "Solo Leveling" y totalmente responsivo para todos los dispositivos.

## 🚀 Características

- ✨ Diseño moderno y futurista
- 📱 100% responsivo (móvil, tablet, desktop)
- 📧 Formulario de contacto funcional con **EmailJS**
- 🎨 Animaciones suaves y efectos glassmorphism
- ⚡ Optimizado para producción
- 🔗 Listo para GitHub Pages y Netlify

## 🛠️ Tecnologías

- **Angular 21** - Framework principal
- **Bootstrap 5** - Grid y componentes
- **TypeScript** - Lenguaje tipado
- **EmailJS** - Envío de emails
- **CSS 3** - Estilos personalizados

## 📋 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ivovicencio/portfolio-ivovicencio.git
cd portfolio-ivovicencio/portfolio

# Instalar dependencias
npm install
```

## 💻 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start
# o
ng serve
```

Abre [http://localhost:4200](http://localhost:4200) en tu navegador.

## 🏗️ Build

```bash
# Build de producción
npm run build:prod
```

El build se genera en `dist/portfolio/`

## 📧 Configurar EmailJS

Para que el formulario de contacto funcione:

1. Ve a [emailjs.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Conecta tu proveedor de email (Gmail, Outlook, etc.)
4. Obtén tu **PUBLIC KEY**
5. Actualiza en `src/app/components/contact-me/contact-me.ts`:
   - Línea 33: Reemplaza `'K8IJUJ_xvgvLcvQM-'` con tu PUBLIC KEY
   - Línea 60: Reemplaza `'service_q5n3p3b'` con tu Service ID
   - Línea 60: Reemplaza `'template_p9rk97f'` con tu Template ID
   - Línea 54: Actualiza el email destino si es diferente

## 🚀 Deployment

### GitHub Pages (Recomendado)

**Opción 1: Con GitHub Actions (Automático)**

1. Haz push a tu repositorio:
```bash
git add .
git commit -m "Actualizar portfolio"
git push origin main
```

2. El workflow automático deployará en GitHub Pages

3. Accede a tu portfolio en: `https://tu-usuario.github.io/portfolio-ivovicencio/`

**Opción 2: Manual**

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Desplegar
npm run deploy:github
```

**Configuración necesaria:**
- Ve a tu repositorio > Settings > Pages
- Source: Deploy from a branch
- Branch: `gh-pages` / `root`

### Netlify

**Opción 1: Mediante Git (Recomendado)**

1. Ve a [netlify.com](https://netlify.com) e inicia sesión
2. New site from Git
3. Selecciona tu repositorio
4. Build command: `npm run build:prod`
5. Publish directory: `dist/portfolio`
6. Deploy

**Opción 2: Drag & Drop**

```bash
npm run build:prod
```

Arrastra la carpeta `dist/portfolio` a Netlify.

## 📱 Responsividad

El proyecto está optimizado para:
- 📱 Celulares pequeños (< 480px)
- 📱 Celulares grandes (480px - 767px)
- 📊 Tablets (768px - 991px)
- 🖥️ Desktop (1024px+)

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── contact-me/       # Formulario de contacto
│   │   │   ├── layouts/
│   │   │   │   ├── home/         # Sección hero
│   │   │   │   ├── navbar/       # Navegación
│   │   │   │   └── footer/       # Pie de página
│   │   │   └── projects/         # Galería de proyectos
│   │   ├── app.ts                # Componente raíz
│   │   └── app.routes.ts         # Rutas
│   ├── styles.css                # Estilos globales
│   └── main.ts                   # Punto de entrada
├── netlify.toml                  # Configuración Netlify
├── angular.json                  # Configuración Angular
├── package.json                  # Dependencias
└── .github/workflows/            # GitHub Actions
```

## 🔧 Scripts Disponibles

```bash
npm start              # Servidor de desarrollo
npm run build          # Build de desarrollo
npm run build:prod     # Build de producción
npm run deploy:github  # Desplegar a GitHub Pages
npm run deploy:netlify # Construcción para Netlify
npm test               # Ejecutar tests
```

## ⚠️ Notas Importantes

- El `baseHref` está configurado para GitHub Pages: `/portfolio-ivovicencio/`
- Para Netlify, el `baseHref` se maneja automáticamente
- El archivo `.nojekyll` en `public/` evita que Jekyll procese el sitio en GitHub Pages
- GitHub Actions automáticamente deploya en cada push a `main` o `master`

## 🐛 Problemas Comunes

**Problema:** Rutas no funcionan en GitHub Pages
- **Solución:** El `baseHref` debe ser `/portfolio-ivovicencio/` (ya está configurado)

**Problema:** Los estilos se ven rotos en GitHub Pages
- **Solución:** Limpia el caché y haz un hard refresh (Ctrl+Shift+R)

**Problema:** EmailJS no envía correos
- **Solución:** Verifica que el SERVICE ID, TEMPLATE ID y PUBLIC KEY sean correctos

## 📄 Licencia

Este proyecto es personal. Libre de usar como referencia.

## 👤 Autor

**Ivo Vicencio**
- GitHub: [@ivovicencio](https://github.com/ivovicencio)
- LinkedIn: [Ivo Vicencio](https://linkedin.com/in/ivo-vicencio-rosas-7aaa44211/)
- Instagram: [@ivothaiel](https://instagram.com/ivothaiel)

---

**¡Hecho con ❤️ en Angular!**
