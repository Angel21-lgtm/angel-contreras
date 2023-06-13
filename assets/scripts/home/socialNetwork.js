"use strict";

const socialNetwork = (container) => {

    const links = [
        "https://www.sololearn.com/profile/18433402",
        "https://www.linkedin.com/in/miguel-%C3%A1ngel-contreras-osorio-1060a6225/",
        "https://github.com/Angel21-lgtm",
        "https://codepen.io/Angeal",

    ];
    const containerChildren = container.children;

    for(let i = 0; i < containerChildren.length; i++) {
        containerChildren[i].addEventListener("click", () => {
            window.open(links[i]);
        });
    }
}

export {
    socialNetwork
}