const searchbtn = document.getElementById("search");
const crosssearchbarbtn = document.getElementById("crosssearchbar");
const searchbar = document.getElementById("searchbar");
const MenuBar = document.getElementById("MenuBar");
const menuToggle = document.getElementById("menuToggle");

searchbtn.addEventListener("click", () => {
    searchbar.classList.remove("displayNone");
});
crosssearchbarbtn.addEventListener("click", () => {
    searchbar.classList.add("displayNone");
});

window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 1024) {
        menuToggle.addEventListener("click", () => {
            if (MenuBar.style.display == 'flex') {
                MenuBar.style.display = 'none';
            } else {
                MenuBar.style.display = 'flex';
            }
        });
    };
    // if (window.innerWidth >= 1024) {
    //     MenuBar.style.display = 'none';
    // }
});