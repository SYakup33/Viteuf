
// --------------------------------burger menu-----------------------------------------


const menuToggle = document.getElementById("mobile-menu");
console.log(menuToggle);
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});
