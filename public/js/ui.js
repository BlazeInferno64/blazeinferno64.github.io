const textArray = [
    "a passionate developer!",
    "a backend enthusiast!",
    "a frontend enthusiast!",
    "learning new things everyday!",
    "building cool stuff on the web!",
    "obsessed with clean UI!",
    "turning ideas into code!",
    "always learning, always improving!",
    "leveling up my skills!",
    "exploring new technologies!",
    "learning by building!",
    "curious about how things work!",
    "powered by coffee and code!",
    "coding past midnight!",
    "breaking things to fix them!",
    "building cool stuff, one commit at a time!",

];

const typingSpeed = 90;
const deletingSpeed = 40;
const delayAfterTyping = 1200;
const delayAfterDeleting = 400;

let charIndex = 0;
let isDeleting = false;
let currentText = "";
let lastIndex = -1;

// Selectors
const typedText = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const codeMenuBtn = document.querySelector(".gt-label .op");
const codeMenu = document.querySelector(".cd-set");
const codeMenuOptions = document.querySelectorAll(".cd-set ul li");

codeMenuOptions.forEach(entry => {
    entry.addEventListener("click", () => {
        codeMenuOptions.forEach(opt => opt.classList.remove("active"));
        entry.classList.add("active");
        egCode.style.whiteSpace = entry.dataset.wrap;
    });
});

codeMenuBtn.addEventListener("click", () => {
    codeMenu.classList.toggle("hidden");
    codeMenuBtn.classList.toggle("active");
});

/**
 * Gets a random index from the array, 
 * ensuring it's not the same as the previous one.
 */
function getRandomIndex() {
    let index;
    do {
        index = Math.floor(Math.random() * textArray.length);
    } while (index === lastIndex);
    lastIndex = index;
    return index;
}

/**
 * Main Typewriter Effect Logic
 */
function typeEffect() {
    // 1. Initialize text if empty
    if (!currentText) {
        currentText = textArray[getRandomIndex()];
    }

    // 2. Manage the cursor blinking state
    // We add a 'typing' class to stop the blink while moving
    if (cursorSpan) cursorSpan.classList.add("typing");

    if (!isDeleting) {
        // --- TYPING LOGIC ---
        typedText.textContent = currentText.slice(0, charIndex++);

        // Check if word is fully typed
        if (charIndex > currentText.length) {
            isDeleting = true;
            if (cursorSpan) cursorSpan.classList.remove("typing"); // Resume blink
            setTimeout(typeEffect, delayAfterTyping);
            return;
        }
    } else {
        // --- DELETING LOGIC ---
        typedText.textContent = currentText.slice(0, charIndex--);

        // Check if word is fully deleted
        if (charIndex < 0) {
            isDeleting = false;
            currentText = textArray[getRandomIndex()];
            charIndex = 0;
            if (cursorSpan) cursorSpan.classList.remove("typing"); // Resume blink
            setTimeout(typeEffect, delayAfterDeleting);
            return;
        }
    }

    // 3. Schedule the next frame
    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// Initialize the effect
document.addEventListener("DOMContentLoaded", () => {
    //alert(window.innerWidth);
    if (typedText) {
        typeEffect();
    }
});

document.addEventListener("click", (e) => {
    if (!codeMenu.contains(e.target) && !codeMenuBtn.contains(e.target)) {
        codeMenu.classList.add("hidden");
        codeMenuBtn.classList.remove("active");
    }
});