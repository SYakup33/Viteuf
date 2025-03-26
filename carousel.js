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

// ----------------------searchbar-------------------------------------------------------

function searchPage(){

let query = document.getElementById("searchInput").value.toLowerCase();
let pages = {
  "plat du jour" : "recipe_of_the_day.html",
  "nouilles au beurre": "recipe_of_the_day.html",
  "asian style" :"recipe_of_the_day.html",
  "ramen" :"recipe_of_the_day.html",
  "nouilles" : "recipe_of_the_day.html",
  "plat asiatique" : "recipe_of_the_day.html",
  "articles" : "recipe_of_the_day.html",
  "cuisinier des restes" : "anti-gaspi_page.html",
  "restes" : "anti-gaspi_page.html",
  "pas d'idée" : "anti-gaspi_page.html",
  "antigaspi" : "anti-gaspi_page.html",
  "anti-gaspi" : "anti-gaspi_page.html",
  "recettes" : "anti-gaspi_page.html",
  "about us": "about.html",
  "about": "about.html",
  "a propos" :"about.html",
  "pate carbo" : "https://www.ricardocuisine.com/recettes/8658-pates-carbonara-les-meilleures",
  "pates carbo": "https://www.ricardocuisine.com/recettes/8658-pates-carbonara-les-meilleures",
  "pâte carbo" : "https://www.ricardocuisine.com/recettes/8658-pates-carbonara-les-meilleures",
  "pâtes carbo" : "https://www.ricardocuisine.com/recettes/8658-pates-carbonara-les-meilleures",
  "petit chat" : "https://c.tenor.com/ruOMqWLaP-YAAAAd/tenor.gif",
}

if (pages[query]){
  window.location.href = pages[query];
} else {
  alert("Page non trouvée, tu as peut-être envie d'autre chose ?");
} return false;
}

// -----------------------------------------------------------------------------------------------

function searchSmallPage(){

  let query = document.getElementById("smallSearchInput").value.toLowerCase();
  let pages = {
    "plat du jour" : "recipe_of_the_day.html",
    "nouilles au beurre": "recipe_of_the_day.html",
    "asian style" :"recipe_of_the_day.html",
    "ramen" :"recipe_of_the_day.html",
    "nouilles" : "recipe_of_the_day.html",
    "plat asiatique" : "recipe_of_the_day.html",
    "articles" : "recipe_of_the_day.html",
    "cuisinier des restes" : "anti-gaspi_page.html",
    "restes" : "anti-gaspi_page.html",
    "pas d'idée" : "anti-gaspi_page.html",
    "antigaspi" : "anti-gaspi_page.html",
    "anti-gaspi" : "anti-gaspi_page.html",
    "recettes" : "anti-gaspi_page.html",
    "about us": "about.html",
    "about": "about.html",
    "a propos" :"about.html",
    "pâtes" : "https://www.ricardocuisine.com/recettes/8658-pates-carbonara-les-meilleures",
    "pates" : "https://www.ricardocuisine.com/recettes/8658-pates-carbonara-les-meilleures",
    "pate carbo" : "https://www.ricardocuisine.com/recettes/8658-pates-carbonara-les-meilleures",
    "pates carbo": "https://www.ricardocuisine.com/recettes/8658-pates-carbonara-les-meilleures",
    "pâte carbo" : "https://www.ricardocuisine.com/recettes/8658-pates-carbonara-les-meilleures",
    "pâtes carbo" : "https://www.ricardocuisine.com/recettes/8658-pates-carbonara-les-meilleures",
    "petit chat" : "https://c.tenor.com/ruOMqWLaP-YAAAAd/tenor.gif",
  }
  
  if (pages[query]){
    window.location.href = pages[query];
  } else {
    alert("Page non trouvée, tu as peut-être envie d'autre chose ?");
  } return false;
  }