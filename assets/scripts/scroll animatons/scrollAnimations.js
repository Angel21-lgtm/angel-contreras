"use strict";

const home = document.getElementById("home"), 
    aboutMe = document.getElementById("about-me"),
    portfolio = document.getElementById("portfolio"),
    services = document.getElementById("services"),
    blog = document.getElementById("blog"),
    contact = document.getElementById("contact");

const textAnimationContainer = document.querySelectorAll(".text-animation-container");

const titles = textAnimationContainer[0].children;
for(let i = 0; i < titles.length; i++) {
    titles[i].style.opacity = "0";
}

const textAnimation = (textAnimationContainer) => {
    const childrenTitleHome = textAnimationContainer.children;         
    
    // title
    let i = 0;
    setTimeout(() => {
        const intervalOne = setInterval(() => {                
            if(i === childrenTitleHome.length) {
                for(i = 0; i < childrenTitleHome.length - 1; i++) {
                    childrenTitleHome[i].classList.remove("growing-text");
                }
                clearInterval(intervalOne);
            } else {
                childrenTitleHome[i].classList.add("growing-text");
                childrenTitleHome[i].style.opacity = "1";
                i++;  
            }
        }, 100);

        const intervalTwo = setInterval(() => {
            
            if(i < 0) {
                const intervalThree = setInterval(() => {
                    for(i = 0; i < childrenTitleHome.length - 1; i++) {
                        childrenTitleHome[i].classList.remove("growing-text");
                    }
                    clearInterval(intervalThree);
                }, 400);
                clearInterval(intervalTwo);
            } else {
                childrenTitleHome[i].classList.add("growing-text");
                i--;  
            }
        }, 200);
    }, 400);
    // title
}

const opacityAnimationScroll = (scrollWindow, container, boleanData) => {
    if(scrollWindow > boleanData) container.style.opacity = "1";
}

const translateAnimationScroll = (scrollWindow, container, boleanData, timeTransition) => {
    if(scrollWindow > boleanData) {
        if(timeTransition <= 0) container.style.transition = "1s";
        else container.style.transition = `${timeTransition}s`;

        container.style.opacity = "1";
        container.style.transform = `translateY(0)`;
        container.style.zIndex = "0";
    }
}

const transitionOriginal  = (container, timeTransition, delayTransition) => {
    const timeOut = setTimeout(() => {
        for(let i = 0; i < container.length; i++) {
            container[i].style.transition = `${timeTransition}s`;
            container[i].style.transitionDelay = `${delayTransition}s`;
        }
        clearTimeout(timeOut);
    }, 10);
}

