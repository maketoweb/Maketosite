// Contenido del Header (Inyección HTML) - Incluye SPAN para el icono de la hamburguesa/X
const headerHTML = `
    <header>
        <div class="logo"><a href="/">
           <img src="/imagen/logo.png" alt="Logo de maketo web"> </div></a>
        <div class="header-right">
            <nav id="main-menu" role="navigation">
                <ul>
                    <li><a href="/">Home</a></li>  
                    <li><a href="/web-a-credito">Financiamiento</a></li>
                    <li><a href="/servicios">Servicios</a></li>
                   <li><a href="/planes">Planes</a></li>
                   <li><a href="/portafolio">Portafolio</a></li>
                   <li><a href="/blog">Blog</a></li>
                    <li><a href="/nosotros">Nosotros</a></li>
                </ul>
            </nav>
           
            <span class="menu-toggle" id="menuToggle">☰</span>
        </div>
    </header>
`;

// Contenido del Footer (Inyección HTML - CON ICONOS REMIX ICON)
const footerHTML = `
   <footer class="footer-container" style="font-family: 'Inter', sans-serif;">
    <div class="footer-column footer-info" style="max-width: 300px;">
      <h4 class="text-xl font-bold mb-4 text-white">Maketo Web | Soluciones y Servicios Digitales</h4>
        <p class="text-gray-400 max-w-2xl leading-relaxed">
            Especialistas en <strong>desarrollo técnico y optimización</strong>. Implementamos ecosistemas web de alto desempeño para marcas que buscan escalar su presencia en el mercado internacional.
        </p>
        <div class="social-links">
            <a href="https://instagram.com/maketo.web" target="_blank" aria-label="Instagram"><i class="ri-instagram-fill"></i></a>
            <a href="https://facebook.com/maketoweboficial" target="_blank" aria-label="Facebook"><i class="ri-facebook-fill"></i></a>
            <a href="https://linkedin.com/company/maketoweb" target="_blank" aria-label="LinkedIn"><i class="ri-linkedin-fill"></i></a>
            <a href="https://wa.me/+584124058904" target="_blank" aria-label="WhatsApp"><i class="ri-whatsapp-fill"></i></a>
        </div>
    </div>

    <div class="footer-column">
        <h4>Explora</h4>
        <ul>
            <li><a href="/blog">Blog de SEO y Diseño</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/servicios">Servicios </a></li>
        </ul>
    </div>

    <div class="footer-column">
        <h4>Planes </h4>
        <ul>
            <li><a href="/vzla">Venezuela</a></li>
            <li><a href="/portafolio/">Portafolio</a></li>
            <li><a href="/web-a-credito/">Financiamiento 0%</a></li>
        </ul>
    </div>

    <div class="footer-column">
        <h4>Otros</h4>
        <ul>
            <li><a href="/planes/">Planes</a></li>
            <li><a href="/politica-legal.html">Politica Legal</a></li>
          
        </ul>
    </div>
    
    <div class="footer-copyright">
        <p>© 2025 Maketo Web. Sede en Valencia, Venezuela | Soluciones de Diseño Web para todo el mundo.</p>
    </div>
</footer>
`;

// Lógica de inyección y manejo del menú móvil
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inyectar Header y Footer
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    
    // 2. Lógica del Menú Móvil
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('main-menu');
    
    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('open');
            
            // LÓGICA CLAVE: Cambiar el icono y su estilo
            if (mainMenu.classList.contains('open')) {
                menuToggle.innerHTML = '✕'; 
                menuToggle.style.color = '#fff'; 
                menuToggle.style.position = 'fixed'; // CLAVE: Fija el botón de cierre
                menuToggle.style.right = '5%';
                menuToggle.style.top = '25px';
            } else {
                menuToggle.innerHTML = '☰'; 
                menuToggle.style.color = '#000';
                menuToggle.style.position = 'static'; // Vuelve a su posición normal en el header
            }
        });
        
        // Cierre al hacer clic en un enlace
        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    mainMenu.classList.remove('open');
                    menuToggle.innerHTML = '☰'; 
                    menuToggle.style.color = '#000';
                    menuToggle.style.position = 'static';
                }
            });
        });
    }
});



//js para el main


