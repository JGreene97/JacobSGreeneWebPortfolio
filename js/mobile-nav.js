/***********************
*
*	HTML QUERY SELECTION / VARIABLE DEFINITION
*
***********************/

let burgerMenu = document.querySelector(".burger-menu");
let burgerCheckbox = document.querySelector(".header-main-burger-checkbox");

/***********************
*
*	BURGER MENU FUNCTIONALITY
*
***********************/

burgerCheckbox.addEventListener("change", showMenu);
showMenu();

function showMenu() {

    burgerMenu.style.display = burgerCheckbox.checked ? "flex" : "none";

}

function closeMenu() {
    burgerMenu.style.display = "none";
    burgerCheckbox.checked = false;
}