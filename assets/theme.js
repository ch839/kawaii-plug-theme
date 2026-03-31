// The Kawaii Plug — Theme JavaScript

document.addEventListener('DOMContentLoaded', function() {

  // Mobile menu toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('open');
      this.classList.toggle('active');
    });
  }

  // Product gallery thumbnail click
  const thumbs = document.querySelectorAll('.product-gallery-thumbs img');
  thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      thumbs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Add to cart animation
  const addToCartButtons = document.querySelectorAll('.product-card-btn, .add-to-cart-btn');
  addToCartButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const originalText = this.textContent;
      this.textContent = 'Added!';
      this.style.background = '#6B5B95';
      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '';
      }, 1500);
    });
  });

  // Lazy load images with IntersectionObserver
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(function(img) {
      imageObserver.observe(img);
    });
  }
});
