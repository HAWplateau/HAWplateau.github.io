document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slideshow-container img");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
      });
    }
  
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 4000);
  });