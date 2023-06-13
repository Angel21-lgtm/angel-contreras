"use strict";

const insertWhoIAm = (container, whoIAm) => {

    let fragment = "";

    for(let i = 0; i < whoIAm.amount; i++) {
        fragment += `
            <div class="col-w-5 text-who-i-am flex flex-column align-items-center">
                <h4 class="who-i-am-title">"${whoIAm.title[i]}"</h4><br>
                <div class="relative container-who-i-am relative">
                    <p class="who-i-am-paragrph">
                        ${whoIAm.text[i][0]}
                    </p>
                    <p class="col-w-12 who-i-am-paragrph selection-button-who-i-am">
                        ${whoIAm.text[i][1]}
                    </p>
                    <p class="col-w-12 who-i-am-paragrph selection-button-who-i-am"> 
                        ${whoIAm.text[i][2]}
                    </p>
                </div>
                <div class="flex justify-space-evenly align-items-center following-and-previous">
                    <button id="previous" class="button-hover col-h-12">
                        Anterior
                    </button>
                    <button id="following" class="button-hover col-h-12">
                        Siguiente
                    </button>
                </div>
            </div>
        `;
    }

    return container.innerHTML = fragment;
}

export {
    insertWhoIAm
}