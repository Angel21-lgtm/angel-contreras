/* PEQUEÑO SISTEMA DEDICADO A LA CONSTRUCCIÓN DE CARDS EN POO */

class CardsConstructor {
    constructor(encabezado, texto, srcImg) {
        this.encabezado = encabezado;
        this.texto = texto;
        this.srcImg = srcImg;
    }

    contenedor(clases) {
        const article = document.createElement("article");

        clases.forEach(clase => {
            article.classList.add(clase);
        });
    }
}

export default CardsConstructor;