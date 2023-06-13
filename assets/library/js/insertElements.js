"use strict";

// insert two label as text
const insertLabelAsText = (selector, text, font, size, color) => {

    // create elements
    const firstElement = selector.firstElementChild, 
        lastElement =  selector.lastElementChild;

    firstElement.textContent = `<${text}>`,
    lastElement.textContent = `</${text}>`;

    firstElement.style.fontFamily = font, 
    firstElement.style.color = color, 
    firstElement.style.opacity = "0.5",
    firstElement.style.marginTop = "2rem",
    firstElement.style.fontSize = size,
    firstElement.style.textAlign = "center",
    firstElement.textShadow = "var(--text-shadow)",
    firstElement.backGroundColor = "red",

    lastElement.style.fontFamily = font,
    lastElement.style.color = color,
    lastElement.style.opacity = "0.5",
    lastElement.style.marginTop = "2rem",
    lastElement.style.fontSize = size,
    lastElement.style.testAlign = "center",
    lastElement.textShadow = "var(--text-shadow)";
}
export { 
    insertLabelAsText
}