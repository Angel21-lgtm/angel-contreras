"use strict";

const loadPage = (loadingContainer, sections) => {
    for(let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    window.addEventListener("load", () => {
        loadingContainer.style.transition = "2s";
        loadingContainer.style.opacity = "0";
        loadingContainer.style.zIndex = "-1";

        for(let i = 0; i < sections.length; i++) {
            sections[i].style.display = "block";
        }
    });
}

export {
    loadPage
}