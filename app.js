document.addEventListener('DOMContentLoaded', function() {
  // Load particles.js
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('Particles.js config loaded');
  });

  // Hover effect on cards
  const cards = document.querySelectorAll('.certificate-card, .project-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });

  // Button click effect
  const buttons = document.querySelectorAll('.verify-btn, .project-btn');
  buttons.forEach(button => {
    button.addEventListener('mousedown', () => button.style.transform = 'scale(0.95)');
    button.addEventListener('mouseup', () => button.style.transform = '');
    button.addEventListener('mouseleave', () => button.style.transform = '');
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Modal popup for certificate preview
  document.querySelectorAll('.certificate-card img').forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `<div class="modal-content"><img src="${img.src}" alt="Certificate"><span class="close">&times;</span></div>`;
      document.body.appendChild(modal);
      modal.querySelector('.close').onclick = () => modal.remove();
      modal.onclick = e => { if (e.target === modal) modal.remove(); };
    });
  });
});
