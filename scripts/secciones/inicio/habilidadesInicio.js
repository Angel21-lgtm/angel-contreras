/* BOTÓN PARA CAMBIAR LAS HABILIDADES DE LA SECCIÓN INICIO */

const habilidadesInicio = (boton, contenedor, clase) => {
    // Arreglo de habilidades a mostrar
    const habilidades = ["FrontEnd", "BackEnd", "FullStack", "Hardware", "Software", "UI", "UX", "Diseño", "Videojuegos"];

    let cont = 0;

    boton.addEventListener("click", e => {
        // Desactivar botón para evitar errores
        boton.disabled = true;

        // Agregando clase antes del texto
        contenedor.classList.add(clase);

        // Intervalo para agregar el texto
        const intervalText = setInterval(() => {

            // Agregar texto de las habilidades al contenedor
            contenedor.innerHTML = habilidades[cont];

            // Calculando el ancho del nuevo texto y agregándolo
            contenedor.style.width = `${contenedor.scrollWidth}px`;

            // Crear la variable --ancho para usarla en la animación CSS
            contenedor.style.setProperty("--ancho", `${contenedor.scrollWidth}px`);

            if (cont >= habilidades.length - 1) {
                cont = 0;
            } else {
                cont++;
            }

            clearInterval(intervalText);
        }, 750);

        // Intervalo para agregar la clase
        const intervalClase = setInterval(() => {
            boton.disabled = false;

            contenedor.classList.remove(clase);

            clearInterval(intervalClase);
        }, 1500);
    });
}

export default habilidadesInicio;