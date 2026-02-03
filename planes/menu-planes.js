
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
       <h4 class="text-xl font-bold mb-4 text-white">Maketo Web | Planes y Precios</h4>
        <p class="text-gray-400 max-w-2xl leading-relaxed">
            Enfocados en <strong>impulsar tu negocio</strong> con las mejores tarifas del mercado. Estructuramos soluciones competitivas diseñadas para ayudarte a <strong>diferenciarte en el entorno digital</strong>.
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
            <li><a href="/blog/">Blog de SEO y Diseño</a></li>
            <li><a href="/nosotros/">Nosotros</a></li>
            <li><a href="/servicios/">Servicios </a></li>
        </ul>
    </div>

    <div class="footer-column">
        <h4>Planes Flex</h4>
        <ul>
            
            <li><a href="/portafolio/">Portafolio</a></li>
            <li><a href="/web-a-credito/">Financiamiento </a></li>
        </ul>
    </div>

    <div class="footer-column">
        <h4>otros</h4>
        <ul>
            <li><a href="/vzla/">Venezuela</a></li>
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


// Script para efectos interactivos -->

// Efecto de escritura para el input (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const inputPlaceholder = document.querySelector('.text-gray-500.text-sm');
    const messages = [
        "Escribe tu mensaje para dejarnos tu testimonio...",
        "Comparte tu experiencia con Maketo...",
        "¿Cómo ha sido tu experiencia con nuestro servicio?"
    ];
    
    let currentMessage = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function typeWriter() {
        const currentText = messages[currentMessage];
        
        if (!isDeleting && charIndex <= currentText.length) {
            inputPlaceholder.textContent = currentText.substring(0, charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        } else if (isDeleting && charIndex >= 0) {
            inputPlaceholder.textContent = currentText.substring(0, charIndex);
            charIndex--;
            setTimeout(typeWriter, 30);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                currentMessage = (currentMessage + 1) % messages.length;
            }
            setTimeout(typeWriter, 1000);
        }
    }
    
    // Iniciar efecto de escritura
    setTimeout(typeWriter, 1000);
    
    // Efecto de pulso para los checks de "leído"
    const checks = document.querySelectorAll('.text-xs.text-gray-500');
    checks.forEach(check => {
        setInterval(() => {
            check.classList.toggle('text-green-500');
            check.classList.toggle('font-semibold');
        }, 2000);
    });
});


// Animación para los pasos al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                entry.target.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
                
                // Animación para los puntos centrales
                const centerPoint = entry.target.querySelector('.hidden.lg\\:block');
                if (centerPoint) {
                    setTimeout(() => {
                        centerPoint.classList.add('animate-pulse');
                    }, 300);
                }
            }
        });
    }, observerOptions);

    // Observar cada paso del proceso
    document.querySelectorAll('.relative.mb-16, .relative.mb-24, .relative').forEach(step => {
        step.classList.add('opacity-0', 'translate-y-8', 'scale-95', 'transition-all', 'duration-700');
        observer.observe(step);
    });

    // Animación para la tabla
    const table = document.querySelector('table');
    if (table) {
        table.classList.add('opacity-0', 'translate-y-8');
        setTimeout(() => {
            table.classList.remove('opacity-0', 'translate-y-8');
            table.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-700');
        }, 500);
    }
});

// Efecto hover para las filas de la tabla
document.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

//PAISES

