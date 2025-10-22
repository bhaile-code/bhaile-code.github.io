/* ============================================
   AI PRODUCT MANAGEMENT PORTFOLIO
   JavaScript for Interactions & Animations
   ============================================ */

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================
document.addEventListener('DOMContentLoaded', function() {

  // Smooth scroll for all navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Close mobile menu if open
        const navLinksContainer = document.querySelector('.nav-links');
        if (navLinksContainer.classList.contains('active')) {
          navLinksContainer.classList.remove('active');
        }

        // Scroll to target section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinksContainer.classList.toggle('active');

      // Update aria-expanded for accessibility
      const isExpanded = navLinksContainer.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('nav') && navLinksContainer.classList.contains('active')) {
      navLinksContainer.classList.remove('active');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // ============================================
  // FADE-IN ANIMATION ON SCROLL
  // ============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    observer.observe(element);
  });

  // ============================================
  // ACTIVE NAVIGATION HIGHLIGHT
  // ============================================
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', function() {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ============================================
  // DYNAMIC YEAR IN FOOTER
  // ============================================
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ============================================
  // PROJECT CARD INTERACTIONS
  // ============================================
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    // Add keyboard accessibility
    card.setAttribute('tabindex', '0');

    // Handle keyboard navigation
    card.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // You can add functionality here for project detail pages
        console.log('Project card selected:', this.querySelector('.project-title').textContent);
      }
    });
  });

  // ============================================
  // SCROLL TO TOP FUNCTIONALITY (optional)
  // ============================================
  // Uncomment if you want to add a scroll-to-top button later
  /*
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  */

  // ============================================
  // PERFORMANCE: LAZY LOADING IMAGES
  // ============================================
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }

  // ============================================
  // FORM VALIDATION (if you add a contact form)
  // ============================================
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Add your form handling logic here
      // For now, just log a message
      console.log('Form submitted');

      // You can integrate with services like Formspree, Netlify Forms, etc.
    });
  }

  // ============================================
  // CONSOLE MESSAGE (optional branding)
  // ============================================
  console.log(
    '%c👋 Welcome to my portfolio! %c\n' +
    'Interested in the code? Check out the repository on GitHub.',
    'color: #E07A5F; font-size: 16px; font-weight: bold;',
    'color: #6B6D76; font-size: 12px;'
  );

});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit rate of function execution
 * Useful for scroll and resize events
 */
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
