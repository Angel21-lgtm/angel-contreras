/* FUNCIÓN PARA MOSTRAR LA SIGUIENTE INFORMACIÓN SOBRE MI */

const sigInfo = (contenedor, botonIzquierdo, botonDerecho, imgCard, encabezado, contParrafo1, contParrafo2) => {
    // Declarando contador
    let count = 0;

    // Información de la sección
    const info = [
        {
            srcImg: "../../.././imagenes/secciones/sobre-mi/junior.gif",
            altImg: "Junior",
            encabezado: "Junior",
            parrafo1: `Soy <strong>Desarrollador Web Junior</strong> enfocado en crear aplicaciones web modernas, rápidas y escalables, cuidando tanto el frontend como el backend.`,
            parrafo2: `Manejo <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>SQL</strong>, <strong>HTML5</strong> y <strong>CSS3</strong> para desarrollar sitios web y sistemas completos, creando soluciones funcionales, escalables y enfocadas en rendimiento y experiencia de usuario.`,
        },
        {
            srcImg: "../../.././imagenes/secciones/sobre-mi/front-end.gif",
            altImg: "Front-End",
            encabezado: "Front-End",
            parrafo1: `Como <strong>Desarrollador Front-End</strong>, creo aplicaciones y sitios web del lado del cliente utilizando <strong>HTML5</strong>, <strong>CSS3</strong> y <strong>JavaScript ES6+</strong>, desarrollando interfaces modernas, funcionales y optimizadas para rendimiento, usabilidad y experiencia de usuario.`,
            parrafo2: `Transformo ideas en interfaces funcionales, atractivas y optimizadas para ofrecer soluciones web de calidad.`,
        },
        {
            srcImg: "../../.././imagenes/secciones/sobre-mi/back-end.gif",
            altImg: "Back-End",
            encabezado: "Back-End",
            parrafo1: `Desarrollo <strong>software del lado del servidor (Back-End)</strong> utilizando <strong>Node.js</strong>, <strong>JavaScript ES6+</strong> y <strong>SQL</strong> para crear lógica de negocio, gestionar datos y construir sistemas web escalables.`,
            parrafo2: `Implemento APIs, bases de datos y arquitectura de servidor aplicando buenas prácticas para garantizar rendimiento, seguridad y escalabilidad.`,
        },
        {
            srcImg: "../../.././imagenes/secciones/sobre-mi/hardware.gif",
            altImg: "Hardware",
            encabezado: "Hardware",
            parrafo1: `Realizo <strong>ensamblado y mantenimiento de computadoras</strong>, optimizando hardware, mejorando rendimiento y asegurando el correcto funcionamiento de equipos de cómputo.`,
            parrafo2: `Diagnostico fallas, actualizo componentes y aplico <strong>mantenimiento preventivo y correctivo</strong> para prolongar la vida útil de computadoras.`,
        },
        {
            srcImg: "../../.././imagenes/secciones/sobre-mi/software.gif",
            altImg: "Software",
            encabezado: "Software",
            parrafo1: `Desarrollo <strong>software web</strong> utilizando <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>HTML5</strong> y <strong>CSS3</strong>, creando aplicaciones funcionales, escalables y optimizadas para distintos entornos.`,
            parrafo2: `Empaqueto aplicaciones para <strong>escritorio y móviles</strong> con tecnologías web, adaptando soluciones multiplataforma con rendimiento, accesibilidad y experiencia de usuario.`,
        },
        {
            srcImg: "../../.././imagenes/secciones/sobre-mi/videojuegos.gif",
            altImg: "Videojuegos",
            encabezado: "Videojuegos",
            parrafo1: `Desarrollo <strong>videojuegos 2D con tecnologías web</strong> utilizando <strong>JavaScript</strong>, <strong>HTML5 Canvas</strong> y <strong>CSS3</strong>, creando sistemas de juego, mecánicas, animaciones, físicas e interfaces interactivas. Enfoco cada proyecto en el rendimiento, la optimización y la experiencia del jugador, construyendo experiencias dinámicas y funcionales para navegadores y entornos multiplataforma.`,
            parrafo2: ``,
        },
        {
            srcImg: "../../.././imagenes/secciones/sobre-mi/ui-ux.gif",
            altImg: "UI y UX",
            encabezado: "UI y UX",
            parrafo1: `Diseño <strong>interfaces de usuario (UI)</strong> y <strong>experiencias de usuario (UX)</strong> enfocadas en usabilidad, accesibilidad y diseño responsivo, creando productos digitales intuitivos, atractivos y funcionales. Analizo la interacción del usuario para estructurar interfaces claras, optimizar flujos de navegación y mejorar la experiencia, logrando soluciones visuales eficientes y centradas en las necesidades del usuario.`,
            parrafo2: ``,
        }
    ];

    // Agregando los primeros datos al iniciar el script
    imgCard.src = info[0].srcImg;
    imgCard.alt = info[0].altImg;
    encabezado.textContent = info[0].encabezado;
    contParrafo1.innerHTML = info[0].parrafo1;
    contParrafo2.innerHTML = info[0].parrafo2;


    // Cambiar datos del lado izquierdo
    botonIzquierdo.addEventListener("click", () => {
        // Forzar tamaño sin devolver valor del contenedor principal
        void contenedor.offsetWidth;

        // Dejando la medida responsiva
        contenedor.style.width = "";

        if (count > 0) {
            count--;

            imgCard.src = info[count].srcImg;
            imgCard.alt = info[count].altImg;
            encabezado.textContent = info[count].encabezado;
            contParrafo1.innerHTML = info[count].parrafo1;
            contParrafo2.innerHTML = info[count].parrafo2;
        } else {
            count = 0;
        }
    });

    // Cambiar datos del lado derecho
    botonDerecho.addEventListener("click", () => {
        // Forzar tamaño sin devolver valor del contenedor principal
        void contenedor.offsetWidth;

        // Dejando la medida responsiva
        contenedor.style.width = "";

        if (count < info.length - 1) {
            count++;

            imgCard.src = info[count].srcImg;
            imgCard.alt = info[count].altImg;
            encabezado.textContent = info[count].encabezado;
            contParrafo1.innerHTML = info[count].parrafo1;
            contParrafo2.innerHTML = info[count].parrafo2;
        } else {
            count = info.length - 1;
        }
    });
}

export default sigInfo;