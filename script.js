/* ============================================
   script.js — Scroll og animasjoner
   ============================================ */

// Nav: få bakgrunn ved scroll
const nav = document.getElementById('main-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// Scroll reveal
// rootMargin '0px 0px -50px 0px' sikrer at elementer nær toppen
// også trigges ved lokal fil-åpning
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

  reveals.forEach(el => observer.observe(el));
} else {
  // Fallback: vis alt umiddelbart
  reveals.forEach(el => el.classList.add('visible'));
}