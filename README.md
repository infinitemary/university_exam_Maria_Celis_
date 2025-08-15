# 🎓 Landing Page Universitaria

Una landing page moderna y responsiva para plataformas universitarias online, desarrollada con HTML, CSS, Bootstrap 4 y JavaScript.

## ✨ Características

- **Diseño Responsivo**: Adaptable a todos los dispositivos
- **Video de Fondo**: Efecto visual impactante con `hero-video.mp4`
- **Formulario de Registro**: Validación en tiempo real con JavaScript
- **Navegación Suave**: Scroll suave entre secciones
- **Animaciones**: Efectos de entrada y hover
- **Bootstrap 4**: Framework CSS robusto y confiable
- **Accesibilidad**: Código semántico y compatible con lectores de pantalla

## 🚀 Instalación

1. **Clona o descarga** el proyecto en tu servidor web
2. **Asegúrate** de que el archivo `hero-video.mp4` esté en la carpeta `Videos/`
3. **Abre** `index.html` en tu navegador

## 📁 Estructura del Proyecto

```
A20/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS personalizados
├── script.js           # Funcionalidades JavaScript
├── Videos/
│   └── hero-video.mp4  # Video de fondo
├── imagenes/           # Carpeta de imágenes
└── README.md           # Este archivo
```

## 🎨 Personalización

### Colores

Los colores están definidos como variables CSS en `styles.css`:

```css
:root {
    --primary-blue: #02557D;      /* Azul principal */
    --accent-orange: #FFB947;     /* Naranja de acento */
    --white: #ffffff;             /* Blanco */
    --light-gray: #f8f9fa;        /* Gris claro */
    --dark-gray: #343a40;         /* Gris oscuro */
}
```

### Tipografías

Cambia la fuente principal en `styles.css`:

```css
body {
    font-family: 'Tu-Fuente', sans-serif;
}
```

### Logo

Para cambiar el logo, modifica el HTML en `index.html`:

```html
<div class="logo-diamond">
    <div class="logo-diamond-inner"></div>
</div>
```

O reemplaza completamente con una imagen:

```html
<img src="ruta/a/tu/logo.png" alt="Logo" class="logo">
```

## 🔧 Funcionalidades JavaScript

### Validación de Formulario

- **Validación en tiempo real** al perder el foco
- **Validación de email** con regex
- **Validación de teléfono** con formato flexible
- **Feedback visual** con colores y mensajes

### Navegación

- **Scroll suave** entre secciones
- **Navbar dinámica** que cambia al hacer scroll
- **Menú responsive** con hamburger en móviles

### Animaciones

- **Entrada de elementos** con Intersection Observer
- **Efectos hover** en botones y enlaces
- **Parallax suave** en el video de fondo

## 📱 Responsive Design

La landing page se adapta automáticamente a:

- **Desktop**: Layout completo con formulario flotante
- **Tablet**: Ajustes de tamaño y espaciado
- **Móvil**: Stack vertical y menú hamburger

### Breakpoints Bootstrap 4

- `lg`: ≥992px (Desktop)
- `md`: ≥768px (Tablet)
- `sm`: ≥576px (Móvil pequeño)
- `<576px`: Móvil extra pequeño

## 🎥 Video de Fondo

### Requisitos

- **Formato**: MP4
- **Ubicación**: `Videos/hero-video.mp4`
- **Duración**: Recomendado 10-30 segundos en loop
- **Tamaño**: Optimizado para web (máximo 10MB)

### Fallback

Si el video no carga, se muestra automáticamente la imagen `imagenes/IMAGEN HERO.jpg`.

## 📝 Formulario de Registro

### Campos

1. **Nombre** (requerido)
2. **Email** (requerido, validación de formato)
3. **Teléfono** (requerido)
4. **Asunto** (requerido)
5. **Mensaje** (requerido, área de texto)

### Validación

- **Tiempo real** al perder el foco
- **Mensajes de error** personalizados
- **Estados visuales** (válido/inválido)
- **Prevención de envío** si hay errores

## 🚀 Optimizaciones

### Performance

- **Lazy loading** para imágenes futuras
- **Intersection Observer** para animaciones
- **Event delegation** para elementos dinámicos
- **Debouncing** en eventos de scroll

### SEO

- **HTML semántico** con etiquetas apropiadas
- **Meta tags** optimizados
- **Alt text** para imágenes
- **Estructura de encabezados** correcta

### Accesibilidad

- **Navegación por teclado** completa
- **ARIA labels** donde sea necesario
- **Contraste de colores** adecuado
- **Texto alternativo** para elementos multimedia

## 🛠️ Personalización Avanzada

### Agregar Nuevas Secciones

1. **HTML**: Añade la estructura en `index.html`
2. **CSS**: Define estilos en `styles.css`
3. **JavaScript**: Agrega funcionalidades en `script.js`

### Cambiar Video de Fondo

```css
.hero-video-background video {
    /* Personalizar propiedades del video */
    object-fit: cover;
    filter: brightness(0.8);
}
```

### Modificar Animaciones

```css
@keyframes tuAnimacion {
    from { /* estado inicial */ }
    to { /* estado final */ }
}
```

## 🔍 Solución de Problemas

### Video No Reproduce

- Verifica que el archivo existe en `Videos/hero-video.mp4`
- Asegúrate de que el formato sea MP4
- Comprueba que el navegador soporte video HTML5

### Formulario No Funciona

- Abre la consola del navegador (F12)
- Verifica que no hay errores JavaScript
- Asegúrate de que todos los campos están completos

### Estilos No Se Aplican

- Verifica que `styles.css` está en la misma carpeta
- Comprueba que la ruta en `index.html` es correcta
- Limpia la caché del navegador

## 📚 Recursos Adicionales

### Bootstrap 4
- [Documentación oficial](https://getbootstrap.com/docs/4.6/)
- [Componentes](https://getbootstrap.com/docs/4.6/components/)
- [Utilidades](https://getbootstrap.com/docs/4.6/utilities/)

### Font Awesome
- [Iconos disponibles](https://fontawesome.com/icons)
- [Implementación](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started)

### CSS Variables
- [Compatibilidad](https://caniuse.com/css-variables)
- [Sintaxis](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y comerciales.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- **Email**: info@email.com
- **Teléfono**: 123 456 789
- **Issues**: Abre un issue en GitHub

---

**Desarrollado con ❤️ para la educación online**