// Datos de países
const countriesData = {
    'venezuela': {
        flag: '🇻🇪',
        name: 'Venezuela',
        currency: 'VES / USD',
        plan: 'Plan Flex Disponible',
        description: 'Trabajamos con Plan Flex adaptado a la economía venezolana. Aceptamos pagos en bolívares y dólares mediante transferencias locales, pago móvil y criptomonedas.',
        payments: [
            { name: 'Pago Móvil', icon: 'ri-smartphone-line', color: 'bg-blue-100 text-blue-800' },
            { name: 'Transferencia', icon: 'ri-bank-line', color: 'bg-green-100 text-green-800' },
            { name: 'USD Cash', icon: 'ri-money-dollar-circle-line', color: 'bg-yellow-100 text-yellow-800' },
            { name: 'Cripto', icon: 'ri-bit-coin-line', color: 'bg-purple-100 text-purple-800' },
            { name: 'Binance', icon: 'ri-exchange-line', color: 'bg-orange-100 text-orange-800' }
        ],
        link: '/planes-venezuela'
    },
    'usa': {
        flag: '🇺🇸',
        name: 'Estados Unidos',
        currency: 'USD',
        plan: 'Planes Premium',
        description: 'Clientes estadounidenses pueden acceder a todos nuestros planes con métodos de pago estándar. Aceptamos tarjetas de crédito, PayPal, Zelle y transferencias bancarias.',
        payments: [
            { name: 'PayPal', icon: 'ri-paypal-fill', color: 'bg-blue-100 text-blue-800' },
            { name: 'Zelle', icon: 'ri-bank-card-line', color: 'bg-green-100 text-green-800' },,
            { name: 'Transfer', icon: 'ri-bank-line', color: 'bg-yellow-100 text-yellow-800' },
            { name: 'Cripto', icon: 'ri-bit-coin-line', color: 'bg-purple-100 text-purple-800' }
        ],
        link: '/planes-usa'
    },
    'spain': {
        flag: '🇪🇸',
        name: 'España',
        currency: 'EUR',
        plan: 'Planes en Euros',
        description: 'Adaptamos nuestros servicios al mercado español con precios en euros. Transferencias SEPA, tarjetas y PayPal disponibles. Atención en horario español.',
        payments: [
            { name: 'Binance', icon: 'ri-exchange-line', color: 'bg-orange-100 text-orange-800' },
            { name: 'Zelle', icon: 'ri-bank-card-line', color: 'bg-green-100 text-green-800' },
            { name: 'PayPal', icon: 'ri-paypal-fill', color: 'bg-blue-100 text-blue-800' },
            { name: 'Cripto', icon: 'ri-bit-coin-line', color: 'bg-purple-100 text-purple-800' }
        ],
        link: '/planes-espana'
    },
    'mexico': {
        flag: '🇲🇽',
        name: 'México',
        currency: 'MXN / USD',
        plan: 'Planes en Pesos',
        description: 'Ofrecemos precios en pesos mexicanos y dólares. Aceptamos transferencias SPEI, tarjetas, PayPal y pagos en OXXO. Atención en horario centro.',
        payments: [
           { name: 'Binance', icon: 'ri-exchange-line', color: 'bg-orange-100 text-orange-800' },
             { name: 'Zelle', icon: 'ri-bank-card-line', color: 'bg-green-100 text-green-800' },
            { name: 'Cripto', icon: 'ri-bit-coin-line', color: 'bg-purple-100 text-purple-800' },
            { name: 'PayPal', icon: 'ri-paypal-fill', color: 'bg-blue-100 text-blue-800' }
        ],
        link: '/planes-mexico'
    },
    'colombia': {
        flag: '🇨🇴',
        name: 'Colombia',
        currency: 'COP / USD',
        plan: 'Planes en Pesos',
        description: 'Trabajamos con pesos colombianos y dólares. Aceptamos PSE, transferencias bancarias, Nequi, Daviplata y tarjetas. Atención en horario colombiano.',
        payments: [
          
            { name: 'Nequi', icon: 'ri-smartphone-line', color: 'bg-purple-100 text-purple-800' },
            { name: 'Daviplata', icon: 'ri-wallet-line', color: 'bg-blue-100 text-blue-800' },
             { name: 'Zelle', icon: 'ri-bank-card-line', color: 'bg-green-100 text-green-800' },
            { name: 'PayPal', icon: 'ri-paypal-fill', color: 'bg-blue-100 text-blue-800' },
            { name: 'Cripto', icon: 'ri-bit-coin-line', color: 'bg-purple-100 text-purple-800' },
            { name: 'PayPal', icon: 'ri-paypal-fill', color: 'bg-blue-100 text-blue-800' }
        ],
        link: '/planes-colombia'
    },
   
    'otros': {
        flag: '🌍',
        name: 'Otros Países',
        currency: 'USD / Moneda Local',
        plan: 'Planes Internacionales',
        description: 'Trabajamos con clientes de todo el mundo. Aceptamos pagos internacionales via PayPal, transferencias SWIFT, criptomonedas y tarjetas internacionales. Contáctanos para coordinar el método de pago más conveniente para tu país.',
        payments: [
            { name: 'Binance', icon: 'ri-exchange-line', color: 'bg-orange-100 text-orange-800' },
            { name: 'Zelle', icon: 'ri-bank-card-line', color: 'bg-green-100 text-green-800' },
            { name: 'PayPal', icon: 'ri-paypal-fill', color: 'bg-blue-100 text-blue-800' },
            { name: 'Cripto', icon: 'ri-bit-coin-line', color: 'bg-purple-100 text-purple-800' }
        ],
        link: '/planes-internacionales'
    }
};

// Función para seleccionar país
function selectCountry(countryCode) {
    const country = countriesData[countryCode];
    if (!country) return;
    
    // Remover selección anterior
    document.querySelectorAll('.country-card').forEach(card => {
        card.classList.remove('border-blue-500', 'bg-blue-50');
        card.classList.add('border-transparent');
    });
    
    // Marcar como seleccionado
    const selectedCard = document.querySelector(`[data-country="${countryCode}"]`);
    if (selectedCard) {
        selectedCard.classList.add('border-blue-500', 'bg-blue-50');
        selectedCard.classList.remove('border-transparent');
    }
    
    // Actualizar panel de información
    document.getElementById('selectedFlag').textContent = country.flag;
    document.getElementById('selectedCountry').textContent = country.name;
    document.getElementById('selectedCurrency').textContent = country.currency;
    document.getElementById('selectedPlan').textContent = country.plan;
    document.getElementById('selectedDescription').textContent = country.description;
    document.getElementById('countryLink').href = country.link;
    document.getElementById('countryNameLink').textContent = country.name;
    
    // Actualizar métodos de pago
    const paymentMethodsContainer = document.getElementById('paymentMethods');
    paymentMethodsContainer.innerHTML = '';
    
    country.payments.forEach(payment => {
        const paymentElement = document.createElement('div');
        paymentElement.className = `inline-flex items-center gap-2 ${payment.color} px-4 py-2 rounded-full`;
        paymentElement.innerHTML = `
            <i class="${payment.icon}"></i>
            <span class="font-semibold">${payment.name}</span>
        `;
        paymentMethodsContainer.appendChild(paymentElement);
    });
    
    // Mostrar panel
    document.getElementById('countryInfo').classList.remove('hidden');
    
    // Scroll suave al panel
    document.getElementById('countryInfo').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Inicializar con Venezuela por defecto
document.addEventListener('DOMContentLoaded', function() {
    selectCountry('venezuela');
});

dataLayer.push({
  'pageType': 'homepage',
  'businessType': 'PYMES',
  'serviceCategory': 'web_design_seo'
});