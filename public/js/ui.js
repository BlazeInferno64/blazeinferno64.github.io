const textArray = [
    "a passionate developer!",
    "a frontend enthusiast!",
    "learning new things every day!",
    "building cool stuff on the web!",
    "obsessed with clean UI!",
    "turning ideas into code!"
];

const typingSpeed = 70;
const deletingSpeed = 40;
const delayAfterTyping = 1200;
const delayAfterDeleting = 400;

let charIndex = 0;
let isDeleting = false;
let currentText = "";
let lastIndex = -1;

const typedText = document.querySelector(".typed-text");

function getRandomIndex() {
    let index;
    do {
        index = Math.floor(Math.random() * textArray.length);
    } while (index === lastIndex);
    lastIndex = index;
    return index;
}

function typeEffect() {
    if (!currentText) {
        currentText = textArray[getRandomIndex()];
    }

    if (!isDeleting) {
        typedText.textContent = currentText.slice(0, charIndex++);
        if (charIndex > currentText.length) {
            setTimeout(() => isDeleting = true, delayAfterTyping);
            return;
        }
    } else {
        typedText.textContent = currentText.slice(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            currentText = textArray[getRandomIndex()];
            setTimeout(() => {}, delayAfterDeleting);
        }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();
