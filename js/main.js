document.addEventListener('DOMContentLoaded', () => {
  
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');       // Abre o menu
      navToggle.classList.toggle('open'); // Anima o botão (vira X)
    });
  }

  // Scroll Suave e Fecha Menu ao Clicar
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        const headerOffset = document.querySelector('.site-header')?.offsetHeight || 70;
        
        window.scrollTo({
          top: target.offsetTop - headerOffset,
          behavior: 'smooth'
        });

        // Fecha menu mobile
        if (nav && nav.classList.contains('open')) {
          nav.classList.remove('open');
          navToggle.classList.remove('open');
        }
      }
    });
  });
  
  // Accordion FAQ
  const detailsList = document.querySelectorAll('.accordion details');
  detailsList.forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        detailsList.forEach(other => {
          if (other !== d) other.removeAttribute('open');
        });
      }
    });
  });
});

