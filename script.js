
// Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.main-header');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

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
        
        // Función para reproducir video con el botón rojo-naranja
        function playVideo() {
            const video = document.querySelector('.testimonial-video');
            const playButton = document.querySelector('.video-play-button');
            
            if (video && playButton) {
                // Intentar reproducir el video
                const playPromise = video.play();
                
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            // Video se reprodujo exitosamente
                            video.setAttribute('data-playing', 'true');
                            playButton.classList.add('hidden'); // Ocultar botón
                            console.log('Video reproduciéndose');
                        })
                        .catch(error => {
                            // Error al reproducir (común en móviles)
                            console.log('Error al reproducir:', error);
                            // Fallback: mostrar controles nativos
                            video.controls = true;
                        });
                }
            }
        }

        // Event listeners para el video
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.querySelector('.testimonial-video');
            const playButton = document.querySelector('.video-play-button');
            
            if (video && playButton) {
                // Hacer clic en el botón rojo-naranja
                playButton.addEventListener('click', function() {
                    playVideo();
                });
                
                // Ocultar botón cuando el video empiece a reproducirse
                video.addEventListener('play', function() {
                    playButton.classList.add('hidden');
                    console.log('Video iniciado');
                });
                
                // Mostrar botón cuando el video se pause
                video.addEventListener('pause', function() {
                    playButton.classList.remove('hidden');
                    console.log('Video pausado');
                });
                
                // Mostrar botón cuando el video termine
                video.addEventListener('ended', function() {
                    playButton.classList.remove('hidden');
                    console.log('Video terminado');
                });
                
                // Manejar errores del video
                video.addEventListener('error', function(e) {
                    console.log('Error en video:', e);
                    playButton.classList.remove('hidden');
                });
            } else {
                console.log('Video o botón no encontrados');
            }
        });