const text = "Hi! I'm Christian";
const typingText = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function typeEffect() {
    if (isDeleting) {
        index--;
    } else {
        index++;
    }

    typingText.textContent = text.substring(0, index);

    if (!isDeleting && index === text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Wait before deleting
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTimeout(typeEffect, 500); // Wait before retyping
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

typeEffect();