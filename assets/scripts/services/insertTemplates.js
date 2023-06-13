// insert templates

const insertTemplates = (templatesContainer, buttonsTemplate, templateData) => {
    
    const insertElements = (templateData) => {
        let fragment = "";

        for(let i = 0; i < templateData.length; i++) {
            fragment += templateData[i];
        }

        templatesContainer.innerHTML = fragment;
    }

    insertElements(templateData[0]);

    const clickButtonTemplate = () => {
        for(let i = 0; i < buttonsTemplate.length; i++) {
            buttonsTemplate[i].addEventListener("click", () => {
                if(buttonsTemplate[i].id === "portfolio-template") {
                    buttonsTemplate[0].classList.add("button-add-select");
                    buttonsTemplate[1].classList.remove("button-add-select");
                    if(templatesContainer.firstElementChild.id != "portfolio-template-data") {
                        const childrenTemplates = templatesContainer.children;
                        for(let j = 0; j < childrenTemplates.length; j++) {
                            setTimeout(() => {
                                childrenTemplates[j].style.display= "none";
                            }, `${j + 1}00`);

                            setTimeout(() => {
                                insertElements(templateData[0]);
                            }, `${j + 2}00`);
                        }
                    }
                } else if (buttonsTemplate[i].id === "business-template") {
                    if(templatesContainer.firstElementChild.id != "business-template-data") {
                        buttonsTemplate[0].classList.remove("button-add-select");
                        buttonsTemplate[1].classList.add("button-add-select");
                        const childrenTemplates = templatesContainer.children;
                        for(let j = 0; j < childrenTemplates.length; j++) {
                            setTimeout(() => {
                                childrenTemplates[j].style.display= "none";
                            }, `${j + 1}00`);

                            setTimeout(() => {
                                insertElements(templateData[1]);
                            }, `${j + 2}00`);
                        }
                    }
                }
            });
            
        }
    }

    clickButtonTemplate();

}

export {
    insertTemplates
}