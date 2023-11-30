//Hent knappen og ul
const listMenu = document.querySelector("#menuUl");
const burgerMenu = document.querySelector("#menuBurger");

//hent navbar i knapp function? 
//Tips tenk classList.toggle og classList.add/remove, mellom navbarHidden og navbarShow.
function showNav() {
    listMenu.classList.toggle("navbarHidden");
};

burgerMenu.addEventListener("click", showNav);