const scrollAnimations = () => {
    // home
    window.addEventListener("load", () => {
        textAnimation(textAnimationContainer[0]);
    });
    // home

    window.addEventListener("scroll", () => {
        const scrollWindow = window.scrollY;
        // home
            // my social network
            opacityAnimationScroll(scrollWindow, document.querySelector(".element-paragraph"), (home.clientHeight / 2 - 50));
            opacityAnimationScroll(scrollWindow, document.getElementById("social-container"), home.clientHeight / 2);
            // my social network            
            
            // buttons cv repo 
            const buttonsCvRepoScroll = document.querySelectorAll(".buttons-cv-repo-scroll");
            for(let i = 0; i < buttonsCvRepoScroll.length;  i++){
                translateAnimationScroll(scrollWindow, buttonsCvRepoScroll[i], (home.clientHeight / 2) - 200, i);
                if(i === buttonsCvRepoScroll.length - 1) {
                    transitionOriginal(buttonsCvRepoScroll, "0.5", "0");
                }
            }
            // buttons cv repo 
        // home

        // about
            // my description text
            opacityAnimationScroll(scrollWindow, document.querySelector(".my-description-text-1"), home.clientHeight);
            opacityAnimationScroll(scrollWindow, document.querySelector(".my-description-text-2"), home.clientHeight);
            // my description text

            // text who i am
            const textWhoIAm = document.querySelectorAll(".text-who-i-am");
            for(let i = 0; i < textWhoIAm.length;  i++){
                translateAnimationScroll(scrollWindow, textWhoIAm[i], home.clientHeight + 500, i);
                if(i === textWhoIAm.length - 1) {
                    transitionOriginal(textWhoIAm, "0.5", "0");
                }
            }
            // text who i am

            // technologies text
            opacityAnimationScroll(scrollWindow, document.querySelector(".technologies-text-1"), home.clientHeight + (aboutMe.clientHeight / 3 + 200));
            opacityAnimationScroll(scrollWindow, document.querySelector(".technologies-text-2"), home.clientHeight + (aboutMe.clientHeight / 3 + 250));
            // technologies text

            // description my work (technologies)
            const description = document.querySelectorAll(".description");
            for(let i = 0; i < description.length;  i++){
                translateAnimationScroll(scrollWindow, description[i], home.clientHeight + (aboutMe.clientHeight / 3 + 350), i);
            }
            // description my work (technologies)

            // text certifications
            if(window.screen.availWidth >= 300 && window.screen.availWidth <= 800) {
                opacityAnimationScroll(scrollWindow, document.querySelector(".text-certifications-1"), home.clientHeight + (aboutMe.clientHeight - 2000));
                opacityAnimationScroll(scrollWindow, document.querySelector(".text-certifications-2"), home.clientHeight + (aboutMe.clientHeight - 2000));
            } else {
                opacityAnimationScroll(scrollWindow, document.querySelector(".text-certifications-1"), home.clientHeight + (aboutMe.clientHeight - 1300));
                opacityAnimationScroll(scrollWindow, document.querySelector(".text-certifications-2"), home.clientHeight + (aboutMe.clientHeight - 1300));
            }
            // text certifications

            // certificates
            const certificateContainer = document.querySelectorAll(".certificate-container");
            for(let i = 0; i < certificateContainer.length;  i++){
                translateAnimationScroll(scrollWindow, certificateContainer[i], home.clientHeight + (aboutMe.clientHeight - 1300), i);
                if(i === certificateContainer.length - 1) {
                    transitionOriginal(certificateContainer, "0.3", "0");
                }
            }
            // certificates
        // about
        
        // portfolio
            // my projects text
            opacityAnimationScroll(scrollWindow, document.querySelector(".my-projects-text-1"), home.clientHeight + aboutMe.clientHeight);
            opacityAnimationScroll(scrollWindow, document.querySelector(".my-projects-text-2"), home.clientHeight + aboutMe.clientHeight);
            // my projects text

            // sections portfolio buttons container
            const projectButton = document.querySelectorAll(".project-button");
            for(let i = 0; i < projectButton.length;  i++){
                translateAnimationScroll(scrollWindow, projectButton[i], home.clientHeight + aboutMe.clientHeight + 200, i);
                if(i === projectButton.length - 1) {
                    transitionOriginal(projectButton, "0.5", "0");
                }
            }
            // sections portfolio buttons container

            // all projects
            const projectsContainer = document.querySelectorAll(".projects-container");
            for(let i = 0; i < projectsContainer.length;  i++){
                translateAnimationScroll(scrollWindow, projectsContainer[i], home.clientHeight + aboutMe.clientHeight + 400, i);
                if(i === projectsContainer.length - 1) {
                    transitionOriginal(projectsContainer, "all ease-in 1.5", "0");
                }
            }
            // all projects

            // projects
            const projects = document.querySelectorAll(".projects");
            for(let i = 0; i < projects.length;  i++){
                translateAnimationScroll(scrollWindow, projects[i], home.clientHeight + aboutMe.clientHeight + 400, 1);
                if(i === projects.length - 1) {
                    transitionOriginal(projects, "all ease-out 0.2", "0");
                }
            }
            // projects
        // portfolio

        // services
            // services text
            opacityAnimationScroll(scrollWindow, document.querySelector(".text-services-1"), home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight);
            opacityAnimationScroll(scrollWindow, document.querySelector(".text-services-2"), home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight);
            // services text

            // templates buttons
            const buttonTemplate = document.querySelectorAll(".button-template");
            for(let i = 0; i < buttonTemplate.length;  i++){
                translateAnimationScroll(scrollWindow, buttonTemplate[i], home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + 400, i);
                if(i === buttonTemplate.length - 1) {
                    transitionOriginal(buttonTemplate, "0.5", "0");
                }
            }
            // templates buttons
        // services

        // blog
            // social network blog
            opacityAnimationScroll(scrollWindow, document.querySelector(".social-network-blog-container"), home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight);
            // social network blog

            // text video
            opacityAnimationScroll(scrollWindow, document.querySelector(".text-video-1"), home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight);
            opacityAnimationScroll(scrollWindow, document.querySelector(".text-video-2"), home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight);
            // text video

            // video container
            const videoContainer = document.querySelectorAll(".video-container");
            for(let i = 0; i < videoContainer.length;  i++){
                translateAnimationScroll(scrollWindow, videoContainer[i], home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight + 400, i);
                if(i === videoContainer.length - 1) {
                    transitionOriginal(videoContainer, "all ease 0.2", "0");
                }
            }
            // video container

            // text post
            if(window.screen.availWidth >= 300 && window.screen.availWidth <= 800) {
                opacityAnimationScroll(scrollWindow, document.querySelector(".text-post-1"), home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight + (blog.clientHeight / 2 - 350));
                opacityAnimationScroll(scrollWindow, document.querySelector(".text-post-2"), home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight + (blog.clientHeight / 2 - 350));
            } else {
                opacityAnimationScroll(scrollWindow, document.querySelector(".text-post-1"), home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight + (blog.clientHeight / 2 - 100));
                opacityAnimationScroll(scrollWindow, document.querySelector(".text-post-2"), home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight + (blog.clientHeight / 2 - 100));
            }
            // text post

            // post
            const post = document.querySelectorAll(".post");
            for(let i = 0; i < post.length;  i++){
                translateAnimationScroll(scrollWindow, post[i], home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight + (blog.clientHeight / 2 + 200), i);
                if(i === post.length - 1) {
                    transitionOriginal(post, "all ease 0.2", "0");
                }
            }
            // post
        // blog

        // contact
            // text contact
            opacityAnimationScroll(scrollWindow, document.querySelector(".text-contact-1"), home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight + blog.clientHeight);
            opacityAnimationScroll(scrollWindow, document.querySelector(".text-contact-2"), home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight + blog.clientHeight);
            // text contact

            // form
            const formInput = document.querySelectorAll(".form-input")
            for(let i = 0; i < formInput.length;  i++){
                translateAnimationScroll(scrollWindow, formInput[i], home.clientHeight + aboutMe.clientHeight + portfolio.clientHeight + services.clientHeight + blog.clientHeight + 400, i);
                if(i === formInput.length - 1) {
                    transitionOriginal(formInput, "linear 0.1", "1");
                }
            }
            // form
        // contact
    });
}

export {
    scrollAnimations
}