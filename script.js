
// 1. INTRO ANIMATION
window.addEventListener("load", () => {
    const intro = document.getElementById("intro");

    setTimeout(() => {
        intro.classList.add("hide");
    }, 3000);
});

// 2. MOBILE NAVIGATION
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// 3. TYPING ANIMATION
const words = [
    "VIDEO EDITOR",
    "VIDEOGRAPHER",
    "VISUAL CREATOR",
    "CREATIVE ARTIST"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typingText");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1300;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// 4. SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

// 5. FOOTER YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();
