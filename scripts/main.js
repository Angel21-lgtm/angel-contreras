/* FUNCIÓN PRINCIPAL PARA EJECUTAR MÓDULOS, FUNCIONES, ETC */

/* Importación de librerías */
// observer
import crearObserver from "../librerias/observer/observer.js";
// cards constructor
import CardsConstructor from "../librerias/cards-constructor/cardsConstructor.js";

/* Importación de módulos de la web */
// boton nav
import activarSpanBotonNav from "./secciones/boton-nav/activarSpanBotonNav.js";
// nav
import activarLinksNav from "./secciones/nav/activarLinksNav.js";
import seccionActual from "./secciones/nav/seccionActual.js";
// Inicio
import habilidadesInicio from "./secciones/inicio/habilidadesInicio.js";

/* Declaración de la función principal */
(function () {
    // boton nav
    const botonNav = document.getElementById("boton-nav"); // Botón del nav
    const spanBotonNav = document.querySelectorAll(".span-boton-nav"); // Líneas del nav
    const clasActivSpanNav = ["activar-span-boton-nav-1", "activar-span-boton-nav-2", "activar-span-boton-nav-3"]; // Clases de las líneas (span) del nav

    activarSpanBotonNav(botonNav, spanBotonNav, clasActivSpanNav); // Activar span del botón del nav

    // nav
    const linksNav = document.querySelectorAll(".links-nav"); // Links del nav

    activarLinksNav(botonNav, linksNav, "links-nav-pointer-events-true"); // Activar los links del nav

    const secciones = [document.getElementById("inicio"), document.getElementById("sobre-mi"), document.getElementById("habilidades"), document.getElementById("portafolio"), document.getElementById("servicios"), document.getElementById("contacto")]; // Secciones de la web
    const imgSeccionNav = document.querySelectorAll(".img-seccion-nav"); // Contenedor de las imágenes de los links

    seccionActual(secciones, linksNav, imgSeccionNav, "links-nav-pointer-events-active", "img-seccion-nav-active"); // Activar estilos de la sección actual

    // Inicio
    const btnHabInicio = document.getElementById("btn-hab-inicio"); // Botón para cambiar las habilidades de la sección inicio
    const habContInicio = document.getElementById("hab-cont-inicio"); // Contenedor que contiene el texto a cambiar

    habilidadesInicio(btnHabInicio, habContInicio, "sig-hab");

    /* ANIMACIONES OBSERVER */
    // observer opacity
    const crearObserverOpacity = crearObserver("observer-opacity-0", "observer-opacity-1", 0.8);

    const observerOpacity = document.querySelectorAll(".observer-opacity");

    observerOpacity.forEach(element => {
        crearObserverOpacity.observe(element);
    });

    // observer left
    const crearObserverLeft = crearObserver("observer-translate-left-opacity-0", "observer-translate-left-opacity-1");

    const observerLeft = document.querySelectorAll(".observer-left");

    observerLeft.forEach(element => {
        crearObserverLeft.observe(element);
    });

    // observer right
    const crearObserverRight = crearObserver("observer-translate-right-opacity-0", "observer-translate-right-opacity-1");

    const observerRight = document.querySelectorAll(".observer-right");

    observerRight.forEach(element => {
        crearObserverRight.observe(element);
    });
})();