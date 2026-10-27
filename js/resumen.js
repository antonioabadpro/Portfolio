// ****************** ---- TYPEWRITER PARA EL TEXTO RESUMEN ---- ******************
let instanciaTypedResumen = null;

const textosResumen = {
    es: [
        "Graduado en Ingeniería Informática por la Universidad de Huelva y estudiante del Máster en Ingeniería de Software y Sistemas Informáticos en la UNIR.",
        "Desarrollador Full Stack especializado en Backend robusto y seguro.",
        "Ambicioso, innovador, detallista y buscando la excelencia en cada proyecto."
    ],
    en: [
        "BSc in Computer Software Engineering graduate from the University of Huelva and MSc student in Software Engineering and Computer Systems at UNIR.",
        "Full Stack Developer specialised in robust and secure Backend architectures.",
        "Ambitious, innovative, detail-oriented, and striving for excellence in every project."
    ]
};

function iniciarTypewriterResumen(lang, retrasoInicial = 0) {
    if (instanciaTypedResumen) {
        instanciaTypedResumen.destroy();
    }

    const phantom = document.getElementById('texto-inicio-resumen-phantom');
    const typedTarget = document.getElementById('texto-inicio-resumen');

    // Asignamos inmediatamente el texto al elemento fantasma para fijar la altura antes de que comience la escritura (Typed.js) y evitar que el contenedor cambie de tamaño durante la animación.
    if (phantom && textosResumen[lang]) {
        phantom.innerHTML = textosResumen[lang].map(p => `<span class="block">${p}</span>`).join('');
    }
    if (typedTarget) {
        typedTarget.innerHTML = "";
    }

    if (!textosResumen[lang] || typeof Typed === 'undefined') return;

    // Unimos las frases con un salto simple (inline)
    const textoUnido = textosResumen[lang].join('<br>');

    // Iniciamos el efecto sin desfase de altura, pero con un retraso inicial para que el usuario pueda leer el texto anterior antes de que comience la animación.
    instanciaTypedResumen = new Typed('#texto-inicio-resumen', {
        strings: [textoUnido],
        typeSpeed: 10,
        startDelay: retrasoInicial,
        contentType: 'html',
        showCursor: true,
        cursorChar: '▋',
        autoInsertCss: false, // Evita que Typed.js inserte automáticamente estilos CSS para el cursor, permitiendo un control total sobre su estilo mediante CSS personalizado.
        loop: false,
        onComplete: (self) => {
            if (self.cursor) {
                setTimeout(() => {
                    self.cursor.style.transition = 'opacity 0.4s ease';
                    self.cursor.style.opacity = '0';
                }, 800);
            }
        }
    });
}

// ****************** ---- TICKER VERTICAL DE PROFESIONES ---- ******************
const rolesProfesion = {
    es: [
        "Ingeniero Informático",
        "Ingeniero de Software"
    ],
    en: [
        "Computer Engineer",
        "Software Engineer"
    ]
};

let intervaloTicker = null;
let animandoTicker = false;
const NUM_ROLES = 2; // Número de roles en el ticker (para evitar errores si se cambia la lista)
const TIEMPO_ESPERA_TICKER = 2000; // Tiempo de espera entre cada animación (en milisegundos)
const VELOCIDAD_ANIMACION_TICKER = "0.85s"; // Duración de la animación de subida (en segundos)

function renderizarTickerProfesion(lang) {
    const contenedor = document.getElementById('ticker-profesion');
    if (!contenedor || !rolesProfesion[lang]) return;

    // Reseteamos los estilos y la posición
    contenedor.style.transition = 'none';
    contenedor.style.transform = 'translateY(0px)';
    animandoTicker = false;

    const lista = rolesProfesion[lang];
    contenedor.innerHTML = lista
        .map(rol => `<span class="h-7 sm:h-8 flex items-center text-slate-900 dark:text-slate-100 font-semibold tracking-wide whitespace-nowrap">${rol}</span>`)
        .join('');
}

function iniciarTickerProfesion() {
    if (intervaloTicker) clearInterval(intervaloTicker);

    const contenedor = document.getElementById('ticker-profesion');

    intervaloTicker = setInterval(() => {
        if (!contenedor || contenedor.children.length < NUM_ROLES || animandoTicker) return;

        const primerHijo = contenedor.firstElementChild;
        if (!primerHijo) return;

        // Medimos la altura exacta en píxeles de 1 solo elemento (ej: 28px en móvil, 32px en escritorio)
        const alturaPaso = primerHijo.offsetHeight;
        animandoTicker = true;

        // Iniciamos la animación suave de subida de exactamente 1 elemento
        contenedor.style.transition = `transform ${VELOCIDAD_ANIMACION_TICKER} cubic-bezier(0.65, 0, 0.35, 1)`;
        contenedor.style.transform = `translateY(-${alturaPaso}px)`;

        // Al terminar la animación, reciclamos el nodo arriba hacia abajo y reseteamos el transform
        const handleTransitionEnd = () => {
            contenedor.removeEventListener('transitionend', handleTransitionEnd);
            contenedor.appendChild(contenedor.firstElementChild); // Pasamos el primer elemento al final de la cola

            // Reseteamos posición a 0 de forma invisible e instantánea
            contenedor.style.transition = 'none';
            contenedor.style.transform = 'translateY(0px)';

            // Forzamos al navegador a procesar el reflow para que la transición se aplique correctamente en el siguiente ciclo
            void contenedor.offsetHeight;
            animandoTicker = false;
        };

        contenedor.addEventListener('transitionend', handleTransitionEnd, { once: true });
    }, TIEMPO_ESPERA_TICKER);
}

// ****************** ---- INICIALIZACIÓN MÓDULO RESUMEN ---- ******************
document.addEventListener("DOMContentLoaded", () => {
    const lang = window.IDIOMA || (document.documentElement.lang === "en" ? "en" : "es");
    iniciarTypewriterResumen(lang, 600);
    renderizarTickerProfesion(lang);
    iniciarTickerProfesion();
});
