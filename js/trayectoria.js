// ****************** ---- TRAYECTORIA (TABS) ---- ******************
// Funcionalidad cambio de columnas (Tabs) en la sección de TRAYECTORIA
function inicializarTabsTrayectoria() {
    const btnEstudio = document.getElementById('btn-formacion-academica');
    const btnTrabajo = document.getElementById('btn-experiencia-profesional');
    const btnCertificaciones = document.getElementById('btn-certificaciones');

    const columnaEstudio = document.getElementById('tab-estudio');
    const columnaTrabajo = document.getElementById('tab-trabajo');
    const columnaCertificaciones = document.getElementById('tab-certificaciones');

    const indicador = document.getElementById('tab-indicador');

    const listaBotones = [btnEstudio, btnTrabajo, btnCertificaciones];
    const listaColumnas = [columnaEstudio, columnaTrabajo, columnaCertificaciones];

    const clasesBotonActivo = ['text-slate-900', 'dark:text-white', 'bg-slate-100', 'dark:bg-slate-900'];
    const clasesBotonInactivo = ['text-slate-500', 'dark:text-slate-400', 'bg-transparent'];

    function cambiarTabTrayectoria(indiceActivo) {
        // Cambiamos el estilo de los botones para reflejar la columna seleccionada
        listaBotones.forEach((btn, idx) => {
            if (!btn) return;
            if (idx === indiceActivo) {
                btn.classList.remove(...clasesBotonInactivo);
                btn.classList.add(...clasesBotonActivo);
            } else {
                btn.classList.remove(...clasesBotonActivo);
                btn.classList.add(...clasesBotonInactivo);
            }
        });

        // Movemos el indicador visual inferior a la columna seleccionada
        if (indicador) {
            indicador.style.transform = `translateX(${indiceActivo * 100}%)`;
        }

        // Mostramos la columna seleccionada y ocultamos el resto de columnas
        listaColumnas.forEach((col, idx) => {
            if (!col) return;
            if (idx === indiceActivo) {
                col.classList.remove('hidden');
                col.classList.remove('anim-tab-fadeIn');
                void col.offsetWidth; // Reiniciamos la animación forzando un reflow (re-procesamiento del DOM para calcular los elementos de la pagina)
                col.classList.add('anim-tab-fadeIn');
            } else {
                col.classList.add('hidden');
            }
        });
    }

    // Eventos de click para los botones de la sección de TRAYECTORIA
    listaBotones.forEach((btn, index) => {
        if (btn) {
            btn.addEventListener('click', () => cambiarTabTrayectoria(index));
        }
    });
}

// ****************** ---- INICIALIZACIÓN MÓDULO TRAYECTORIA ---- ******************
document.addEventListener("DOMContentLoaded", () => {
    inicializarTabsTrayectoria();
});
