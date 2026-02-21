// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    const closeMenuBtn = document.querySelector('.close-menu');

    const navbar = document.querySelector('.navbar');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Only open the menu, don't toggle it closed
            if (!hamburger.classList.contains('active')) {
                hamburger.classList.add('active');
                mobileMenu.classList.add('active');
                navbar.classList.add('hidden-by-menu');
            }
        });
    }

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            navbar.classList.remove('hidden-by-menu');
        });
    });

    // Close menu when close button is clicked
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            navbar.classList.remove('hidden-by-menu');
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        } else if (currentPage === href) {
            link.classList.add('active');
        }
    });
});



