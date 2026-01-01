const slides = document.querySelectorAll(".hero .slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
setInterval(nextSlide, 5000);



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
    nav.style.zIndex = '999';
  }
}



function changeRoomSlide(button, direction) {
  
  const roomCard = button.closest('.room-card');
  const slides = roomCard.querySelectorAll('.room-slide');
  
  
  let activeIndex = -1;
  slides.forEach((slide, index) => {
    if (slide.classList.contains('active')) {
      activeIndex = index;
      slide.classList.remove('active');
    }
  });


  let newIndex = activeIndex + direction;
  if (newIndex >= slides.length) newIndex = 0;
  if (newIndex < 0) newIndex = slides.length - 1;


  slides[newIndex].classList.add('active');
}



setInterval(() => {
  const roomCards = document.querySelectorAll('.room-card');

  roomCards.forEach(card => {
    const slides = card.querySelectorAll('.room-slide');
    
    let activeIndex = -1;
    slides.forEach((slide, index) => {
      if (slide.classList.contains('active')) {
        activeIndex = index;
        slide.classList.remove('active');
      }
    });

    let newIndex = activeIndex + 1;
    if (newIndex >= slides.length) {
      newIndex = 0;
    }

    slides[newIndex].classList.add('active');
  });
}, 5000); 