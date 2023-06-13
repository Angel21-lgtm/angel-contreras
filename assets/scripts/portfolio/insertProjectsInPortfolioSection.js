"use strict";

// Insert the projects in the Portfolio section

const insertProjectsInPortfolioSection = (allProjects, dataProjects, arrayElements) => {

    let fragment = ""; 

    for(let i = 0; i < dataProjects.length; i++) {

        let position = 0;

        fragment += 
            `
            <div id="${dataProjects[i].idContainer}" class="${dataProjects[i].classButton} select-projects projects-container">

                <div class="flex justify-center">
                    <div class="projects col-w-6" style="display: ${dataProjects[i].displayStyle[0]};">
                        <img class="img-project col-w-12 col-h-12" src="${dataProjects[i].srcImg[position]}" alt="${dataProjects[i].altImg[position]}">
                        <h4 class="title-project none">
                            ${dataProjects[i].title[position]}
                        </h4>
                        <p class="description-project none">
                            ${dataProjects[i].description[position]}
                        </p>
                        <a class="link-project none" href="${dataProjects[i].linkProject[position]}"></a>
                    </div>

                    <div class="projects col-w-6 relative" style="display: ${dataProjects[i].displayStyle[1]};">
                        <img class="img-project col-w-12 col-h-12" src="${dataProjects[i].srcImg[position += 1]}" alt="${dataProjects[i].altImg[position]}">
                        <h4 class="title-project none">
                            ${dataProjects[i].title[position]}
                        </h4>
                        <p class="description-project none">
                            ${dataProjects[i].description[position]}
                        </p>
                        <a class="link-project none" href="${dataProjects[i].linkProject[position]}"></a>
                    </div>
                </div>

                <div class="flex justify-center align-items-center">
                    <div class="projects flex-wrap-project-1 col-w-4 relative" style="display: ${dataProjects[i].displayStyle[2]};">
                        <img class="img-project col-w-12 col-h-12" src="${dataProjects[i].srcImg[position += 1]}" alt="${dataProjects[i].altImg[position]}">
                        <h4 class="title-project none">
                            ${dataProjects[i].title[position]}
                        </h4>
                        <p class="description-project none">
                            ${dataProjects[i].description[position]}
                        </p>
                        <a class="link-project none" href="${dataProjects[i].linkProject[position]}"></a>
                    </div>

                    <div class="projects flex-wrap-project-2 col-w-4 relative" style="display: ${dataProjects[i].displayStyle[3]};">
                        <img class="img-project col-w-12 col-h-12" src="${dataProjects[i].srcImg[position += 1]}" alt="${dataProjects[i].altImg[position]}">
                        <h4 class="title-project none">
                            ${dataProjects[i].title[position]}
                        </h4>
                        <p class="description-project none">
                            ${dataProjects[i].description[position]}
                        </p>
                        <a class="link-project none" href="${dataProjects[i].linkProject[position]}"></a>
                    </div>

                    <div class="projects flex-wrap-project-3 col-w-4 relative" style="display: ${dataProjects[i].displayStyle[4]};">
                        <img class="img-project col-w-12 col-h-12" src="${dataProjects[i].srcImg[position += 1]}" alt="${dataProjects[i].altImg[position]}">
                        <h4 class="title-project none">
                            ${dataProjects[i].title[position]}
                        </h4>
                        <p class="description-project none">
                            ${dataProjects[i].description[position]}
                        </p>
                        <a class="link-project none" href="${dataProjects[i].linkProject[position]}"></a>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="projects col-w-12 relative" style="display: ${dataProjects[i].displayStyle[5]};">
                        <img class="img-project col-w-12 col-h-12" src="${dataProjects[i].srcImg[position += 1]}" alt="${dataProjects[i].altImg[position]}">
                        <h4 class="title-project none">
                            ${dataProjects[i].title[position]}
                        </h4>
                        <p class="description-project none">
                            ${dataProjects[i].description[position]}
                        </p>
                        <a class="link-project none" href="${dataProjects[i].linkProject[position]}"></a>
                    </div>
                </div>

            </div>
        `
    }

    allProjects.innerHTML = fragment;
    
    const seletcion = () => {

        // selection project object
        const [selectionProject, titleProjectSelection, imgProjectSelectionContainer, exitProjectselection, imgProjectSelection, eyeProject, descriptionProjectSelection] = arrayElements;

        // projects data
        const imgProject = document.querySelectorAll(".img-project"),
        titleProject = document.querySelectorAll(".title-project"),
        descriptionProject = document.querySelectorAll(".description-project"),
        linkProject = document.querySelectorAll(".link-project");

        // projects objects
        const projects = document.querySelectorAll(".projects");

        for(let i = 0; i < projects.length; i++) {
            projects[i].addEventListener("click", () => {
                // projects object
                selectionProject.classList.remove("selection-project-remove");
                selectionProject.classList.add("selection-project-add");
            
                // projects data
                exitProjectselection.addEventListener("click", () => {
                    selectionProject.classList.add("selection-project-remove");
                    selectionProject.classList.remove("selection-project-add");

                    titleProjectSelection.classList.remove("title-project-selection-add");
                    titleProjectSelection.classList.add("title-project-selection-remove");

                    imgProjectSelectionContainer.classList.remove("img-project-selection-container-add");
                    imgProjectSelectionContainer.classList.add("img-project-selection-container-remove");

                    exitProjectselection.classList.remove("exit-project-selection-add");
                    exitProjectselection.classList.add("exit-project-selection-remove");

                    imgProjectSelection.classList.remove("img-project-selection-add");
                    imgProjectSelection.classList.add("img-project-selection-remove");

                    eyeProject.classList.remove("eye-project-add");
                    eyeProject.classList.add("eye-project-remove");

                    descriptionProjectSelection.classList.remove("description-project-selection-add");
                    descriptionProjectSelection.classList.add("description-project-selection-remove");
                });

                titleProjectSelection.textContent = titleProject[i].textContent;
                titleProjectSelection.classList.add("title-project-selection-add");
                titleProjectSelection.classList.remove("title-project-selection-remove");

                imgProjectSelectionContainer.classList.add("img-project-selection-container-add");
                imgProjectSelectionContainer.classList.remove("img-project-selection-container-remove");

                exitProjectselection.classList.add("exit-project-selection-add");
                exitProjectselection.classList.remove("exit-project-selection-remove");

                imgProjectSelection.src = imgProject[i].src;
                imgProjectSelection.alt = imgProject[i].alt;
                imgProjectSelection.classList.add("img-project-selection-add");
                imgProjectSelection.classList.remove("img-project-selection-remove");

                eyeProject.href = linkProject[i].href;
                eyeProject.classList.add("eye-project-add");
                eyeProject.classList.remove("eye-project-remove");

                descriptionProjectSelection.textContent = descriptionProject[i].textContent;
                descriptionProjectSelection.classList.add("description-project-selection-add");
                descriptionProjectSelection.classList.remove("description-project-selection-remove");
                // projects data
            });
        }
    }

    return seletcion();
}

export {
    insertProjectsInPortfolioSection
}