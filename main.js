/* LOADER JS */
window.addEventListener("load", function () {
  document.querySelector(".loading").classList.add("hidden");
});



/* NAVIGATION MENU */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

/* SCROLLREVEAL ANIMATIONS */
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "right" });
ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__content h2", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__content p", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".header__btn", { ...scrollRevealOption, delay: 2000 });
ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__content p", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".about__btn", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".service__card", { duration: 1000, interval: 500 });
ScrollReveal().reveal(".facility__content .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".facility__content p", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".banner__content h2", { ...scrollRevealOption });
ScrollReveal().reveal(".banner__content p", { ...scrollRevealOption, delay: 500 });

/* GALLERY JS */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.set-bg').forEach(el => {
    const bg = el.getAttribute('data-setbg');
    if (bg) {
      el.style.backgroundImage = `url(${bg})`;
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
    }
  });
});

/* MENTOR CAROUSEL JS */
const grid = document.querySelector('.mentor__grid');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');
let autoScrollInterval;

if (!grid || !btnLeft || !btnRight) {
  console.error("Carousel elements not found:", { grid, btnLeft, btnRight });
} else {
  // Debug card visibility
  document.querySelectorAll('.mentor__card').forEach((card, index) => {
    card.style.display = 'flex';
    console.log(`Card ${index + 1} set to display: flex`);
  });

  // Debug image loading
  document.querySelectorAll('.mentor__card img').forEach((img, index) => {
    img.addEventListener('error', () => {
      console.error(`Failed to load image for card ${index + 1}: ${img.src}`);
    });
    img.addEventListener('load', () => {
      console.log(`Successfully loaded image for card ${index + 1}: ${img.src}`);
    });
  });

  // Update button state
  function updateButtonState() {
    btnLeft.disabled = grid.scrollLeft <= 0;
    btnRight.disabled = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 1; // Small buffer
    console.log(`Scroll position: ${grid.scrollLeft}, Client width: ${grid.clientWidth}, Scroll width: ${grid.scrollWidth}`);
  }

  // Manual scroll with buttons
  btnLeft.addEventListener('click', () => {
    grid.scrollBy({ left: -300, behavior: 'smooth' });
    setTimeout(updateButtonState, 600);
  });

  btnRight.addEventListener('click', () => {
    grid.scrollBy({ left: 300, behavior: 'smooth' });
    setTimeout(updateButtonState, 600);
  });

  // Keyboard navigation
  btnLeft.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      grid.scrollBy({ left: -300, behavior: 'smooth' });
      setTimeout(updateButtonState, 600);
    }
  });

  btnRight.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      grid.scrollBy({ left: 300, behavior: 'smooth' });
      setTimeout(updateButtonState, 600);
    }
  });

  // Auto-scroll functionality
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 1) {
        grid.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        grid.scrollBy({ left: 300, behavior: 'smooth' });
      }
      setTimeout(updateButtonState, 600);
    }, 3000);
    console.log("Auto-scroll started");
  }

  // Pause auto-scroll on hover
  grid.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
    console.log("Auto-scroll paused");
  });

  grid.addEventListener('mouseleave', () => {
    startAutoScroll();
    console.log("Auto-scroll resumed");
  });

  // Initial button state and start auto-scroll
  updateButtonState();
  startAutoScroll();
}

/* CONTACT JS */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/* THANK YOU MESSAGE JS */
const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYouMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  form.style.display = 'none';
  thankYou.style.display = 'block';
});