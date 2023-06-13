"use strict";

// text animations
class textAnimation {
    constructor(classContainer) {
        this.classContainer = classContainer;
    }

    static growingText(classContainer) {
        this.classContainer = classContainer;

        const containers = document.querySelectorAll(`.${classContainer}`);

        for(let i = 0; i < containers.length; i++) {

            const spanOfTheContainer = containers[i].children;

            for(let j = 0; j < spanOfTheContainer.length; j++) {

                const mouseover = () => {
                    spanOfTheContainer[j].removeEventListener("mouseover", mouseover);
                    spanOfTheContainer[j].classList.add("growing-text");

                    setTimeout(() => {
                        spanOfTheContainer[j].addEventListener("mouseover", mouseover);
                        spanOfTheContainer[j].classList.remove("growing-text");
                    }, 1000);
                }

                spanOfTheContainer[j].addEventListener("mouseover", mouseover);
                
            }
        }
    }

    static noProject(text, container, textColor, textShadowColor, backColor, boxShadowColor, borderStyle) {
        const documentContainer = document.querySelectorAll(container);

        for(let i = 0; i < documentContainer.length; i++) {
            const textContainer = documentContainer[i].textContent;

            const textColorContainer = documentContainer[i].style.color,
                textShadowContainer = documentContainer[i].style.textShadow,
                backgroundContainer = documentContainer[i].style.background,
                boxShadowContainer = documentContainer[i].style.boxShadow,
                borderContainer = documentContainer[i].style.border;
            
            documentContainer[i].addEventListener("mouseover", () => {
                documentContainer[i].textContent = text;

                documentContainer[i].style.color = textColor;
                documentContainer[i].style.textShadow = textShadowColor;
                documentContainer[i].style.background = backColor;
                documentContainer[i].style.boxShadow = boxShadowColor;
                documentContainer[i].style.border = borderStyle;
            });

            documentContainer[i].addEventListener("mouseout", () => {
                documentContainer[i].textContent = textContainer;

                documentContainer[i].style.color = textColorContainer;
                documentContainer[i].style.textShadow = textShadowContainer;
                documentContainer[i].style.background = backgroundContainer;
                documentContainer[i].style.boxShadow = boxShadowContainer;
                documentContainer[i].style.border = borderContainer;
            });
        }
    }
}

export {
    textAnimation
}