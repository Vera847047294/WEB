/* ================================================
   Terra Microscape Studio - Main JavaScript
   ================================================ */

const TerraApp = (() => {
  'use strict';

  // State
  let isMenuOpen = false;
  let currentFilter = 'all';
  let currentStyle = 'all';

  // DOM Ready
  const init = () => {
    initMobileMenu();
    initStickyHeader();
    initBackToTop();
    initAccordion();
    initFilters();
    initForms();
    initSmoothScroll();
  };

  // Mobile Menu Toggle
  const initMobileMenu = () => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (!toggle || !navList) return;

    toggle.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      toggle.classList.toggle('active', isMenuOpen);
      navList.classList.toggle('active', isMenuOpen);
      
      // Accessibility
      toggle.setAttribute('aria-expanded', isMenuOpen);
      navList.setAttribute('aria-hidden', !isMenuOpen);
    });

    // Close menu on link click
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        isMenuOpen = false;
        toggle.classList.remove('active');
        navList.classList.remove('active');
      });
    });

    // Close menu on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 968 && isMenuOpen) {
        isMenuOpen = false;
        toggle.classList.remove('active');
        navList.classList.remove('active');
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        isMenuOpen = false;
        toggle.classList.remove('active');
        navList.classList.remove('active');
        toggle.focus();
      }
    });
  };

  // Sticky Header Shadow
  const initStickyHeader = () => {
    const header = document.querySelector('.header');
    if (!header) return;

    const handleScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  };

  // Back to Top Button
  const initBackToTop = () => {
    const button = document.querySelector('.back-to-top');
    if (!button) return;

    const handleScroll = () => {
      button.classList.toggle('visible', window.scrollY > 500);
    };

    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  };

  // FAQ Accordion
  const initAccordion = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (!question) return;

      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(i => i.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
        }

        // Accessibility
        faqItems.forEach(i => {
          const q = i.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', i.classList.contains('active'));
        });
      });

      // Keyboard support
      question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          question.click();
        }
      });
    });
  };

  // Product Filters
  const initFilters = () => {
    const filterPills = document.querySelectorAll('.filter-pill');
    const productCards = document.querySelectorAll('.product-card');
    
    if (!filterPills.length || !productCards.length) return;

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const filterType = pill.dataset.filterType;
        const filterValue = pill.dataset.filterValue;

        // Update active state
        const siblings = pill.parentElement.querySelectorAll('.filter-pill');
        siblings.forEach(s => s.classList.remove('active'));
        pill.classList.add('active');

        // Update filter state
        if (filterType === 'price') {
          currentFilter = filterValue;
        } else if (filterType === 'style') {
          currentStyle = filterValue;
        }

        // Apply filters
        applyFilters();
      });
    });

    const applyFilters = () => {
      productCards.forEach(card => {
        const cardPrice = card.dataset.price || 'entry';
        const cardStyle = card.dataset.style || 'forest';

        const priceMatch = currentFilter === 'all' || cardPrice === currentFilter;
        const styleMatch = currentStyle === 'all' || cardStyle === currentStyle;

        card.dataset.visible = (priceMatch && styleMatch).toString();
      });
    };
  };

  // Form Handling
  const initForms = () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Basic validation
        const errors = validateForm(data);
        
        if (Object.keys(errors).length > 0) {
          showFormMessage(form, errors, 'error');
          return;
        }

        // Simulate submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
          showFormMessage(form, { success: 'Thank you! We\'ll get back to you within 24 hours.' }, 'success');
          form.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 1500);
      });
    });
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name || data.name.trim().length < 2) {
      errors.name = 'Please enter your name';
    }

    if (!data.email || !isValidEmail(data.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (data.message && data.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const showFormMessage = (form, messageObj, type) => {
    // Remove existing message
    const existing = form.querySelector('.form-message');
    if (existing) existing.remove();

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    
    if (type === 'success') {
      messageEl.textContent = messageObj.success;
    } else {
      messageEl.innerHTML = Object.values(messageObj).join('<br>');
    }

    form.appendChild(messageEl);

    // Auto-remove success message after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        messageEl.remove();
      }, 5000);
    }
  };

  // Smooth Scroll for Anchor Links
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // Add to Cart (Shop Page)
  const addToCart = (productId, productName, price) => {
    // Simulate add to cart
    const btn = document.querySelector(`[data-product-id="${productId}"]`);
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = 'Added!';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 2000);
    }

    // Could integrate with actual cart logic here
    console.log(`Added to cart: ${productName} - $${price}`);
  };

  // Make addToCart available globally
  window.addToCart = addToCart;

  // Public API
  return {
    init,
    addToCart
  };
})();

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', TerraApp.init);
} else {
  TerraApp.init();
}
