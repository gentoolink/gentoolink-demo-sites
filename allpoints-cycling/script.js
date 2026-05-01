/* All Points Cycling — JS */

document.addEventListener('DOMContentLoaded', function() {

  /* ── Mobile nav toggle ── */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      mainNav.classList.toggle('open');
    });
  }

  /* ── Active nav highlighting ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html') || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Accordion ── */
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
      const item = header.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-item').forEach(function(i) { i.classList.remove('open'); });
      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Scroll reveal animations ── */
  const revealEls = document.querySelectorAll('.scroll-reveal');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function(el) { observer.observe(el); });
  }

  /* ── Blog year filter ── */
  const yearBtns = document.querySelectorAll('.year-btn');
  const blogCards = document.querySelectorAll('.blog-card');
  if (yearBtns.length > 0) {
    yearBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        yearBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var year = btn.dataset.year;
        blogCards.forEach(function(card) {
          if (year === 'all' || card.dataset.year === year) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ── Contact form ── */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      if (formSuccess) formSuccess.style.display = 'block';
    });
  }

});
