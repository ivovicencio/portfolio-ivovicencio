# 🚀 Guía de Deployment - Portfolio Ivo Vicencio

Tu portafolio está listo para ser deployado en **GitHub Pages** y **Netlify**. Sigue los pasos correspondientes:

---

## 📌 Configuración Completada

✅ `angular.json` - Configurado con baseHref para GitHub Pages
✅ `netlify.toml` - Configuración lista para Netlify
✅ `.github/workflows/deploy.yml` - GitHub Actions automático
✅ `package.json` - Scripts de build y deploy

---

## 🌐 OPCIÓN 1: GitHub Pages (RECOMENDADO)

### Paso 1: Inicializar Git (si no lo has hecho)

```bash
cd portfolio-ivovicencio
git init
git add .
git commit -m "Inicial commit"
```

### Paso 2: Crear repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. **Nombre del repositorio:** `portfolio-ivovicencio` (EXACTO)
3. Selecciona **Public**
4. Click en **Create repository**

### Paso 3: Agregar repositorio remoto

```bash
git branch -M main
git remote add origin https://github.com/tu-usuario/portfolio-ivovicencio.git
git push -u origin main
```

### Paso 4: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: **gh-pages / root**
5. Click en **Save**

### Paso 5: GitHub Actions ejecutará automáticamente

- Cada vez que hagas `git push`, el workflow automático:
  - ✅ Instala dependencias
  - ✅ Compila el proyecto
  - ✅ Deploya a GitHub Pages

**Tu sitio estará en:** `https://tu-usuario.github.io/portfolio-ivovicencio/`

---

## 🚀 OPCIÓN 2: Netlify

### Método A: Automático (Recomendado)

1. Ve a [netlify.com](https://netlify.com)
2. **Add new site → Import an existing project**
3. Conecta tu repositorio de GitHub
4. **Build command:** `npm run build:prod`
5. **Publish directory:** `dist/portfolio`
6. Click en **Deploy**

**Tu sitio estará en:** `https://tu-dominio.netlify.app` (o dominio personalizado)

### Método B: Manual (Drag & Drop)

```bash
# Compilar
npm run build:prod

# Luego arrastra la carpeta 'dist/portfolio' a Netlify
```

---

## ✅ Checklist Final

Antes de deployar, verifica:

- [ ] EmailJS configurado correctamente
  - [ ] PUBLIC KEY actualizado en `contact-me.ts` (línea 33)
  - [ ] SERVICE ID actualizado (línea 60)
  - [ ] TEMPLATE ID actualizado (línea 60)
  - [ ] Email destino correcto (línea 54)

- [ ] Datos personales actualizados
  - [ ] Nombre en navbar y hero
  - [ ] Email de contacto
  - [ ] Links sociales (GitHub, LinkedIn, Instagram)
  - [ ] Proyectos actualizados

- [ ] Build compila correctamente
  ```bash
  npm run build:prod
  ```
  Debería crear la carpeta `dist/portfolio`

- [ ] Git sincronizado (para GitHub Pages)
  ```bash
  git add .
  git commit -m "Actualizar portfolio"
  git push
  ```

---

## 🔄 Actualizar el Sitio Después

### GitHub Pages
```bash
# Solo hacer push a main
git add .
git commit -m "Actualizar contenido"
git push
# ¡GitHub Actions hace el resto!
```

### Netlify
```bash
# Si es automático (Git):
git add .
git commit -m "Actualizar contenido"
git push
# Netlify se actualiza automáticamente

# Si es manual:
npm run build:prod
# Arrastra 'dist/portfolio' a Netlify
```

---

## 🐛 Solucionar Problemas

### Las rutas no funcionan en GitHub Pages
**Problema:** 404 al navegar
**Solución:** El baseHref `/portfolio-ivovicencio/` debe coincidir con el nombre del repo

### Los estilos se ven rotos
**Problema:** CSS no se carga
**Solución:** 
1. Haz un hard refresh: `Ctrl + Shift + R` (Windows/Linux) o `Cmd + Shift + R` (Mac)
2. Limpia caché: Settings → Clear browsing data

### EmailJS no funciona
**Problema:** El formulario no envía correos
**Solución:**
1. Verifica que `contact-me.ts` tenga IDs correctos
2. Abre la consola del navegador (F12) y verifica errores
3. Prueba en [emailjs.com](https://emailjs.com/docs/dashboard/test) directamente

### El build falla
**Problema:** `npm run build:prod` muestra errores
**Solución:**
```bash
# Limpia dependencias
rm -rf node_modules package-lock.json

# Reinstala
npm install

# Intenta de nuevo
npm run build:prod
```

---

## 📊 Comandos Útiles

```bash
# Desarrollo local
npm start

# Build producción
npm run build:prod

# Desplegar a GitHub Pages (manual)
npm run deploy:github

# Ver la build compilada
cd dist/portfolio
python -m http.server 8000
# Abre http://localhost:8000
```

---

## 🎯 Próximos Pasos

Después de deployar:

1. **Compartir el link**
   - LinkedIn: Añade a tu perfil
   - GitHub: Añade al README del repo
   - CV/Currículum: Incluye el link

2. **Optimizar SEO**
   - Actualiza `index.html` con meta tags
   - Añade favicon personalizado

3. **Monitorizar**
   - Google Analytics (opcional)
   - Uptime monitoring (opcional)

---

## 📞 Soporte

Si tienes problemas:

1. Verifica la consola del navegador (F12)
2. Lee los logs en GitHub Actions o Netlify
3. Comprueba que todos los archivos estén commiteados

---

**¡Tu portafolio está listo para el mundo! 🌍**

Cualquier duda, revisa la documentación oficial:
- [Angular Docs](https://angular.io/docs)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com/)
