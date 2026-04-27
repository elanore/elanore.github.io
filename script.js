// ===================== DOM READY =====================
document.addEventListener('DOMContentLoaded', () => {

  // ===================== MOBILE MENU =====================
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // Close menu on link click
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });


  // ===================== SCROLL SHADOW =====================
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  // ===================== REVEAL ANIMATION =====================
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));


  // ===================== SKILL BARS =====================
  const skillBars = document.querySelectorAll('.skill-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width;
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => skillObserver.observe(bar));


  // ===================== EXPERIENCE TABS =====================
  const navItems = document.querySelectorAll('.exp-nav-item');
  const panels = document.querySelectorAll('.exp-panel');

  navItems.forEach(item => {
    item.addEventListener('click', () => {

      const target = item.getAttribute('data-target');

      navItems.forEach(n => n.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      item.classList.add('active');

      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });


  // ===================== FORM SUBMIT =====================
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      // Let Formspree handle the submission normally
      // Form will POST to Formspree and redirect on success
      successMsg.style.display = 'block';
      
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 4000);
    });
  }


  // ===================== STAGGER ANIMATION =====================
  const staggerGroups = [
    '.services-grid .service-card',
    '.projects-grid .project-card'
  ];

  staggerGroups.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * 80}ms`;
    });
  });

});
