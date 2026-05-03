/* ACTIVAR EL NAV */

const activarNav = (botonNav, nav, claseNav) => {
    if(!botonNav || !nav || claseNav === undefined) return;

    botonNav.addEventListener("click", ()=> {
        nav.classList.toggle(claseNav);
    });
}

export default activarNav;