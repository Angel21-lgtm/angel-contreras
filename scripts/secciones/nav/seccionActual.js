/* ACTIVAR ESTILOS DE LA SECCIÓN ACTUAL */

const seccionActual = (secciones, linksNav, imgSeccionNav, clasLinksNav, clasImgNav) => {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;

            for(const seccion of secciones) { // Correr secciones
                const top = seccion.offsetTop - 100;
                const bottom = top + seccion.offsetHeight;

                if(scrollY >= top && scrollY < bottom) { // Condicionar el scroll
                    linksNav.forEach((link, index) => { // Correr los links
                        if(!link) return;
                        if(!imgSeccionNav[index]) return;

                        const href = link.getAttribute("href");

                        link.classList.toggle(clasLinksNav, href === "#" + seccion.id);

                        imgSeccionNav[index].classList.toggle(clasImgNav, href === "#" + seccion.id);
                    });
                }
            }
        });
        
    }

export default seccionActual;