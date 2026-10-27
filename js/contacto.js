// ****************** ---- CONFIGURACIÓN IDIOMA LOCAL ---- ******************
// Se resuelve de forma local dentro de las funciones para no colisionar con el ámbito global (general.js)

// ****************** ---- CONTACTO (Abrir borrador en Gmail) ---- ******************
const listaPlantillasEmail = {
    es: {
        oferta: {
            subject: "Propuesta de Empleo - [Nombre de la Empresa]",
            body: "Hola Antonio,\n\nSoy [Tu Nombre] de [Empresa].\nHemos revisado tu perfil y nos gustaría presentarte una oportunidad laboral para el puesto de [Nombre del puesto / Puesto o Rol].\n\nTe dejamos algunos detalles clave de la propuesta:\n- Modalidad: [Remoto / Híbrido / Presencial en (Ubicación)]\n- Jornada: [Completa / Media jornada]\n- Tipo de contrato / Duración: [Indefinido / Temporal / etc.]\n- Incorporación estimada: [Inmediata / Fecha]\n- Tecnologías Principales: [Stack]\n- Breve descripción: [Detalles]\n\nSi te resulta de interés la propuesta, ¿tendrías disponibilidad para comentar más detalles por llamada o videollamada?\n\nUn saludo,\n[Tu Nombre / Cargo]"
        },
        info: {
            subject: "Solicitud de Información y CV - [Nombre de la Empresa]",
            body: "Hola Antonio,\n\nSoy [Tu Nombre] de [Empresa].\nHe visto tu portfolio y me gustaría solicitar tu Currículum Vitae actualizado.\n\nNos interesa conocer más sobre tu perfil enfocado a:\n- Motivo / Tipo de proyecto o área: [Ej. Desarrollo backend, full-stack, consultoría, etc.]\n- Aspectos que nos gustaría destacar o conocer: [Ej. Experiencia con X tecnología, proyectos recientes, disponibilidad]\n\nAsí podremos evaluar la información más relevante para el contexto de nuestra empresa.\n\nQuedo a la espera.\n\nUn saludo,\n[Tu Nombre / Cargo]"
        },
        otro: {
            subject: "Contacto General - [Nombre de la Empresa / Tu Nombre]",
            body: "Hola Antonio,\n\nSoy [Tu Nombre] de [Empresa / Particular].\nTe escribo para comentarte lo siguiente:\n\n[Indica aquí el motivo o consulta]\n\nUn saludo,\n[Tu Nombre / Firma]"
        }
    },
    en: {
        oferta: {
            subject: "Job Proposal - [Company Name]",
            body: "Hi Antonio,\n\nI am [Your Name] from [Company].\nWe reviewed your profile and would like to share a job opportunity for the role of [Job Title / Role].\n\nHere are some key details of the proposal:\n- Work Model: [Remote / Hybrid / On-site in (Location)]\n- Working Hours: [Full-time / Part-time]\n- Contract Type / Duration: [Permanent / Temporary / etc.]\n- Estimated Start Date: [Immediate / Date]\n- Core Technologies: [Stack]\n- Brief Description: [Details]\n\nIf you are interested in this opportunity, would you be available for a brief call to discuss further?\n\nBest regards,\n[Your Name / Title]"
        },
        info: {
            subject: "Information and CV Request - [Company Name]",
            body: "Hi Antonio,\n\nI am [Your Name] from [Company].\nI reviewed your portfolio and would like to request your updated CV.\n\nWe would like to learn more about your profile with a focus on:\n- Purpose / Project Type or Area: [e.g., Backend development, full-stack, consulting, etc.]\n- Key aspects or focus areas: [e.g., Experience with X technology, recent projects, availability]\n\nThis will allow us to evaluate the most relevant details for our company's context.\n\nLooking forward to hearing from you.\n\nBest regards,\n[Your Name / Title]"
        },
        otro: {
            subject: "General Inquiry - [Company Name / Your Name]",
            body: "Hi Antonio,\n\nI am [Your Name] from [Company / Individual].\nI am writing to you regarding the following:\n\n[Indicate your reason or inquiry here]\n\nBest regards,\n[Your Name / Signature]"
        }
    }
};

// Función que contiene la lógica de redirección a Gmail
function inicializarContactoGmail() {
    const btnBorradorGmail = document.getElementById('btnBorradorGmail');
    const selectMotivoContacto = document.getElementById('motivoContacto');

    if (!btnBorradorGmail || !selectMotivoContacto) return;

    btnBorradorGmail.addEventListener('click', () => {
        const motivoSeleccionado = selectMotivoContacto.value;
        const lang = window.IDIOMA || (document.documentElement.lang === "en" ? "en" : "es");
        const plantillaLang = listaPlantillasEmail[lang] || listaPlantillasEmail.es;
        const plantillaSeleccionada = plantillaLang[motivoSeleccionado];

        if (!plantillaSeleccionada) return;

        const emailDestino = "antonioabad.eng@gmail.com";
        const asuntoCodificado = encodeURIComponent(plantillaSeleccionada.subject);
        const cuerpoCodificado = encodeURIComponent(plantillaSeleccionada.body);

        // Si el usuario está en un dispositivo móvil, abre directamente la app de correo/Gmail configurada
        const esMovil = /Android|iPhone|iPad|Windows Phone|Mobile|Tablet/i.test(navigator.userAgent);

        if (esMovil) { // Si el usuario está en un dispositivo móvil, abre directamente la app de correo/Gmail configurada
            window.location.href = `mailto:${emailDestino}?subject=${asuntoCodificado}&body=${cuerpoCodificado}`;
        } else { // Si el usuario está en un PC, abre Gmail en una nueva pestaña con el selector de cuentas
            // URL destino de redacción de Gmail
            const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailDestino}&su=${asuntoCodificado}&body=${cuerpoCodificado}`;

            // Encapsulamos en el AccountChooser de Google
            const selectAccountUrl = `https://accounts.google.com/AccountChooser?prompt=select_account&continue=${encodeURIComponent(composeUrl)}`;

            // Abrimos la ventana para seleccionar la cuenta de correo
            window.open(selectAccountUrl, '_blank');
        }
    });
}

// ****************** ---- INICIALIZACIÓN MÓDULO CONTACTO ---- ******************
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarContactoGmail);
} else {
    inicializarContactoGmail();
}
