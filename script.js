// Bấm nút mở menu trên điện thoại
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

// Slide tự chạy
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

// Bấm nút hiện form
const modal = document.getElementById("joinModal");
const closeBtn = modal.querySelector(".close");
/*
const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
}); */ 

const projectsContainer = document.getElementById("projects-container");
projectsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("open-modal")) {
    modal.style.display = "flex";
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Fake notification
const form = modal.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // chặn gửi đi
  alert("Thank you for joining!"); 
  modal.style.display = "none";
  form.reset();
});

document.querySelector(".contact-form form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting us!");
  e.target.reset();
});

fetch("data/projects.json")
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("projects-container");
    projects.forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <button class="open-modal" data-project="${p.title}">Join</button>
      `;
      container.appendChild(card);
    });
  });

  fetch("data/timeline.json")
  .then(res => res.json())
  .then(events => {
    const container = document.getElementById("timeline-container");
    events.forEach(e => {
      const card = document.createElement("div");
      card.className = "timeline-card";
      card.innerHTML = `
        <h3>${e.year}</h3>
        <p>${e.event}</p>
      `;
      container.appendChild(card);
    });
  });