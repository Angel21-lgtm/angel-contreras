/* SISTEMA DEDICADO A LA OBSERVACIÓN DE ELEMENTOS Y AGREGAR ESTILOS Y CLASES AL ESTAR VISIBLE EN EL VIEWPORT */

// Función universal para crear observer's con clases distintas
const crearObserver = (claseOculta, claseVisible, infinito = true, threshold = 0) => {
    const observer = new IntersectionObserver(entries => {

        // Corriendo elementos
        entries.forEach(entry => {
            if (infinito) {
                // Quitando clase si no se encuentra visible
                entry.target.classList.toggle(claseOculta, !entry.isIntersecting);

                // Agregando clase si se encuentra visible
                entry.target.classList.toggle(claseVisible, entry.isIntersecting);
            } else {
                if (!entry.isIntersecting) {
                    entry.target.classList.add(claseOculta);
                } else {
                    entry.target.classList.remove(claseOculta);
                    entry.target.classList.add(claseVisible);

                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        threshold: threshold,
    });

    return observer;
}


export default crearObserver;