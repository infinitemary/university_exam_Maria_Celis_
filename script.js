
// Navbar scroll effect
       
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form validation
        const form = document.getElementById('registration-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic validation
                const name = form.querySelector('input[type="text"]').value;
                const email = form.querySelector('input[type="email"]').value;
                const phone = form.querySelector('input[type="tel"]').value;
                const subject = form.querySelector('select').value;
                const message = form.querySelector('textarea').value;
                
                if (!name || !email || !phone || !subject || !message) {
                    alert('Please fill in all required fields');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address');
                    return;
                }
                
                // Phone validation
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
                    alert('Please enter a valid phone number');
                    return;
                }
                
                // Success message
                alert('Thank you! Your message has been sent successfully.');
                form.reset();
            });
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.course-card, .career-card, .team-card, .feature-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Button hover effects
        document.querySelectorAll('.btn-hero, .btn-submit, .btn-read-more, .btn-explore').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Mobile navigation toggle
        const mobileMenuButton = document.querySelector('.navbar-toggler');
        const navbarNav = document.querySelector('.navbar-nav');
        
        if (mobileMenuButton && navbarNav) {
            mobileMenuButton.addEventListener('click', function() {
                navbarNav.classList.toggle('show');
            });
            
            // Close mobile menu when clicking on links
            document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                link.addEventListener('click', function() {
                    navbarNav.classList.remove('show');
                });
            });
        }

        // Parallax effect for video background
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-video-background');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Lazy loading for images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));

        // Video error fallback
        const video = document.querySelector('.hero-video-background video');
        if (video) {
            video.addEventListener('error', function() {
                // Fallback to background image if video fails to load
                const heroSection = document.querySelector('.hero-section');
                heroSection.style.backgroundImage = 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")';
                video.style.display = 'none';
            });
        }

        // Prevent form submission on Enter in textarea
        const textarea = document.querySelector('textarea');
        if (textarea) {
            textarea.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && e.shiftKey === false) {
                    e.preventDefault();
                }
            });
        }

        // Active navigation link highlighting
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
          // Inicializar carrusel del equipo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar carrusel Bootstrap 4
    if (typeof $ !== 'undefined') {
        $('#teamCarousel').carousel({
            interval: 5000, // Cambio automático cada 5 segundos
            pause: 'hover', // Pausar al hacer hover
            wrap: true // Loop infinito
        });
    }
    
    // Alternativa sin jQuery (Bootstrap 4 vanilla)
    const teamCarousel = document.getElementById('teamCarousel');
    if (teamCarousel) {
        // Auto-play del carrusel
        const carousel = new bootstrap.Carousel(teamCarousel, {
            interval: 5000,
            pause: 'hover',
            wrap: true
        });
    }
});





