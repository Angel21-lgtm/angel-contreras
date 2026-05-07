/* FUNCIÓN PARA MOSTRAR LA CARGA DE LA PÁGINA WEB */

const loading = () => {
    // Elementos del loading
    const contLoading = document.querySelector(".cont-loading"); // Contenedor principal de todos los elementos
    const brLoading = document.querySelector(".br-loading"); // Barra de carga
    const porcentajeLoading = document.querySelector(".porcentaje-loading"); // Número con porcentaje

    // Agregando clase de animación de carga
    brLoading.classList.add("animacion-loading");

    // Animación de carga de porcentaje de la página
    let count = 1;
    const interval = setInterval(() => {
        if (count <= 100) {
            porcentajeLoading.textContent = `${count}%`;
            count++;
        } else {
            count = 1;
            clearInterval(interval);
        }
    }, 50);

    // Agrenado clase de opacidad en 5 segundos después de que acabe la animación
    setTimeout(() => {
        contLoading.classList.add("cont-loading-opacity-0");
    }, 5000);

    // Quitando la sección de carga después de que se quita la opacidad 0.5s después de la animación de opacity: 0;
    setTimeout(() => {
        contLoading.classList.add("cont-loading-display-none");
    }, 5500);
}

export default loading;