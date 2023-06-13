"use strict";

// project selection

const projectSelection = (allProjectsContainer, buttonsContainer) => {
    const buttonsContainerChildren = buttonsContainer.children;

    const allProjectsChildren = allProjectsContainer.children,
        allProjectsChildrenClassList = [];
    
    for(let i = 0; i < allProjectsChildren.length; i++) {
        allProjectsChildrenClassList.push(allProjectsChildren[i].classList[0]);
    }

    for(let i = 0; i < buttonsContainerChildren.length; i++) {
        buttonsContainerChildren[i].addEventListener("click", e => {
            if(buttonsContainerChildren[i].id === "all-button") {
                buttonsContainerChildren[i].classList.add("button-add-select");
                for(let j = 0; j < buttonsContainerChildren.length; j++) {
                    if(buttonsContainerChildren[i].id != buttonsContainerChildren[j].id) {
                        buttonsContainerChildren[j].classList.remove("button-add-select");
                    }
                }
            } else if (buttonsContainerChildren[i].id === "videogames-button") {
                buttonsContainerChildren[i].classList.add("button-add-select");
                for(let j = 0; j < buttonsContainerChildren.length; j++) {
                    if(buttonsContainerChildren[i].id != buttonsContainerChildren[j].id) {
                        buttonsContainerChildren[j].classList.remove("button-add-select");
                    }
                }
            } else if (buttonsContainerChildren[i].id === "react-course-button") {
                buttonsContainerChildren[i].classList.add("button-add-select");
                for(let j = 0; j < buttonsContainerChildren.length; j++) {
                    if(buttonsContainerChildren[i].id != buttonsContainerChildren[j].id) {
                        buttonsContainerChildren[j].classList.remove("button-add-select");
                    }
                }
            }
        });
    }

    for(let i = 0; i < buttonsContainerChildren.length; i++) {
        document.getElementById(`${buttonsContainerChildren[i].id}`).addEventListener("click", () => {
            allProjectsChildrenClassList.forEach(data => {
                if(buttonsContainerChildren[i].id === "all-button") {
                    document.querySelector(`.${data}`).classList.add("select-projects");
                    document.querySelector(`.${data}`).classList.remove("remove-projects");
                } else if(data === buttonsContainerChildren[i].id) {
                    document.querySelector(`.${data}`).classList.add("select-projects");
                    document.querySelector(`.${data}`).classList.remove("remove-projects");
                } else {
                    document.querySelector(`.${data}`).classList.remove("select-projects");
                    document.querySelector(`.${data}`).classList.add("remove-projects");
                }
            });
        });
    }
}

export {
    projectSelection
}