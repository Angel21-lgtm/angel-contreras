/* ATIVAR LOS SPAN DE BOTÓN DEL NAV */

const activarSpanBotonNav = (botonNav, spanBotonNav, clasActivSpanNav) => {
    // Validar errores
    if (!botonNav || !spanBotonNav?.length) return;

    // Botón del nav
    botonNav.addEventListener("click", () => {        
        // Elementos span
        spanBotonNav.forEach((span, index) => {
            // Agregando clases de acuerdo a índices
            if(clasActivSpanNav[index]) span.classList.toggle(clasActivSpanNav[index]);
        });
    });
}

export default activarSpanBotonNav;