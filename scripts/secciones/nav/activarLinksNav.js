/* ACTIVAR LOS LINKS DEL NAV */

const activarLinksNav = (botonNav, linksNav, clasLinksNav) => {
    if (!botonNav || clasLinksNav === undefined) return;

    botonNav.addEventListener("click", () => {
        linksNav.forEach(link => { // Correr los links
            if (!linksNav) return;

            link.classList.toggle(clasLinksNav);
        });
    });
}

export default activarLinksNav;