"use strict";

/* main function of the web portfolio to 
import files and libraries the by sections */

// - library: insert elements js
import { insertLabelAsText } from "../library/js/insertElements.js";
import { goURLButtons } from "../library/js/goURLButtons.js";
import { textAnimation } from "../library/js/textAnimation.js";
// - library: insert elements js

// back end
    // about
    import { data } from "../back end/about/elementsOfDescriptionAboutMyWork.js";
    import { whoIAm } from "../back end/about/whoIAm.js";
    import { myCertifications } from "../back end/about/myCertifications.js";
    // about

    // portfolio
    import { dataProjects } from "../back end/portfolio/projects.js";
    import { projectSelection } from "../scripts/portfolio/projectSelection.js";
    // portfolio

    // services
    import { portfolioTemplateData, businessTemplateData } from "../back end/services/templatesData.js";
    // services

    // blog
    import { videoCourses } from "../back end/blog/videoCourses.js";
    import { post } from "../back end/blog/post.js";
    // blog
// back end

// loading page
import { loadPage } from "../scripts/loading/loadPage.js";
// loading page

// cursor
import { moveCursor } from "../scripts/cursor/moveCursor.js";
// cursor

// header
import { classStaticMenu } from "../scripts/header/staticMenu.js";
// header

// home
import { writeDescripton } from "../scripts/home/writeDescription.js";
import { socialNetwork } from "./home/socialNetwork.js";
// home

// about
import { insertWhoIAm } from "../scripts/about/insertWhoIAm.js";
import { mouseOver } from "../scripts/about/eventDescriptionMyWork.js";
import { nextWhoIAm } from "../scripts/about/nextWhoIAm.js";
import { insertDescriptionMyWork } from "../scripts/about/insertDescriptionMyWork.js";
import { insertMyCertifications } from "../scripts/about/insertMyCertifications.js";
// about

// portfolio
import { insertProjectsInPortfolioSection } from "../scripts/portfolio/insertProjectsInPortfolioSection.js";
import { socialNetworksBlog } from "../back end/blog/social-network-blog.js";
// portfolio

// templates
import { insertTemplates } from "../scripts/services/insertTemplates.js";
// templates

// blog
import { insertVideo } from "../scripts/blog/insertVideo.js";
import { goToVideo } from "../scripts/blog/goToVideo.js";
import { insertPost } from "../scripts/blog/insertPost.js";
// blog

// contact
import { validateForm } from "../scripts/contact/validateForm.js";
// contact

// scroll animations
import { scrollAnimations } from "./scroll animatons/scrollAnimations.js";
// scroll animations

