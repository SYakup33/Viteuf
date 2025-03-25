// ---------------carousel------------------------

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
} 

// -----------------------carousel about what----------------------------

let otherSlideIndex = 1;
showOtherSlides(otherSlideIndex);

function plusOtherSlides(n) {
  showOtherSlides(otherSlideIndex += n);
}

function currentOtherSlide(n) {
  showOtherSlides(otherSlideIndex = n);
}
function showOtherSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider_card");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {otherSlideIndex = 1}
  if (n < 1) {otherSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[otherSlideIndex-1].style.display = "block";
  dots[otherSlideIndex-1].className += " active";
} 


// --------------------------------burger menu-----------------------------------------



const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});