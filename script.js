// Initialize Typed.js and ScrollReveal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('#typed-text', {
        strings: ['Transform Your Body,^1000\nTransform Your Life'],
        typeSpeed: 50,
        backSpeed: 30,
        startDelay: 1000,
        showCursor: true,
        cursorChar: '|',
        loop: true,
        contentType: 'html'
    });

    // Initialize ScrollReveal with window constructor
    const sr = window.ScrollReveal({
        distance: '60px',
        duration: 1500,
        delay: 400,
        reset: true
    });

    // Hero section animations
    sr.reveal('.reveal-hero', {
        delay: 200,
        origin: 'bottom',
        interval: 200
    });

    // Section titles
    sr.reveal('.reveal-title', {
        origin: 'top',
        interval: 200
    });

    // Service cards
    sr.reveal('.reveal-card', {
        origin: 'bottom',
        interval: 200
    });

    // Contact info items
    sr.reveal('.reveal-info', {
        origin: 'left',
        interval: 200
    });

    // Contact form
    sr.reveal('.reveal-form', {
        origin: 'right',
        delay: 400
    });

    // Map animation
    sr.reveal('.reveal-map', {
        origin: 'bottom',
        delay: 600
    });
});

// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

const btnPhone = document.getElementById('phone')
btnPhone.addEventListener('click', () => {

    const phoneNumber = document.getElementById('phone-number').innerText
    window.open(`tel:${phoneNumber}`, '_self');
    // console.log(phoneNumber)
})

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hide button when at the top
window.addEventListener('scroll', function () {
    const button = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        button.style.opacity = "1";
    } else {
        button.style.opacity = "0";
    }
});