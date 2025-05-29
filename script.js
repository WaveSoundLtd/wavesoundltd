console.log("Wavesound LTD site loaded.");
let slideIndex = 0;

function moveSlide(n) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  track.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);
