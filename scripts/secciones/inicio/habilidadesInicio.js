/* BOTÓN PARA CAMBIAR LAS HABILIDADES DE LA SECCIÓN INICIO */

const habilidadesInicio = (boton, contenedor, clase) => {
    // Arreglo de habilidades a mostrar
    const habilidades = ["Full - Stack", "Front - End", "Back - End", "Hardware", "Software", "UI y UX", "Videojuegos"];

    // Contador de elementos del array
    let cont = 0;

    boton.addEventListener("click", () => {
        // Desactivar botón para evitar errores
        boton.disabled = true;

        // Forzando quitar la clase para recalcular tamaño
        contenedor.classList.remove(clase);
        void contenedor.offsetWidth;

        // Agregando clase antes del texto
        contenedor.classList.add(clase);

        // Tiempo para agregar el texto
        setTimeout(() => {

            // Agregar texto de las habilidades al contenedor
            contenedor.textContent = habilidades[cont];

            // Calculando el ancho del nuevo texto responsivo y agregándolo
            contenedor.style.width = "";

            // Crear la variable --ancho para usarla en la animación CSS
            contenedor.style.setProperty("--ancho", `${contenedor.scrollWidth}px`);

            // Decisión para reiniciar el contador
            if (cont >= habilidades.length - 1) {
                cont = 0;
            } else {
                cont++;
            }
        }, 750);

        // Tiempo para remover la clase
        setTimeout(() => {
            boton.disabled = false;

            contenedor.classList.remove(clase);
        }, 1500);
    });
}

export default habilidadesInicio;