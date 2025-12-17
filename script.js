// Select all the slide elements you created in HTML
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  // 1. Remove the 'active' class from ALL slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // 2. Wrap around logic (so it goes back to start if at the end)
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  // 3. Add the 'active' class to the CURRENT slide
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Auto-play slider every 5 seconds
setInterval(nextSlide, 5000);

// Simple Mobile Menu Toggle (keeps your menu working)
function toggleMenu() {
  const nav = document.querySelector('.desktop-nav');
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.width = '100%';
    nav.style.background = 'white';
    nav.style.textAlign = 'center';
    nav.style.padding = '20px 0';
    nav.style.boxShadow = '0 5px 5px rgba(0,0,0,0.1)';
  }
}