// set sections as a variable
let sects = document.getElementsByTagName("section");
// set the nav ul as variable
let navUl = document.getElementById("navbar__list");
let fragment = document.createDocumentFragment();
// iterate over all the sections
for (let sect of sects){
    let list = document.createElement("li");
    // give li an anchor with an href to the sect id and the class for css style with a textcontent of sect name
    list.innerHTML = `<a href="#${sect.id}" class="menu__link">${sect.dataset.nav}</a>`;
    // add li to fragment
    fragment.appendChild(list);
}
// add the fragment to the nav ul
navUl.appendChild(fragment);
// add event listener for click event to nav ul
navUl.addEventListener("click", (click) => {
    // prevent defult anchor behavior
    click.preventDefault();
    // get sect id
    let sectId = click.target.getAttribute("href");
    let scrollToSect = document.querySelector(sectId)
    // make it scroll to sect
    scrollToSect.scrollIntoView({behavior: "smooth"});
});
// function that returns true or false debending if element is in viewport
function isVisible(ele){
    // get element location and dimensions
    let location = ele.getBoundingClientRect();
    // viewport dimensions
    let viewportHeight = window.innerHeight;
    let viewportWidth = window.innerWidth;
    // check if in viewport
    if (location.top >= 0 && location.left >= 0 && location.bottom <= viewportHeight && location.right <= viewportWidth){
        return true;
    }
    else{
        return false;
    }
}
// on scroll check for new active sect
document.addEventListener("scroll", () => {
    // if sect in viewport make active and deactivate the rest
    for (let sect of sects){
        if(isVisible(sect)){
            sect.classList.add("active");
        }
        else{
            sect.classList.remove("active");
        }
    }
});