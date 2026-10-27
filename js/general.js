// ****************** ---- CONFIGURACIÓN GLOBAL E IDIOMA ---- ******************
// Detecta el idioma desde <html lang="..."> con fallback a "es"
const IDIOMA = window.IDIOMA || (document.documentElement.lang === "en" ? "en" : "es");

// ****************** ---- NAVBAR (MENÚ HAMBURGUESA MÓVIL) ---- ******************
function inicializarMenuMovil() {
    const mobileMenuBtn = document.getElementById('btn-menu-hamburguesa');
    const mobileMenu = document.getElementById('menu-hamburguesa');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!mobileMenuBtn || !mobileMenu) return;

    const ICONS_MENU = {
        menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" id="icono-menu-hamburguesa"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
        x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" id="icono-menu-hamburguesa"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
    };

    function setMenuIcon(iconName) {
        mobileMenuBtn.innerHTML = ICONS_MENU[iconName] || '';
    }

    function toggleMenu() {
        const isClosed = mobileMenu.classList.contains('hidden');

        if (isClosed) { // Entrada: Fade-in Down (baja desde arriba)
            mobileMenu.classList.remove('hidden', 'anim-menu-out');
            mobileMenu.classList.add('anim-menu-in');
            setMenuIcon('x'); // Cambiamos el icono a una 'x'
        } else { // Salida: Fade-out Up (se recoge hacia arriba)
            mobileMenu.classList.remove('anim-menu-in');
            mobileMenu.classList.add('anim-menu-out');

            // Esperamos a que termine la animación (200ms) para ocultarlo del todo
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('anim-menu-out');
            }, 200);

            setMenuIcon('menu'); // Cambiamos el icono de nuevo a las tres líneas
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Cerramos el menú al pulsar sobre cualquier enlace
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // Cerrar si se redimensiona a pantalla de escritorio
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('anim-menu-in', 'anim-menu-out');
            setMenuIcon('menu');
        }
    });
}

// ****************** ---- DESPLAZAMIENTO HORIZONTAL SUAVE CON SCROLL ---- ******************
function inicializarEfectoScroll() {
    const elementosParaAnimar = document.querySelectorAll('.reveal');

    const observador = new IntersectionObserver((entradas, observer) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                // Al entrar en el viewport, restauramos opacidad y posición original
                entrada.target.classList.remove('opacity-0', 'translate-y-8');
                entrada.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entrada.target); // Dejamos de observar para ejecutar la animación una sola vez
            }
        });
    }, {
        root: null,
        threshold: 0.20, // Se activa cuando el 20% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    });

    elementosParaAnimar.forEach(el => observador.observe(el));
}

// ******************* ---- SWITCH TEMA (Modo Oscuro / Modo Claro) ---- ******************
function inicializarTema() {
    const btnTema = document.getElementById('btn-tema');
    if (!btnTema) return;

    const ICONS_TEMA = {
        moon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" id="themeIcon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
        sun: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" id="themeIcon"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'
    };

    function actualizarIconoTema(esOscuro) {
        btnTema.innerHTML = esOscuro ? ICONS_TEMA.moon : ICONS_TEMA.sun;
    }

    function cambiarTema() {
        const alternar = () => {
            const esOscuro = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', esOscuro ? 'dark' : 'light');
            actualizarIconoTema(esOscuro);
        };

        if (document.startViewTransition) {
            document.startViewTransition(() => alternar());
        } else {
            alternar();
        }
    }

    // Cargamos la preferencia guardada o del sistema al iniciar
    const temaGuardado = localStorage.getItem('theme');
    const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const esOscuro = temaGuardado === 'dark' || (!temaGuardado && prefiereOscuro);

    if (esOscuro) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    actualizarIconoTema(esOscuro);

    btnTema.addEventListener('click', cambiarTema);
}

// ****************** ---- BARRA SUPERIOR DE PROGRESO DE SCROLL ---- ******************
function inicializarBarraProgreso() {
    const barraProgreso = document.getElementById('scroll-progress');
    if (!barraProgreso) return;

    let ticking = false;

    function actualizarBarraProgreso() {
        const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
        if (alturaTotal > 0) {
            const factor = Math.min(Math.max(window.scrollY / alturaTotal, 0), 1);
            barraProgreso.style.transform = `scaleX(${factor})`;
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(actualizarBarraProgreso);
            ticking = true;
        }
    }, { passive: true });

    actualizarBarraProgreso(); // Llamada inicial por si la página carga con scroll
}

// ****************** ---- INICIALIZACIÓN MÓDULO GENERAL ---- ******************
document.addEventListener("DOMContentLoaded", () => {
    // Actualizar año en el footer
    const yearElem = document.getElementById('year-actual');
    if (yearElem) yearElem.textContent = new Date().getFullYear();

    // Inicializar módulos transversales
    inicializarTema();
    inicializarMenuMovil();
    inicializarEfectoScroll();
    inicializarBarraProgreso();
});
