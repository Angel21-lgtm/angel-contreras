/* SISTEMA DEDICADO A LA OBSERVACIÓN DE ELEMENTOS Y AGREGAR ESTILOS Y CLASES AL ESTAR VISIBLE EN EL VIEWPORT */

// Función universal para crear observer's con clases distintas
const crearObserver = (claseOculta, claseVisible, threshold = 0) => {
    return new IntersectionObserver(entries => {

        // Corriendo elementos
        entries.forEach(entry => {
            // Quitando clase si no se encuentra visible
            entry.target.classList.toggle(claseOculta, !entry.isIntersecting);

            // Agregando clase si se encuentra visible
            entry.target.classList.toggle(claseVisible, entry.isIntersecting);
        });
    }, {
        threshold: `${threshold}`,
    });
}


export default crearObserver;