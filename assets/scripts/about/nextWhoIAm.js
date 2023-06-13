"use strict";

// Button to change my profile description

class nextWhoIAm {
    constructor(container, buttonOne, buttonTwo) {
        this.container = container,
        this.buttonOne = buttonOne,
        this.buttonTwo = buttonTwo;
    }

    followingAndPrevious(container, buttonOne, buttonTwo) {
        this.container = container,
        this.buttonOne = buttonOne,
        this.buttonTwo = buttonTwo;

        const containerChilds = container.children;
        let i = 0;

        buttonOne.addEventListener("click", () => {
            if(i === containerChilds.length - 1) {
                return containerChilds;
            } else {
                containerChilds[i].classList.add("selection-button-who-i-am");
                i++;
                containerChilds[i].classList.remove("selection-button-who-i-am");
            }
        });
    
    
        buttonTwo.addEventListener("click", () => {
            if(i === 0) {
                return containerChilds;
            } else {
                containerChilds[i].classList.add("selection-button-who-i-am");
                i--;
                containerChilds[i].classList.remove("selection-button-who-i-am");
            }
        });
    }
}

export {
    nextWhoIAm
}