/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
let sects = document.getElementsByTagName("section");
let navUl = document.getElementById("navbar__list");
let fragment = document.createDocumentFragment()
for (let sect of sects){
    let list = document.createElement("li");
    list.innerHTML = `<a href="#${sect.id}" class="menu__link">${sect.dataset.nav}</a>`;
    fragment.appendChild(list);
}
navUl.appendChild(fragment);
navUl.addEventListener("click", (click) => {
    click.preventDefault();
    let sectId = click.target.getAttribute("href");
    let scrollToSect = document.querySelector(sectId)
    scrollToSect.scrollIntoView({behavior: "smooth"});
})