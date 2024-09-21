
//Declare global variablaes
var projectMenu;
var projectMenuLinks;
var numProjectCategories;

window.onload = function() {
    //Set navbar to be visible
    navbar = document.getElementsByClassName("navbar")[0];
    console.log(navbar);
    navbar.style.visibility = "visible";
    console.log(navbar);

    //Initialize global variables
    projectMenu = document.getElementById("navbar");
    projectMenuLinks = projectMenu.children;
    //console.log(projectMenuLinks);

    //Add an event listener to each item in projectMenuLinks
    for (let i=0; i<numProjectCategories; i++) {
        projectMenuLinks[i].addEventListener("click", function() {
            resetProjectMenu();
            setActiveMenu(projectMenuLinks[i]);
        });
    }
}

function resetProjectMenu() {
    for (let i=0; i<numProjectCategories; i++) {
        if (projectMenuLinks[i].classList.contains("active")) {
            projectMenuLinks[i].classList.remove("active");
        }
    }
}

function setActiveMenu(menuItem) {
    menuItem.classList.add("active");
}