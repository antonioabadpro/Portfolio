// ****************** ---- CONFIGURACIÓN IDIOMA LOCAL ---- ******************
// Se resuelve de forma local dentro de las funciones para no colisionar con el ámbito global (general.js)

// ****************** ---- PROYECTOS & LOGROS ---- ******************
// Módulo preparado para futuras interacciones, filtrado dinámico o modales de proyectos.
function inicializarProyectos() {
    // Espacio reservado para lógica interactiva de proyectos
}

// ****************** ---- INICIALIZACIÓN MÓDULO PROYECTOS ---- ******************
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarProyectos);
} else {
    inicializarProyectos();
}
