"use strict";

const moveCursor = (containerOne, containerTwo) => {
    // move
    containerOne.addEventListener("mouseover", e => {

        if(e.pageY >= (containerOne.clientHeight - 105)) containerTwo.style.top = `${containerOne.clientHeight - 105}px`; 
        else if(e.pageX >= (containerOne.clientWidth - 105)) containerTwo.style.left = `${containerOne.clientWidth - 105}px`; 
        else {
            containerTwo.style.top = `${e.pageY + 10}px`;
            containerTwo.style.left = `${e.pageX + 10}px`;
        }
    });

    // click
    window.addEventListener("mousedown", () => {
        containerTwo.style.animation = "cursor 0.1s linear";
        const intervalOne = setInterval(() => {
            containerTwo.style.boxShadow = "0 0 100px rgba(0, 255, 255, 0.9), 0 0 20px rgba(0, 255, 255, 0.9), 0 0 30px rgba(0, 255, 255, 0.9)";
            const intervalTwo = setInterval(() => {
                containerTwo.style.boxShadow = "none";
                clearInterval(intervalTwo);
            }, 200);

            clearInterval(intervalOne)
        }, 10);
    });

    window.addEventListener("mouseup", () => {
        containerTwo.style.animation = "";
    });
}

export {
    moveCursor
}