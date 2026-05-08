/* FUNCIÓN PARA MOSTRAR LA CARGA DE LA PÁGINA WEB */

const loading = (contLoading, brLoading, porcentajeLoading, clasAnimacionLoading, clasContOpacity0Loading, clasContDisplayNoneLoading, time = 50) => {
    // Quitando scroll del body
    document.body.style.overflow = "hidden";

    // Agregando clase de animación de carga
    brLoading.classList.add(clasAnimacionLoading);

    // Animación de carga de porcentaje de la página
    let count = 1;
    const interval = setInterval(() => {
        if (count <= 100) {
            porcentajeLoading.textContent = `${count}%`;
            count++;
        } else {
            clearInterval(interval);
        }
    }, time);

    // Agregando clase de opacidad en 5 segundos después de que acabe la animación
    setTimeout(() => {
        contLoading.classList.add(clasContOpacity0Loading);

        // Agregando scroll del body
        document.body.style.overflow = "auto";
    }, (time * 100) + 500);

    // Quitando la sección de carga después de que se quita la opacidad 0.5s después de la animación de opacity: 0;
    setTimeout(() => {
        contLoading.classList.add(clasContDisplayNoneLoading);
    }, (time * 100) + 1000);
}

export default loading;