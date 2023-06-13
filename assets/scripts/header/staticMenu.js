"use strict";

// script for static menu navigation

class classStaticMenu {
    constructor(classOne, classTwo, idContainer, sections) {
        this.classOne = classOne;
        this.classTwo = classTwo;
        this.idContainer = idContainer;
        this.sections = sections;
    }

    scrollWindow() {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 0) {
                this.idContainer.classList.replace(this.classTwo, this.classOne);
            }else {
                this.idContainer.classList.replace(this.classOne, this.classTwo);
            }
        });
    }

    clickImgMenu(containerTwo) {
        this.idContainer.addEventListener("click", eventOne => {

            eventOne.stopPropagation();

            window.addEventListener("click", eventTwo => {
                if(eventTwo.target != containerTwo) {
                    this.idContainer.style.display = "flex";
                    containerTwo.style.transform = "translate(0)";
                }
            });

            this.idContainer.style.display = "none";
            containerTwo.style.transform = "translate(100%)";

            const containerTwoChildren = containerTwo.children;

            for(let i = 0; i < containerTwoChildren.length; i++) {
                containerTwoChildren[i].addEventListener("click", () => {
                    this.idContainer.style.display = "flex";
                    containerTwo.style.transform = "translate(0)";
                });
            }
        });
    }

    clienHeigthSection () {
        const containerChildren = this.idContainer.children;
        
        const idSections = {
            home: document.getElementById("home"),
            aboutMe: document.getElementById("about-me"),
            portfolio: document.getElementById("portfolio"),
            services: document.getElementById("services"),
            blog: document.getElementById("blog"),
            contact: document.getElementById("contact"),
        } 

        window.addEventListener("scroll", () => {
            const scrollWindow = window.scrollY;

            const idSectionsClientHeight = {
                homeHeight: idSections.home.clientHeight - 10,
                aboutMeHeight: idSections.home.clientHeight + idSections.aboutMe.clientHeight - 10,
                portfolioHeight: idSections.home.clientHeight + idSections.aboutMe.clientHeight + idSections.portfolio.clientHeight - 10,
                servicesHeight: idSections.home.clientHeight + idSections.aboutMe.clientHeight + idSections.portfolio.clientHeight + idSections.services.clientHeight - 10,
                blogHeight: idSections.home.clientHeight + idSections.aboutMe.clientHeight + idSections.portfolio.clientHeight + idSections.services.clientHeight + idSections.blog.clientHeight - 10,
                contactHeight: idSections.home.clientHeight + idSections.aboutMe.clientHeight + idSections.portfolio.clientHeight + idSections.services.clientHeight + idSections.blog.clientHeight + idSections.contact.clientHeight - 10,
            };

            // home
            if(scrollWindow >= 0 && scrollWindow <= idSectionsClientHeight.homeHeight) {                
                containerChildren[0].innerHTML = `
                    <span class="title-bracket absolute">
                        [</span><span>&#160;</span>
                            <a href="#home" class="title-bracket">Inicio</a>
                        <span>&#160;</span><span class="title-bracket">]
                    </span>
                `;

                let firstChild = containerChildren[1].firstElementChild;
                containerChildren[1].removeChild(firstChild);
                containerChildren[1].innerHTML = `
                    <a href="#about-me" class="">Acerca de mí</a>
                `;

                firstChild = containerChildren[2].firstElementChild;
                containerChildren[2].removeChild(firstChild);
                containerChildren[2].innerHTML = `
                    <a href="#portfolio" class="">Portafolio</a>
                `;

                firstChild = containerChildren[3].firstElementChild;
                containerChildren[3].removeChild(firstChild);
                containerChildren[3].innerHTML = `
                    <a href="#services" class="">Mis servicios</a>
                `;

                firstChild = containerChildren[4].firstElementChild;
                containerChildren[4].removeChild(firstChild);
                containerChildren[4].innerHTML = `
                    <a href="#blog" class="">Blog</a>
                `;

                firstChild = containerChildren[5].firstElementChild;
                containerChildren[5].removeChild(firstChild);
                containerChildren[5].innerHTML = `
                    <a href="#contact" class="">Contacto</a>
                `;
            // home
            // about
            } else if(scrollWindow > idSectionsClientHeight.homeHeight && scrollWindow <= idSectionsClientHeight.aboutMeHeight) {
                let firstChild = containerChildren[0].firstElementChild;
                containerChildren[0].removeChild(firstChild);
                containerChildren[0].innerHTML = `
                    <a href="#home" class="">Inicio</a>
                `;

                containerChildren[1].innerHTML = `
                    <span class="title-bracket absolute">
                        [</span><span>&#160;</span>
                            <a href="#about-me" class="title-bracket">Acerca de mí</a>
                        <span>&#160;</span><span class="title-bracket">]
                    </span>
                `;

                firstChild = containerChildren[2].firstElementChild;
                containerChildren[2].removeChild(firstChild);
                containerChildren[2].innerHTML = `
                    <a href="#portfolio" class="">Portafolio</a>
                `;

                firstChild = containerChildren[3].firstElementChild;
                containerChildren[3].removeChild(firstChild);
                containerChildren[3].innerHTML = `
                    <a href="#services" class="">Mis servicios</a>
                `;

                firstChild = containerChildren[5].firstElementChild;
                containerChildren[5].removeChild(firstChild);
                containerChildren[5].innerHTML = `
                    <a href="#blog" class="">Blog</a>
                `;

                firstChild = containerChildren[4].firstElementChild;
                containerChildren[4].removeChild(firstChild);
                containerChildren[4].innerHTML = `
                    <a href="#contact" class="">Contacto</a>
                `;
            // about
            // portfolio
            } else if(scrollWindow > idSectionsClientHeight.aboutMeHeight && scrollWindow <= idSectionsClientHeight.portfolioHeight) {
                let firstChild = containerChildren[0].firstElementChild;
                containerChildren[0].removeChild(firstChild);
                containerChildren[0].innerHTML = `
                    <a href="#home" class="">Inicio</a>
                `;

                firstChild = containerChildren[1].firstElementChild;
                containerChildren[1].removeChild(firstChild);
                containerChildren[1].innerHTML = `
                    <a href="#about-me" class="">Acerca de mí</a>
                `;

                containerChildren[2].innerHTML = `
                    <span class="title-bracket absolute">
                        [</span><span>&#160;</span>
                            <a href="#portfolio" class="title-bracket">Portafolio</a>
                        <span>&#160;</span><span class="title-bracket">]
                    </span>
                `;

                firstChild = containerChildren[3].firstElementChild;
                containerChildren[3].removeChild(firstChild);
                containerChildren[3].innerHTML = `
                    <a href="#services" class="">Mis servicios</a>
                `;

                firstChild = containerChildren[4].firstElementChild;
                containerChildren[4].removeChild(firstChild);
                containerChildren[4].innerHTML = `
                    <a href="#blog" class="">Blog</a>
                `;

                firstChild = containerChildren[5].firstElementChild;
                containerChildren[5].removeChild(firstChild);
                containerChildren[5].innerHTML = `
                    <a href="#contact" class="">Contacto</a>
                `;
            // portfolio
            // services
            } else if (scrollWindow > idSectionsClientHeight.portfolioHeight && scrollWindow <= idSectionsClientHeight.servicesHeight){
                let firstChild = containerChildren[0].firstElementChild;
                containerChildren[0].removeChild(firstChild);
                containerChildren[0].innerHTML = `
                    <a href="#home" class="">Inicio</a>
                `;

                firstChild = containerChildren[1].firstElementChild;
                containerChildren[1].removeChild(firstChild);
                containerChildren[1].innerHTML = `
                    <a href="#about-me" class="">Acerca de mí</a>
                `;

                containerChildren[2].innerHTML = `
                    <a href="#portfolio" class="">Portafolio</a>
                `;

                firstChild = containerChildren[3].firstElementChild;
                containerChildren[3].removeChild(firstChild);
                containerChildren[3].innerHTML = `
                    <span class="title-bracket absolute">
                        [</span><span>&#160;</span>
                            <a href="#services" class="title-bracket">Mis servicios</a>
                        <span>&#160;</span><span class="title-bracket">]
                    </span>
                `;

                firstChild = containerChildren[4].firstElementChild;
                containerChildren[4].removeChild(firstChild);
                containerChildren[4].innerHTML = `
                    <a href="#blog" class="">Blog</a>
                `;

                firstChild = containerChildren[5].firstElementChild;
                containerChildren[5].removeChild(firstChild);
                containerChildren[5].innerHTML = `
                    <a href="#contact" class="">Contacto</a>
                `;
            // services
            // blog
            } else if(scrollWindow > idSectionsClientHeight.servicesHeight && scrollWindow <= idSectionsClientHeight.blogHeight) {
                let firstChild = containerChildren[0].firstElementChild;
                containerChildren[0].removeChild(firstChild);
                containerChildren[0].innerHTML = `
                    <a href="#home" class="">Inicio</a>
                `;

                firstChild = containerChildren[1].firstElementChild;
                containerChildren[1].removeChild(firstChild);
                containerChildren[1].innerHTML = `
                    <a href="#about-me" class="">Acerca de mí</a>
                `;

                firstChild = containerChildren[2].firstElementChild;
                containerChildren[2].removeChild(firstChild);
                containerChildren[2].innerHTML = `
                    <a href="#portfolio" class="">Portafolio</a>
                `;

                firstChild = containerChildren[3].firstElementChild;
                containerChildren[3].removeChild(firstChild);
                containerChildren[3].innerHTML = `
                    <a href="#services" class="">Mis servicios</a>
                `;

                containerChildren[4].innerHTML = `
                    <span class="title-bracket absolute">
                        [</span><span>&#160;</span>
                            <a href="#blog" class="title-bracket">Blog</a>
                        <span>&#160;</span><span class="title-bracket">]
                    </span>
                `;

                firstChild = containerChildren[5].firstElementChild;
                containerChildren[5].removeChild(firstChild);
                containerChildren[5].innerHTML = `
                    <a href="#contact" class="">Contacto</a>
                `;
            // blog
            // contact
            } else if(scrollWindow > idSectionsClientHeight.blogHeight && scrollWindow <= idSectionsClientHeight.contactHeight) {
                let firstChild = containerChildren[0].firstElementChild;
                containerChildren[0].removeChild(firstChild);
                containerChildren[0].innerHTML = `
                    <a href="#home" class="">Inicio</a>
                `;

                firstChild = containerChildren[1].firstElementChild;
                containerChildren[1].removeChild(firstChild);
                containerChildren[1].innerHTML = `
                    <a href="#about-me" class="">Acerca de mí</a>
                `;

                firstChild = containerChildren[2].firstElementChild;
                containerChildren[2].removeChild(firstChild);
                containerChildren[2].innerHTML = `
                    <a href="#portfolio" class="">Portafolio</a>
                `;

                firstChild = containerChildren[3].firstElementChild;
                containerChildren[3].removeChild(firstChild);
                containerChildren[3].innerHTML = `
                    <a href="#services" class="">Mis servicios</a>
                `;

                firstChild = containerChildren[4].firstElementChild;
                containerChildren[4].removeChild(firstChild);
                containerChildren[4].innerHTML = `
                    <a href="#blog" class="">Blog</a>
                `;

                containerChildren[5].innerHTML = `
                    <span class="title-bracket absolute">
                        [</span><span>&#160;</span>
                            <a href="#contact" class="title-bracket">Contacto</a>
                        <span>&#160;</span><span class="title-bracket">]
                    </span>
                `;
            }
            // contact
        });
    }
}

export {
    classStaticMenu
}