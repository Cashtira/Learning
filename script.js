document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('active');
    });
  }
});

let currentIndex = 0;
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

function showSlide(index) {
  if (index >= slide.length) currentIndex = 0;
  else if (index < 0) currentIndex = slide.length - 1;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
  showSlide(currentIndex + 1);
}, 4000);

showSlide(0)