// Funcionalidad de play video para testimonials
document.addEventListener('DOMContentLoaded', function() {

    const allVideos = document.querySelectorAll('.videoCarousel .video-thumbnail');
   

    const playButtons = document.querySelectorAll('.video-play-button');
    
    // CONFIGURAR Bootstrap para trabajar con nosotros
    if (typeof $ !== 'undefined') {
        $('.videoCarousel').carousel({
            interval: false,    // No auto-play automático
            wrap: true,         // Permitir loop infinito
            pause: false,       // No pausar en hover
            keyboard: false     // No responder a teclado
        });
        
        // PAUSAR el carrusel al inicio
        $('.videoCarousel').carousel('pause');
    }
    
    // ESCUCHAR eventos de Bootstrap para sincronizar
    $('.videoCarousel').on('slide.bs.carousel', function (event) {
        console.log('Bootstrap moviendo a slide:', event.to);
        
        // Pausar todos los videos cuando Bootstrap mueve el carrusel
        const allVideos = document.querySelectorAll('.videoCarousel .video-thumbnail');
        allVideos.forEach(video => {
            if (!video.paused) {
                video.pause();
                video.currentTime = 0;
            }
        });
        
        // Mostrar todos los botones de play
        const allButtons = document.querySelectorAll('.video-play-button');
        allButtons.forEach(button => {
            button.style.setProperty('display', 'flex', 'important');
            button.style.setProperty('opacity', '1', 'important');
            button.style.setProperty('visibility', 'visible', 'important');
            button.style.setProperty('pointer-events', 'auto', 'important');
            button.classList.remove('hidden');
        });
    });
    
    // Asegurar que todos los videos muestren su poster inicialmente
    allVideos.forEach(video => {
        // FORZAR la carga completa del video
        video.preload = 'auto'; // ← Cambiar de 'metadata' a 'auto'
        
        // Cargar el video completamente
        video.load();
        
        // Esperar a que esté listo
        video.addEventListener('loadeddata', function() {
            console.log('Video completamente cargado, poster visible');
            video.currentTime = 0; // ← Forzar al primer frame
            video.pause();
        });
        
        // Fallback si no se carga
        setTimeout(() => {
            if (video.readyState === 0) {
                console.log('Video no se cargó, usando fallback CSS');
                // El CSS ya tiene el fallback funcionando
            }
        }, 2000);
    });
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const carouselItem = this.closest('.carousel-item');
            const video = carouselItem.querySelector('.video-thumbnail');
            
            console.log('Botón play clickeado en slide:', carouselItem);
            
            // Ocultar botón
            this.style.setProperty('display', 'none', 'important');
            this.classList.add('hidden');
            
            // Mostrar el video y reproducirlo
            video.style.display = 'block';
            video.muted = false;
            video.controls = true;
            
            // Intentar reproducir
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('Video reproduciéndose');
                        video.classList.add('playing');
                    })
                    .catch(error => {
                        console.log('Error al reproducir:', error);
                        this.style.setProperty('display', 'flex', 'important');
                        this.classList.remove('hidden');
                    });
            }
            
            // Mostrar botón cuando termine el video
            video.addEventListener('ended', function() {
                console.log('Video terminado, avanzando al siguiente slide');
                
                // Restaurar botón del video actual
                button.style.setProperty('display', 'flex', 'important');
                button.style.setProperty('opacity', '1', 'important');
                button.style.setProperty('visibility', 'visible', 'important');
                button.style.setProperty('pointer-events', 'auto', 'important');
                button.classList.remove('hidden');
                
                video.muted = true;
                video.controls = false;
                
                // Asegurar que el video mantenga su posición
                video.style.position = 'relative';
                video.style.top = 'auto';
                video.style.left = 'auto';
                
                // DEJAR que Bootstrap maneje el avance del carrusel
                if (typeof $ !== 'undefined') {
                    $('.videoCarousel').carousel('next');
                }
                
                // Esperar un momento y reproducir automáticamente el siguiente video
                setTimeout(() => {
                    const nextSlide = document.querySelector('.videoCarousel .carousel-item.active');
                    if (nextSlide) {
                        const nextVideo = nextSlide.querySelector('.video-thumbnail');
                        const nextButton = nextSlide.querySelector('.video-play-button');
                        
                        if (nextVideo && nextButton) {
                            console.log('Reproduciendo automáticamente el siguiente video');
                            // Simular clic en el botón del siguiente slide
                            nextButton.click();
                        }
                    }
                }, 1000);
            });
            
            // Pausar carrusel mientras se reproduce video
            if (typeof $ !== 'undefined') {
                $('.videoCarousel').carousel('pause');
            }
            
            // Reanudar carrusel al terminar video
            video.addEventListener('ended', function() {
                if (typeof $ !== 'undefined') {
                    $('.videoCarousel').carousel('cycle'); // Reanudar auto-play
                }
            });
            
            // Manejar pausa del video
            video.addEventListener('pause', function() {
                console.log('Video pausado, mostrando botón');
                button.style.setProperty('display', 'flex', 'important');
                button.style.setProperty('opacity', '1', 'important');
                button.style.setProperty('visibility', 'visible', 'important');
                button.style.setProperty('pointer-events', 'auto', 'important');
                button.classList.remove('hidden');
            });
            
            // Manejar play del video (por si se reanuda)
            video.addEventListener('play', function() {
                console.log('Video reanudado, ocultando botón');
                button.style.setProperty('display', 'none', 'important');
                button.style.setProperty('opacity', '0', 'important');
                button.style.setProperty('visibility', 'hidden', 'important');
                button.style.setProperty('pointer-events', 'none', 'important');
                button.classList.add('hidden');
            });
        });
    });
});