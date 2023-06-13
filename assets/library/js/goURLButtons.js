"use strict";

class goURLButtons {
    constructor(container, link) {
        this.container = container;
        this.link = link;
    }

    goURL(container, link) {
        this.container = container;
        this.link = link;
        const element = document.getElementById(container);
        element.addEventListener("click", () => {
            window.open(link);
        });
    }
}

export {
    goURLButtons
}