"use strict";

const insertDescriptionMyWork = (container, data) => {

    let fragment = "";

    for(let i = 0; i < data.amount; i++) {
        fragment += `
            <div class="description col-w-5 relative">
                <div class="text-me col-w-12 col-h-12">
                    <img class="col-w-12 col-h-12" src="${data.src[i]}" alt="${data.alt[i]}">
                </div>
                <button class="exit-button exit-button-remove button-hover block absolute">
                    Exit
                </button>
                <p class="text-me-hover-1 text-me-hover-1-remove col-w-12 absolute">
                    ${data.title[i]} 
                </p>
                <p class="text-me-hover-2 text-me-hover-2-remove col-w-12 absolute">
                    ${data.text[i]} 
                </p>
            </div>
        `;
    }

    return container.innerHTML = fragment;
}

export {
    insertDescriptionMyWork
}