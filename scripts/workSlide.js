// Description: This script is used to create an interactable gallery. This is
//    accomplished using an array of "slides" which correspond to HTML elements.
//    The contents of those elements can then be cycled through by iterating
//    the array or selecting a specific index.

// Set default slide to display on load.
$(document).ready(function () {
  showSlides(1);
})

// Set default variable for slide index to 1.
var slideIndex = 1;

// Iterate forward through the gallery.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Set the gallery index to a specific slide.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// This function contains the functionality for cycling through the slides.
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("details-slide"); // Array of slides
  var dots = document.getElementsByClassName("dot");

  // When iterating forward through the array. If n iterates past the last element in the 
  //  slides array, set the slide index to the first slide.
  if (n > slides.length) {slideIndex = 1}  

  // When iterating backwards through the array. If n iterates past the first element in the 
  //  slides array, set the slide index to the last slide. 
  if (n < 1) {slideIndex = slides.length}

  // Set all slides display to none.
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  // Set all dots in gallery navigator to inactive.
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // Set active slide.
  if(slides[slideIndex-1] != null) {
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
  }
}