// Configuration - Replace with your actual phone number
const COMPANY_PHONE = '7003222782'; // Replace with actual number (e.g., '919876543210' for India)

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// WhatsApp Buy Function
function buyWhatsApp(productName, size, price) {
    const message = `Hi, I would like to purchase:\n\nProduct: ${productName}\nSize: ${size}\nPrice: ${price}\n\nPlease confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${COMPANY_PHONE}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Call Now Function
function callNow() {
    window.location.href = `tel:+91-${COMPANY_PHONE}`;
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const whatsappMessage = `*New Contact Form Submission*\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nMessage: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${COMPANY_PHONE}?text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
        contactForm.reset();
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dynamic Year in Footer
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