const main = (function() {
    // loading
    const sections = document.querySelectorAll("SECTION");
    const loading = document.getElementById("loading");

    loadPage(loading, sections);
    // loading

    // - cursor
    const bodyContainer = document.getElementById("body-container");
    const cursor = document.getElementById("cursor");

    moveCursor(bodyContainer, cursor);
    // - cursor

    // - repo fixed
    const goRepoFixed = new goURLButtons("repo-fixed", "https://github.com/Angel21-lgtm/angel-contreras");
    goRepoFixed.goURL(goRepoFixed.container, goRepoFixed.link);
    // - repo fixed

    // - static menu
    const staticMenu = document.getElementById("static-menu");

    const buttonMenu = document.getElementById("button-menu");

    const body = document.querySelector("BODY");

    const newStaticMenu = new classStaticMenu("left-header", "right-header", staticMenu, body);
    const newButtonMenu = new classStaticMenu("on-menu", "off-menu", buttonMenu, body);

    newButtonMenu.scrollWindow();
    newButtonMenu.clickImgMenu(newStaticMenu.idContainer);
    newStaticMenu.clienHeigthSection();
    // - static menu

    // - home
        // title bracket
        const professionalIn = document.querySelector(".professional-in"),
            change = document.querySelector(".change"), 
            write = document.querySelector(".write");

        writeDescripton(professionalIn, change, write, "animation-write");
        // title bracket

        // my cv and my repo
        const downloadCv = new goURLButtons("download-cv", "./assets/cv/Miguel Ángel Contreras Osorio.pdf");

        // const virtualCV = new goURLButtons("virtual-cv", "");
        const repoGitHub = new goURLButtons("repo-github", "https://github.com/Angel21-lgtm/angel-contreras");

        downloadCv.goURL(downloadCv.container, downloadCv.link);
        // virtualCV.goURL(virtualCV.container, virtualCV.container);
        repoGitHub.goURL(repoGitHub.container, repoGitHub.link);

            // no project cv
            textAnimation.noProject("No project!", "#virtual-cv", "", "", "rgba(255, 13, 0, 0.9)", `0 0 10px rgba(255, 13, 0, 0.9), 0 0 40px rgba(255, 13, 0, 0.9),
            0 0 80px rgba(255, 13, 0, 0.9)`, "rgba(255, 13, 0, 0.9)");
            // no project cv
        // my cv and my repo
    
        // network social
        const socialContainer = document.getElementById("social-container");
        socialNetwork(socialContainer);
        // network social
    // - home

    // - about me
        // Button to change my profile description
        const myDescriptionText = document.querySelector(".my-description-text");   

        insertWhoIAm(myDescriptionText, whoIAm);

        const myDescriptionTextChilds = myDescriptionText.children;

        const containerWhoIAm = document.querySelectorAll(".container-who-i-am");

        for(let i = 0; i < myDescriptionTextChilds.length; i++) {
            let myDescriptionWhoIAm = new nextWhoIAm(containerWhoIAm[i], following[i], previous[i]);
            myDescriptionWhoIAm.followingAndPrevious(myDescriptionWhoIAm.container, myDescriptionWhoIAm.buttonOne, myDescriptionWhoIAm.buttonTwo);
        }
        // Button to change my profile description

        // Elements of description about my work
        const sectionsAboutMe = document.getElementById("sections-about-me");
        insertDescriptionMyWork(sectionsAboutMe, data);
        // Elements of description about my work

        // Description of my job
        const description = document.querySelectorAll(".description"),
            exitButton = document.querySelectorAll(".exit-button");
        mouseOver(description, exitButton);
        // Description of my job

        // my certifications
        const certificatesContainer = document.querySelector(".certificates-container");

        insertMyCertifications(certificatesContainer, myCertifications)
        // my certifications

        // go certification
        const goCertification = document.querySelectorAll(".go-certification");
        for(let i = 0; i < goCertification.length; i++) {
            goCertification[i].addEventListener("click", () => {
                window.open(myCertifications.link[i]);
            });
        }
        // go certification
    // - about me

    // - portfolio
    const subtitlePortfolio = document.querySelector(".subtitle-portfolio");
    insertLabelAsText(subtitlePortfolio, "h2", "Satisfy-Regular", "1.5rem", "var(--white)");

    const allProjects = document.getElementById("all-projects"),
        arrayElementsProjects = [
        document.querySelector(".selection-project"), document.querySelector(".title-project-selection"), 
        document.querySelector(".img-project-selection-container"), document.querySelector(".exit-project-selection"),
        document.querySelector(".img-project-selection"), document.querySelector(".eye-project"),
        document.querySelector(".description-project-selection")
    ];
    insertProjectsInPortfolioSection(allProjects, dataProjects, arrayElementsProjects);

    const selectProjectsSection = document.getElementById("select-projects-section");
    projectSelection(allProjects, selectProjectsSection);
    // - portfolio

    // - services
    const templates = document.querySelector(".templates"),
        buttonsTemplates = [document.getElementById("portfolio-template"), document.getElementById("business-template")];
    insertTemplates(templates, buttonsTemplates, [portfolioTemplateData, businessTemplateData]);
    // - services

    // - blog
    const twitter = new goURLButtons("twitter", socialNetworksBlog[0]);
    twitter.goURL(twitter.container, twitter.link);
    const youtube = new goURLButtons("youtube", socialNetworksBlog[1]);
    youtube.goURL(youtube.container, youtube.link);

        // insert video
        const blogVideo = document.querySelector(".blog-video");

        insertVideo(blogVideo, videoCourses.title, videoCourses.linkToCouse, videoCourses.amount);
        // insert video

        // go to video
        const goToVideoButton = document.querySelectorAll(".go-to-video");

        // goToVideo(goToVideoButton, videoCourses.linkToCouse);

            // no video
            textAnimation.noProject("No video!", ".go-to-video", "", "", "rgba(255, 13, 0, 0.9)", `0 0 10px rgba(255, 13, 0, 0.9), 0 0 40px rgba(255, 13, 0, 0.9),
            0 0 80px rgba(255, 13, 0, 0.9)`, "rgba(255, 13, 0, 0.9)");
            // no video
        // go to video

        // insert post and got to course
        const news = document.querySelector(".news");

        insertPost(news, post.img, post.title, post.link, post.hashtag, post.amount);

            // no post
            textAnimation.noProject("#Próximamente", ".hashtag-container-a", "rgba(255, 13, 0, 0.9)", `0 0 10px rgba(255, 13, 0, 0.9), 0 0 40px rgba(255, 13, 0, 0.9),
            0 0 80px rgba(255, 13, 0, 0.9)`, "", "", "");
            // no post
        // insert post and got to course
    // - blog

    // - contact
        // validate form
        const emailInput = document.getElementById("email-input"),
            nameInput = document.getElementById("name-input"),
            subjectInput = document.getElementById("subject-input"),
            messageTextarea = document.getElementById("message-textarea"),
            submitInput = document.getElementById("submit-input"), 
            errorDataForm = document.getElementById("error-data-form");

        validateForm(emailInput, nameInput, subjectInput, messageTextarea, submitInput, errorDataForm);
        // validate form
    // - contact

    // - scroll animations
    scrollAnimations();
    // - scroll animations


    // - animations
        // subtitle h2 text animations
        const subtitle = document.querySelectorAll("h2");
        for(let i = 0; i < subtitle.length; i++) {
            insertLabelAsText(subtitle[i], "h2", "Satisfy-Regular", "1.5rem", "var(--white)");
        }
        // subtitle h2 text animations

        // subtitle h3 text animations
        textAnimation.growingText("text-animation-container");
        // subtitle h3 text animatons

        // p text animations
        const paragraphs = document.querySelectorAll(".element-paragraph");
        for(let i = 0; i < paragraphs.length; i++) {
            insertLabelAsText(paragraphs[i], "p", "Satisfy-Regular", "1rem", "var(--white)");
        }
        // p text animations
    // - animations
})();