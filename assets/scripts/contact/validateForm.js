"use strict";

const validateForm = (emailInput, nameInput, subjectInput, messageTextarea, submitInput, errorData) => {

    submitInput.addEventListener("click", e => {

        const promise = (data, message) => {
            return new Promise((resolve, reject) => {
                if(data) resolve(data);
                else reject(message);
            });
        }

        // email
        const emailValue = emailInput.value;

        promise(emailValue != "" && emailValue.includes("@") && emailValue.includes("."), "¡Sin correo!").then(() => {

            emailInput.value = emailValue.toLowerCase();

            // name
            return promise(nameInput.value != "", "¡Sin nombre!");
        
        }).then(() => {  

            // subject
            return promise(subjectInput.value != "", "¡Sin asunto!");
        }).then(() => {

            // message
            return promise(messageTextarea.value != "", "¡Sin mensaje!");
        }).catch(error => {
            e.preventDefault();

            errorData.style.animation = "error-data-form 1s";
            errorData.style.right = "0";
            errorData.innerHTML = error;
        });
    });
}

export {
    validateForm
}