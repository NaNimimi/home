window.addEventListener('DOMContentLoaded', function() {
    var carouselItems = document.querySelectorAll('.carousel-item');
    var currentIndex = 0;
  
    function showItem(index) {
    
      for (var i = 0; i < carouselItems.length; i++) {
        carouselItems[i].classList.remove('active');
      }
  
     
      carouselItems[index].classList.add('active');
    }
  
    function nextItem() {
      currentIndex++;
      if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
      }
      showItem(currentIndex);
    }
  
    showItem(currentIndex);
    setInterval(nextItem, 3000);
  });

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  var slides = document.getElementsByClassName("slide");
  var currentSlide = 0;
  var nextSlideButton = document.getElementById("nextSlideButton");

  // Show the first two slides
  slides[currentSlide].classList.add("active");
  slides[(currentSlide + 1) % slides.length].classList.add("active");

  // Function to change the slide
  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    slides[(currentSlide + 1) % slides.length].classList.remove("active");
    currentSlide = (currentSlide + 2) % slides.length;
    slides[currentSlide].classList.add("active");
    slides[(currentSlide + 1) % slides.length].classList.add("active");
  }

  // Change the slide when the button is clicked
  nextSlideButton.addEventListener("click", function() {
    showNextSlide();
  });

  // Automatic slide change every 3 seconds
  setInterval(function() {
    showNextSlide();
  }, 3000);
});