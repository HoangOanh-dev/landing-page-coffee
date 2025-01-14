// Script.js - Starbucks Landing Page

// Function to update the main Starbucks image
function imgSlider(imageSrc) {
    const starbucksImg = document.querySelector('.starbucks');
    if (starbucksImg) {
        starbucksImg.src = imageSrc;
    }
}

// Function to change the color of the circular background
function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    if (circle) {
        circle.style.background = color;
    }
}

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form submission logic
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting

        // Simulate form submission success
        alert('Thank you for contacting us! We will get back to you shortly.');

        // Optionally clear the form
        contactForm.reset();
    });
}

// Sticky Navigation
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
