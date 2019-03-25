var slideIndex = [1, 1, 1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"] 
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
<<<<<<< HEAD
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}
=======
>>>>>>> 8e2813efd6e436c1fb6174905ce1fb5caff4fe4b

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
<<<<<<< HEAD
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
=======
>>>>>>> 8e2813efd6e436c1fb6174905ce1fb5caff4fe4b
}