"use strict";

const goToVideo = (containers, links) => {
    for(let i = 0; i < containers.length; i++) {
        containers[i].addEventListener("click", () => {
            window.open(links[i]);
        });
        
    }
}

export {
    goToVideo
}