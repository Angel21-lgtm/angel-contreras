/* FUNCIÓN PRINCIPAL PARA EJECUTAR MÓDULOS, FUNCIONES, ETC */
/* INICIAR APP, CARGAR DOM Y LOADING */

/* Importación de librerías */
// observer
import crearObserver from "../librerias/observer/observer.js";
// cards constructor
import CardsConstructor from "../librerias/cards-constructor/cardsConstructor.js";

/* Importación de módulos de la web */
// loading
import loading from "./secciones/loading/loadiing.js";
// boton nav
import activarSpanBotonNav from "./secciones/boton-nav/activarSpanBotonNav.js";
// nav
import activarLinksNav from "./secciones/nav/activarLinksNav.js";
import seccionActual from "./secciones/nav/seccionActual.js";
// Inicio
import habilidadesInicio from "./secciones/inicio/habilidadesInicio.js";
// Sobre Mi
import sigInfo from "./secciones/sobre-mi/sigInfo.js";

/* FUNCIÓN PRINCIPAL MAIN */
/* Ejecución de las las funciones, módulos, etc  */
const main = () => {
    /* SECCIONES */

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

    // Sobre Mi
    const contCardViewport = document.getElementById("cont-card-viewport"); // Contenedor principal
    const btnSigInfoLeft = document.getElementById("btn-sig-info-left"); // Botón izquierdo
    const btnSigInfoRight = document.getElementById("btn-sig-info-right"); // Botón derecho
    const imgCardViewport = document.getElementById("img-card-viewport"); // Imágen
    const encabezadoCardViewport = document.getElementById("encabezado-card-viewport"); // Encabezado
    const parrafoCardViewport1 = document.getElementById("parrafo-card-viewport-1"); // Párrafo 1
    const parrafoCardViewport2 = document.getElementById("parrafo-card-viewport-2"); // Párrafo 2 

    sigInfo(contCardViewport, btnSigInfoLeft, btnSigInfoRight, imgCardViewport, encabezadoCardViewport, parrafoCardViewport1, parrafoCardViewport2);



    /* ANIMACIONES OBSERVER */

    // observer opacity infinito
    const crearObserverOpacityInfinito = crearObserver("observer-opacity-0", "observer-opacity-1"); // Crear observer con animación opacidad

    const observerOpacityInfinito = document.querySelectorAll(".observer-opacity"); // Llamando a todos los elementos con esa clase para agregar el observer

    observerOpacityInfinito.forEach(element => {
        crearObserverOpacityInfinito.observe(element);
    }); // Corriendo a todos los elementos llamados y agregando el observer con  las clases seleccionadas

    // observer top infinito
    const crearObserverTopInfinito = crearObserver("observer-translate-top-opacity-0", "observer-translate-top-opacity-1"); // Crear observer con animación opacidad y transición arriba

    const observerTopInfinito = document.querySelectorAll(".observer-top"); // Llamando a todos los elementos con esa clase para agregar el observer

    observerTopInfinito.forEach(element => {
        crearObserverTopInfinito.observe(element);
    }); // Corriendo a todos los elementos llamados y agregando el observer con  las clases seleccionadas

    // observer right infinito
    const crearObserverRightInfinito = crearObserver("observer-translate-right-opacity-0", "observer-translate-right-opacity-1"); // Crear observer con animación opacidad y transición derecha

    const observerRightInfinito = document.querySelectorAll(".observer-right"); // Llamando a todos los elementos con esa clase para agregar el observer

    observerRightInfinito.forEach(element => {
        crearObserverRightInfinito.observe(element);
    }); // Corriendo a todos los elementos llamados y agregando el observer con  las clases seleccionadas

    // observer bottom infinito
    const crearObserverBottomInfinito = crearObserver("observer-translate-bottom-opacity-0", "observer-translate-bottom-opacity-1"); // Crear observer con animación opacidad y transición abajo

    const observerBottomInfinito = document.querySelectorAll(".observer-bottom"); // Llamando a todos los elementos con esa clase para agregar el observer

    observerBottomInfinito.forEach(element => {
        crearObserverBottomInfinito.observe(element);
    }); // Corriendo a todos los elementos llamados y agregando el observer con  las clases seleccionadas

    // observer left infinito
    const crearObserverLeftInfinito = crearObserver("observer-translate-left-opacity-0", "observer-translate-left-opacity-1"); // Crear observer con animación opacidad y transición izquierda

    const observerLeftInfinito = document.querySelectorAll(".observer-left"); // Llamando a todos los elementos con esa clase para agregar el observer

    observerLeftInfinito.forEach(element => {
        crearObserverLeftInfinito.observe(element);
    }); // Corriendo a todos los elementos llamados y agregando el observer con  las clases seleccionadas
};

/* INICIAR LOADING */
window.addEventListener("load", () => {
    // Elementos del loading
    const contLoading = document.querySelector(".cont-loading"); // Contenedor principal de todos los elementos
    const brLoading = document.querySelector(".br-loading"); // Barra de carga
    const porcentajeLoading = document.querySelector(".porcentaje-loading"); // Número con porcentaje

    loading(contLoading, brLoading, porcentajeLoading, "animacion-loading", "cont-loading-opacity-0", "cont-loading-display-none");
});

/* INICIAR APP */
document.addEventListener("DOMContentLoaded", main);