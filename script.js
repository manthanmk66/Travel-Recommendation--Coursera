// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('active');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
};

// Testimonial Slider
const testimonialSlider = () => {
    const slider = document.getElementById('testimonial-slider');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    
    if (slider && prevBtn && nextBtn) {
        const testimonials = slider.querySelectorAll('.testimonial');
        let currentIndex = 0;
        
        // Hide all testimonials except the first one
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        // Show next testimonial
        nextBtn.addEventListener('click', () => {
            testimonials[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % testimonials.length;
            testimonials[currentIndex].style.display = 'block';
        });
        
        // Show previous testimonial
        prevBtn.addEventListener('click', () => {
            testimonials[currentIndex].style.display = 'none';
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            testimonials[currentIndex].style.display = 'block';
        });
    }
};

// FAQ Accordion
const faqAccordion = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
};

// Form Validation and Submission
const formHandler = () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
                formMessage.textContent = 'Please fill in all fields';
                formMessage.className = 'form-message error';
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Please enter a valid email address';
                formMessage.className = 'form-message error';
                return;
            }
            
            // Simulate form submission (in a real project, this would send data to a server)
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.className = 'form-message success';
            
            // Reset form
            contactForm.reset();
            
            // Clear success message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get email input
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate subscription (in a real project, this would send data to a server)
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            newsletterForm.reset();
        });
    }
};

// Smooth Scrolling for Internal Links
const smoothScroll = () => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

// Destination Cards Hover Effect
const destinationCards = () => {
    const cards = document.querySelectorAll('.recommendation-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
};

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    testimonialSlider();
    faqAccordion();
    formHandler();
    smoothScroll();
    destinationCards();
    
    // Add animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.transform = 'translateY(-3px)';
            ctaButton.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.transform = 'translateY(0)';
            ctaButton.style.boxShadow = 'none';
        });
    }
});