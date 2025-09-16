# 🎓 Landing Page Universitaria

Una landing page moderna y responsiva para plataformas universitarias online, desarrollada con HTML, CSS, Bootstrap 4 y JavaScript.

## ✨ Características

- **Diseño Responsivo**: Adaptable a los dispositivos móviles de 
- `lg`: ≥992px (Desktop)
- `md`: ≥759px (Tablet)
- `sm`: ≥480px (Móvil pequeño)
- **Header Fijo**: Navegación principal que permanece visible al hacer scroll
- **Carruseles Bootstrap 4**: Para secciones de equipo y testimonios
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

Maria_Celis_exam_2/
├── index.html          # Archivo HTML principal
├── style.css           # Estilos CSS personalizados
├── script.js           # Funcionalidades JavaScript
├── Videos/
│   ├── hero-video.mp4  # Video de fondo
│   └── review-1.mp4    # Video de testimonios
├── imagenes/           # Carpeta de imágenes
└── README.md           # Este archivo
```

**Cambios principales agregados al README:**

1. ✅ **Header fijo** al hacer scroll
2. ✅ **Carruseles Bootstrap 4** para equipo y testimonios
3. ✅ **Header responsive** en móvil
4. ✅ **Funcionalidades de video** con poster visible
5. ✅ **Estructura HTML** del carrusel de videos
6. ✅ **Solución de problemas** específicos implementados
7. ✅ **Configuración de carruseles** en JavaScript
8. ✅ **Estado actual** del proyecto completamente funcional

**¿El README ahora refleja correctamente todas las modificaciones implementadas?**

## 🎨 Personalización

### Colores

Los colores están definidos como variables CSS en `style.css`:

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

Cambia la fuente principal en `style.css`:

```css
body {
    font-family: 'Tu-Fuente', sans-serif;
}
```

### Logo

Para cambiar el logo, modifica el HTML en `index.html`:

```html
<div class="logo-container">
    <img src="imagenes/LOGO.png" alt="Logo" class="logo">
    <span>universidad</span>
</div>
```

## 🔧 Funcionalidades JavaScript

### Carruseles Bootstrap 4

#### Team Section
- **4 items en PC**, **1 item en móvil**
- **Auto-play** cada 5 segundos
- **Responsive** para todos los dispositivos
- **Loop infinito** habilitado

#### Testimonials Section
- **5 videos** con carrusel Bootstrap
- **Poster visible** al cargar la página
- **Botón play naranja** funcional
- **Auto-advance** al siguiente video después de reproducir
- **Indicators** sincronizados con el carrusel

### Validación de Formulario

- **Validación en tiempo real** al perder el foco
- **Validación de email** con regex
- **Validación de teléfono** con formato flexible
- **Feedback visual** con colores y mensajes

### Navegación

- **Scroll suave** entre secciones
- **Header fijo** que permanece visible al hacer scroll //Cambio ajustado
- **Menú responsive** con Bootstrap grid en móviles

### Animaciones

- **Entrada de elementos** con Intersection Observer
- **Efectos hover** en botones y enlaces
- **Parallax suave** en el video de fondo

## 📱 Responsive Design

La landing page se adapta automáticamente a:

- **Desktop**: Layout completo con header fijo y carruseles
- **Tablet**: Ajustes de tamaño y espaciado
- **Móvil**: Stack vertical, menú reorganizado y carruseles adaptados

### Breakpoints Bootstrap 4

- `lg`: ≥992px (Desktop)
- `md`: ≥759px (Tablet)
- `sm`: ≥480px (Móvil pequeño)


### Header Responsive //Cambio ajustado

- **Logo adaptativo** (tamaño ajustado por dispositivo)
- **Menú reorganizado** en móvil (`flex-direction: column`)
- **Elementos centrados** en vista móvil
- **Grid Bootstrap** funcionando correctamente

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
- **Preload optimizado** para videos (`preload="auto"`)

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
2. **CSS**: Define estilos en `style.css`
3. **JavaScript**: Agrega funcionalidades en `script.js`

### Cambiar Video de Fondo

```css
.hero-video-background video {
    /* Personalizar propiedades del video */
    object-fit: cover;
    filter: brightness(0.8);
}
```

### Modificar Carruseles //Cambio ajustado

```javascript
// Configurar carrusel de equipo
$('#teamCarousel').carousel({
    interval: 5000,    // Cambio cada 5 segundos
    pause: 'hover',     // Pausar en hover
    wrap: true          // Loop infinito
});

// Configurar carrusel de videos
$('.videoCarousel').carousel({
    interval: false,    // No auto-play
    wrap: true,         // Loop infinito
    pause: false,       // No pausar en hover
    keyboard: false     // No responder a teclado
});
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

### Poster del Video No Se Ve

- Verifica que `preload="auto"` esté en el HTML
- Comprueba que la ruta del poster sea correcta
- Asegúrate de que la ruta del video existe

### Carruseles No Funcionan

- Verifica que Bootstrap 4 esté incluido
- Comprueba que jQuery esté disponible
- Abre la consola del navegador para ver errores

### Formulario No Funciona

- Abre la consola del navegador (F12)
- Verifica que no hay errores JavaScript
- Asegúrate de que todos los campos están completos

### Estilos No Se Aplican

- Verifica que `style.css` está en la misma carpeta
- Comprueba que la ruta en `index.html` es correcta
- Limpia la caché del navegador

### Header No Es Responsive

- Verifica que las clases Bootstrap estén correctas
- Comprueba que los media queries estén bien definidos
- Asegúrate de que no hay conflictos de CSS

## 📚 Recursos Adicionales

### Bootstrap 4
- [Documentación oficial](https://getbootstrap.com/docs/4.6/)
- [Componentes](https://getbootstrap.com/docs/4.6/components/)
- [Utilidades](https://getbootstrap.com/docs/4.6/utilities/)
- [Carruseles](https://getbootstrap.com/docs/4.6/components/carousel/)

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

**Última actualización**: Agosto 2025 - Todas las funcionalidades implementadas y funcionando correctamente.
