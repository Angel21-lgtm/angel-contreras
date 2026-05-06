/* ACTIVAR ESTILOS DE LA SECCIÓN ACTUAL */

const seccionActual = (secciones, linksNav, imgSeccionNav, clasLinkNav, clasImgNav) => {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        for (const seccion of secciones) { // Correr secciones
            const top = seccion.offsetTop - 100;
            const bottom = top + seccion.offsetHeight;

            if (scrollY >= top && scrollY < bottom) { // Condicionar el scroll
                linksNav.forEach((link, index) => { // Correr los links
                    if (!link) return;
                    if (!imgSeccionNav[index]) return;

                    const href = link.getAttribute("href");

                    imgSeccionNav[index].classList.toggle(clasImgNav, href === "#" + seccion.id);

                    link.classList.toggle(clasLinkNav, href === "#" + seccion.id);
                });
            }
        }
    });

}

export default seccionActual;