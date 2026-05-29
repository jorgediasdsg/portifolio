const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('[data-reveal]').forEach((item) => reveal.observe(item));

const heroCard = document.querySelector('.hero-card');
if (heroCard && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroCard.addEventListener('pointermove', (event) => {
    const rect = heroCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroCard.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
  });
  heroCard.addEventListener('pointerleave', () => {
    heroCard.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  });
}