// Función para animaciones de aparición al hacer scroll
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, observerOptions);

    // Observar elementos con la clase 'reveal-on-scroll'
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initScrollReveal);




   document.addEventListener('DOMContentLoaded', function() {
      // Actualizar año en el footer
      document.getElementById('currentYear').textContent = new Date().getFullYear();
      
   
      // Animación al hacer scroll
      const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top < windowHeight - 100) {
            el.classList.add('is-visible');
          }
        });
      };
      
      window.addEventListener('scroll', animateOnScroll);
      animateOnScroll(); // Ejecutar al cargar la página
      
      // Contadores animados
      const counters = document.querySelectorAll('.counter');
      const speed = 200;
      
      const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(() => animateCounter(counter), 10);
        } else {
          counter.innerText = target;
        }
      };
      
      // Observador para activar contadores cuando son visibles
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      counters.forEach(counter => {
        counterObserver.observe(counter);
      });
      
      // Form submission
      const contactForm = document.getElementById('consultoria-form');
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          // Aquí iría la lógica para enviar el formulario
          alert('¡Gracias por tu interés! Te contactaremos en las próximas 24 horas para coordinar tu consultoría gratuita.');
          contactForm.reset();
        });
      }
    });

    

// service-worker.js - AÑADIR PWA
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('maketo-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/imagen/logo.webp',
        // Assets críticos
      ]);
    })
  );
});

//PORTAFOLIO MODAL

// Función para animaciones de aparición al hacer scroll
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, observerOptions);

    // Observar elementos con la clase 'reveal-on-scroll'
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initScrollReveal);


// URLs de los demos (reemplazar con URLs reales)
const demos = {
    'tienda-online': 'https://themexriver.com/wp/radios/?storefront=envato-elements',
    'pizzeria': 'https://demo-pizzeria-wordpress.maketo.com'
};

// Abrir demo en vivo
function openLiveDemo(template) {
    const modal = document.getElementById('liveDemoModal');
    const iframe = document.getElementById('demoIframe');
    
    if (demos[template]) {
        iframe.src = demos[template];
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Cerrar demo en vivo
function closeLiveDemo() {
    const modal = document.getElementById('liveDemoModal');
    const iframe = document.getElementById('demoIframe');
    
    modal.classList.add('hidden');
    iframe.src = '';
    document.body.style.overflow = 'auto';
}

// Refrescar demo
function refreshDemo() {
    const iframe = document.getElementById('demoIframe');
    iframe.src = iframe.src;
}

// Abrir modal de portafolio completo
function openPortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Cerrar modal de portafolio completo
function closePortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Cerrar modales con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLiveDemo();
        closePortfolioModal();
    }
});

// Cerrar modal al hacer click fuera del contenido
document.addEventListener('click', (e) => {
    const liveModal = document.getElementById('liveDemoModal');
    const portfolioModal = document.getElementById('portfolioModal');
    
    if (e.target === liveModal) {
        closeLiveDemo();
    }
    
    if (e.target === portfolioModal) {
        closePortfolioModal();
    }
});

//AQUI TERMINA

// FAQ Toggle Functionality
    document.addEventListener('DOMContentLoaded', function() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');
            
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                        otherItem.querySelector('.faq-answer').classList.add('hidden');
                        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    }
                });
                
                // Toggle current item
                if (!isOpen) {
                    item.classList.add('open');
                    answer.classList.remove('hidden');
                    question.setAttribute('aria-expanded', 'true');
                    
                    // Track FAQ opens for analytics
                    if (typeof gtag !== 'undefined') {
                        const questionText = question.querySelector('h3').textContent;
                        gtag('event', 'faq_open', {
                            'event_category': 'FAQ',
                            'event_label': questionText,
                            'value': 1
                        });
                    }
                } else {
                    item.classList.remove('open');
                    answer.classList.add('hidden');
                    question.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Keyboard navigation
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        });
        
        // Open FAQ from URL hash
        const hash = window.location.hash;
        if (hash) {
            const targetItem = document.querySelector(hash);
            if (targetItem && targetItem.classList.contains('faq-item')) {
                setTimeout(() => {
                    targetItem.querySelector('.faq-question').click();
                    targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 500);
            }
        }
        
        // Add FAQ to scroll animation observer
        const faqObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        document.querySelectorAll('.faq-item').forEach(item => {
            faqObserver.observe(item);
        });
    });
      tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        black: '#0a0a0a',
                        dark: '#1a1a1a',
                        gray: '#666666',
                        'light-gray': '#f5f5f5',
                        white: '#ffffff',
                        accent: '#0066ff',
                        'ai-color': '#00d4aa',
                        'seo-color': '#ff6b00',
                        'geo-color': '#8a2be2',
                        'design-color': '#8b5cf6',
                        'branding-color': '#ec4899',
                        'ads-color': '#f59e0b'
                    },
                    fontFamily: {
                        'inter': ['Inter', 'system-ui', 'sans-serif']
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'slide-up': 'slideUp 0.6s ease-out'
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' }
                        },
                        slideUp: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' }
                        }
                    }
                }
            }
        }