/* FUNCIÓN PRINCIPAL PARA EJECUTAR MÓDULOS, FUNCIONES, ETC */

/* Importación de librerías */

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

    const secciones = [document.getElementById("inicio"), document.getElementById("sobre-mi"), document.getElementById("habilidades"), document.getElementById("portafolio"), document.getElementById("contacto")]; // Secciones de la web
    const imgSeccionNav = document.querySelectorAll(".img-seccion-nav"); // Contenedor de las imágenes de los links

    seccionActual(secciones, linksNav, imgSeccionNav, "links-nav-pointer-events-active", "img-seccion-nav-active"); // Activar estilos de la sección actual

    // Inicio
    const btnHabInicio = document.getElementById("btn-hab-inicio"); // Botón para cambiar las habilidades de la sección inicio
    const habContInicio = document.getElementById("hab-cont-inicio"); // Contenedor que contiene el texto a cambiar

    habilidadesInicio(btnHabInicio, habContInicio, "sig-hab");
})();