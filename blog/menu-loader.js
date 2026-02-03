// Contenido del Header (Inyección HTML)
const headerHTML = `
    <header>
        <div class="logo"><a href="/">
           <img src="/imagen/logo.png" alt="Logo de maketo web"> </div></a>
        <div class="header-right">
            <nav id="main-menu" role="navigation">
                <ul>
                    <li><a href="/">Home</a></li>  
                    <li><a href="/web-a-credito/">Financiamiento</a></li>
                    <li><a href="/servicios/">Servicios</a></li>
                   <li><a href="/planes/">Planes</a></li>
                   <li><a href="/portafolio/">Portafolio</a></li>
                   <li><a href="/blog/">Blog</a></li>
                    <li><a href="/nosotros/">Nosotros</a></li>
                </ul>
            </nav>
            <span class="menu-toggle" id="menuToggle">☰</span>
        </div>
    </header>
`;

// Contenido del Footer (Inyección HTML)
const footerHTML = `
   <footer class="footer-container" style="font-family: 'Inter', sans-serif;">
    <div class="footer-column footer-info" style="max-width: 300px;">
        <h4>Maketo Web | Agencia de Diseño Web en Venezuela</h4>
        <p>Expertos en <strong>metodología de conversión</strong>. Diseñamos páginas web de alto rendimiento en Venezuela para clientes de todo el mundo.</p>
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
            <li><a href="/nosotros">Quienes Somos</a></li>
            <li><a href="/servicios">Servicios Globales</a></li>
        </ul>
    </div>
    <div class="footer-column">
        <h4>Planes Flex</h4>
        <ul>
            <li><a href="/vzla/">Diseño Web Venezuela</a></li>
            <li><a href="/PLANES/">Planes</a></li>
            <li><a href="/web-a-credito/">Financiamiento 0%</a></li>
        </ul>
    </div>
    <div class="footer-column">
        <h4>Legal y Contacto</h4>
        <ul>
          
            <li><a href="/politica-legal">Politica legal</a></li>
           
        </ul>
    </div>
    <div class="footer-copyright">
        <p>© <span id="currentYear"></span> Maketo Web. Sede en Valencia, Venezuela | Soluciones de Diseño Web para todo el mundo.</p>
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
            if (mainMenu.classList.contains('open')) {
                menuToggle.innerHTML = '✕'; 
                menuToggle.style.color = '#FFFFFF'; 
                menuToggle.style.position = 'fixed';
                menuToggle.style.right = '5%';
                menuToggle.style.top = '25px';
            } else {
                menuToggle.innerHTML = '☰'; 
                menuToggle.style.color = '#FFFFFF';
                menuToggle.style.position = 'static';
            }
        });

        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    mainMenu.classList.remove('open');
                    menuToggle.innerHTML = '☰'; 
                    menuToggle.style.color = '#FFFFFF';
                    menuToggle.style.position = 'static';
                }
            });
        });
    }

    // --- CORRECCIÓN ERROR 150: Validación de currentYear ---
    const yearEl = document.getElementById('currentYear');
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
});

// Lógica de Animaciones y Contadores
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('is-visible');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Contadores
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText || 0;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounter(counter), 10);
        } else {
            counter.innerText = target;
        }
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));

    const contactForm = document.getElementById('consultoria-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias! Te contactaremos pronto.');
            contactForm.reset();
        });
    }
});

// Portafolio y Modales
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', initScrollReveal);

const demos = { 'tienda-online': 'https://example.com', 'pizzeria': 'https://example.com' };

function openLiveDemo(template) {
    const modal = document.getElementById('liveDemoModal');
    const iframe = document.getElementById('demoIframe');
    if (modal && iframe && demos[template]) {
        iframe.src = demos[template];
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeLiveDemo() {
    const modal = document.getElementById('liveDemoModal');
    if (modal) {
        modal.classList.add('hidden');
        const iframe = document.getElementById('demoIframe');
        if (iframe) iframe.src = '';
        document.body.style.overflow = 'auto';
    }
}

// Datos de países y Función selectCountry (CORRECCIÓN ERROR 547)
const countriesData = {
    'venezuela': { flag: '🇻🇪', name: 'Venezuela', currency: 'VES / USD', plan: 'Plan Flex', description: 'Pago móvil y bolívares.', payments: [{ name: 'Pago Móvil', icon: 'ri-smartphone-line', color: 'bg-blue-100' }], link: '/planes-venezuela' },
    'usa': { flag: '🇺🇸', name: 'USA', currency: 'USD', plan: 'Premium', description: 'Zelle y PayPal.', payments: [{ name: 'Zelle', icon: 'ri-bank-card-line', color: 'bg-green-100' }], link: '/planes-usa' }
    // ... (puedes añadir los demás países aquí con la misma estructura)
};

function selectCountry(countryCode) {
    const country = countriesData[countryCode];
    const countryInfo = document.getElementById('countryInfo');
    if (!country || !countryInfo) return; // --- GUARDIA CLAVE ---

    const nameEl = document.getElementById('selectedCountry');
    if (nameEl) nameEl.textContent = country.name;
    
    const flagEl = document.getElementById('selectedFlag');
    if (flagEl) flagEl.textContent = country.flag;

    const descEl = document.getElementById('selectedDescription');
    if (descEl) descEl.textContent = country.description;

    const paymentMethodsContainer = document.getElementById('paymentMethods');
    if (paymentMethodsContainer) {
        paymentMethodsContainer.innerHTML = '';
        country.payments.forEach(p => {
            const el = document.createElement('div');
            el.className = `inline-flex items-center gap-2 ${p.color} px-4 py-2 rounded-full`;
            el.innerHTML = `<i class="${p.icon}"></i><span class="font-semibold">${p.name}</span>`;
            paymentMethodsContainer.appendChild(el);
        });
    }

    countryInfo.classList.remove('hidden');
}

// Inicializar país por defecto solo si el panel existe
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('countryInfo')) {
        selectCountry('venezuela');
    }
});

// DataLayer para SEO
window.dataLayer = window.dataLayer || [];
dataLayer.push({ 'pageType': 'web_design', 'businessType': 'PYMES' });
