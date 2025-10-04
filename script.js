const searchbtn = document.getElementById("search");
const crosssearchbarbtn = document.getElementById("crosssearchbar");
const searchbar = document.getElementById("searchbar");
const MenuBar = document.getElementById("MenuBar");
const menuToggle = document.getElementById("menuToggle");
const addCartbtn = document.getElementById("addCartbtn");
const cartPage = document.getElementById("cartPage");
const crossCart = document.getElementById("crossCart");

searchbtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchbar.classList.remove("displayNone");
    document.body.style.overflow = "hidden";
});
crosssearchbarbtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchbar.classList.add("displayNone");
    document.body.style.overflow = "auto";
});
document.addEventListener("click", () => {
    searchbar.classList.add("displayNone");
});
searchbar.addEventListener("click", (e) => {
    e.stopPropagation();
});

if(window.innerWidth >= 1024){
    addCartbtn.addEventListener("click",(e) => {
        e.stopPropagation();
        cartPage.classList.remove("displayNone");
        cartPage.classList.add("display");
        cartPage.style.opacity = '1';
        // document.body.style.overflow = "hidden";
    });
    crossCart.addEventListener('click',() => {
        cartPage.classList.add("displayNone");
        cartPage.classList.remove("display");
        // document.body.style.overflow = "auto";
    });
}

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