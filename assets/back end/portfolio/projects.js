"use strict";

// Information about my projects

const dataProjects = [
    // {
    //     idContainer: ["webs"],
    //     classButton: ["webs-button"],
    //     srcImg: [
    //         "./assets/img/portfolio/no project/no-project.jpg", 
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //     ],
    //     altImg: ["Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto",],
    //     title: ["Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto"],
    //     description: [
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto."
    //     ],
    //     linkProject: [
    //         "./assets/img/portfolio/no project/no-project.jpg", 
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //     ],
    // },
    // {
    //     idContainer: ["mobile-apps"],
    //     classButton: ["mobile-apps-button"],
    //     srcImg: [
    //         "./assets/img/portfolio/no project/no-project.jpg", 
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //     ],
    //     altImg: ["Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto",],
    //     title: ["Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto"],
    //     description: [
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto."
    //     ],
    //     linkProject: [
    //         "./assets/img/portfolio/no project/no-project.jpg", 
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //     ],
    // },
    {
        idContainer: ["videogames"],
        classButton: ["videogames-button"],
        srcImg: [
            "./assets/img/portfolio/no project/no-project.jpg", 
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
        ],
        altImg: ["Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto",],
        title: ["Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto"],
        description: [
            "Sin proyecto.", 
            "Sin proyecto.", 
            "Sin proyecto.", 
            "Sin proyecto.", 
            "Sin proyecto.", 
            "Sin proyecto."
        ],
        linkProject: [
            "./assets/img/portfolio/no project/no-project.jpg", 
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
        ],
        displayStyle: [
            "auto", 
            "none",
            "none",
            "none",
            "none",
            "none",
        ],
    },
    // {
    //     idContainer: ["animations"],
    //     classButton: ["animations-button"],
    //     srcImg: [
    //         "./assets/img/portfolio/no project/no-project.jpg", 
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //     ],
    //     altImg: ["Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto",],
    //     title: ["Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto", "Sin proyecto"],
    //     description: [
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto.", 
    //         "Sin proyecto."
    //     ],
    //     linkProject: [
    //         "./assets/img/portfolio/no project/no-project.jpg", 
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //         "./assets/img/portfolio/no project/no-project.jpg",
    //     ],
    // },
    {
        idContainer: ["react-course"],
        classButton: ["react-course-button"],
        srcImg: [
            "./assets/img/portfolio/react/contador-de-click's.jpg", 
            "./assets/img/portfolio/react/testimonios-freecodecamp.jpg",
            "./assets/img/portfolio/react/calculadora-basicjs.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
        ],
        altImg: ["Contador de Click's", "Testimonios freeCodeCamp", "Calculadora Basicjs", "Sin proyecto", "Sin proyecto", "Sin proyecto",],
        title: ["Contador de Click's", "Testimonios freeCodeCamp", "Calculadora Basicjs", "Sin proyecto", "Sin proyecto", "Sin proyecto"],
        description: [
            `Pequeño proyecto "Click Counter" desarrollado con React del curso de "freeCodeCamp".`, 
            `Es una pequeña copia sobre los testimonios de los alumnos del bootcamp "freeCodeCamp" sobre los cursos que imparten.`, 
            `Pequeño proyecto "Basicajs Calculator" de "freeCodeCamp"`, 
            "Sin proyecto.", 
            "Sin proyecto.", 
            "Sin proyecto."
        ],
        linkProject: [
            "https://contador-de-clicks.netlify.app/", 
            "https://copia-testimonios-freecodecamp.netlify.app/",
            "https://calculadora-basicajs.netlify.app/",
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
            "./assets/img/portfolio/no project/no-project.jpg",
        ],
        displayStyle: [
            "auto", 
            "auto",
            "auto",
            "none",
            "none",
            "none",
        ],
    },
]

export {
    dataProjects
}