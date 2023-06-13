"use strict";

// event mouse description my work
const mouseOver = (container, button) => {
    for(let i = 0; i < container.length; i++) {
        let childsContainer = container[i].children;
        let firstChildContainer = container[i].firstElementChild;
        firstChildContainer.addEventListener("click", () => {
            childsContainer[childsContainer.length - 2].classList.remove("text-me-hover-1-remove");
            childsContainer[childsContainer.length - 2].classList.add("text-me-hover-1-add");
            childsContainer[childsContainer.length - 1].classList.remove("text-me-hover-2-remove");
            childsContainer[childsContainer.length - 1].classList.add("text-me-hover-2-add");
            button[i].classList.remove("exit-button-remove");
            button[i].classList.add("exit-button-add");
        });

        button[i].addEventListener("click", () => {
            const interval = setInterval(() => {
                childsContainer[childsContainer.length - 2].classList.add("text-me-hover-1-remove");
                childsContainer[childsContainer.length - 2].classList.remove("text-me-hover-1-add");
                childsContainer[childsContainer.length - 1].classList.add("text-me-hover-2-remove");
                childsContainer[childsContainer.length - 1].classList.remove("text-me-hover-2-add");
                button[i].classList.remove("exit-button-add");
                button[i].classList.add("exit-button-remove");
                clearInterval(interval);
            }, 200);

        });
    }
}

export {
    mouseOver
}