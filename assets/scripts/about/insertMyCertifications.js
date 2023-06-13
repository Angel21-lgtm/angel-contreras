"use strict";

const insertMyCertifications = (container, myCertifications) => {

    let fragment = ""; 

    for(let i = 0; i < myCertifications.amount; i++) {
        fragment += 
            `<div class="certificate-container col-w-5 flex align-items-center flex-column">
                <h4>
                    ${myCertifications.title[i]}
                </h4>
                <div class="certificate-img col-w-12 relative">
                    <span class="flex align-items-center justify-center certificate-img-hover block absolute col-w-12 col-h-12">
                        Descargar mi certificado
                    </span>
                    <img class="col-w-12 col-h-12" src="${myCertifications.srcImg[i]}" alt="${myCertifications.altImg[i]}">
                </div>
                <p class="col-w-12">
                    ${myCertifications.description[i]}
                </p>
                <div class="download-certificate col-w-11 flex align-items-center justify-space-between">
                    <a href="${myCertifications.srcPDF[i]}" download="${myCertifications.nameCertificate[i]}" class="download-certification span-button-hover">
                        Descargar
                        <span class="span-button">
                            
                        </span>
                    </a>
                    <button class="go-certification span-button-hover">
                        Ir
                    </button>
                </div>
            </div>`;
    }

    return container.innerHTML = fragment;
}

export {
    insertMyCertifications
}