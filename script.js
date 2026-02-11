/**
 * Portfolio Logic
 * Replicating Harris Tekom's interactive elements
 */

// 1. Cursor Glow Effect
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Interactive expansion for cursor
const interactives = document.querySelectorAll('a, button, .profile-container, .project-card, .stat-card, .skill-card');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorGlow.style.width = '800px';
        cursorGlow.style.height = '800px';
    });
    el.addEventListener('mouseleave', () => {
        cursorGlow.style.width = '600px';
        cursorGlow.style.height = '600px';
    });
});

// 2. Scroll Reveal Animation
const revealElements = document.querySelectorAll("[data-reveal]");
const reveal = function () {
    for (let i = 0; i < revealElements.length; i++) {
        const isElementVisible = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;
        if (isElementVisible) {
            revealElements[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// 3. Navbar Scrolled State
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 4. Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// 5. Active Link Tracking
const navAnchors = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section, header');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navAnchors.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});

// 6. Smooth Scroll Fix
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
