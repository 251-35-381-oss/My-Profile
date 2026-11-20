 
// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

// Close Menu After Clicking Link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuBtn.querySelector("i").classList.add("fa-bars");
        menuBtn.querySelector("i").classList.remove("fa-xmark");
    });
});

// Dark and Light Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});

// Typing Animation
const words = [
    "Software Engineering Student",
    "Web Developer",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
    const currentWord = words[wordIndex];

    typing.textContent = currentWord.substring(0, charIndex);

    if (!deleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } 
    else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } 
    else {
        deleting = !deleting;

        if (!deleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, 1000);
    }
}

typeEffect();

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    this.reset();
});
 