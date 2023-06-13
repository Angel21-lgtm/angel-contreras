"use strict"; 

const writeDescripton = (containerOne, containerTwo, containerThree, classOne) => {

    const profesionalIn = ["Programador", "Desarrollador", "Front-End", "Back-End", "Full-Stack", "JavaScript", "Python", "CSS3", "HTML5", "Nodejs", "SQL", "Reactjs", "Expressjs", "Django", "Bootstrap", "WordPress", "PostgreSQL", "MongoDB",];
    let count = 0;
    containerOne.innerHTML += profesionalIn[count];

    const activeEventClick = () => {
        containerTwo.removeEventListener("click", activeEventClick);
        containerThree.classList.add(classOne);
        containerOne.style.opacity = "0";

        setTimeout(() => {
            containerTwo.addEventListener("click", activeEventClick);
            containerThree.classList.remove(classOne);
            containerOne.style.opacity = "1";
        }, 4000);

        setTimeout(() => {
            
            count ++;
            
            if(count > profesionalIn.length - 1) {
                count = 0;
                containerOne.innerHTML = profesionalIn[count];
            } else {
                containerOne.innerHTML = profesionalIn[count];
            }

            containerOne.style.opacity = "1";
        }, 3000);
    }
    
    containerTwo.addEventListener("click", activeEventClick);
}

export {
    writeDescripton
}