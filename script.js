const searchbtn = document.getElementById("search");
const crosssearchbarbtn = document.getElementById("crosssearchbar");
const searchbar = document.getElementById("searchbar");

searchbtn.addEventListener("click",() => {
    searchbar.classList.remove("displayNone");
});
crosssearchbarbtn.addEventListener("click",() => {
    searchbar.classList.add("displayNone");
});

// if(window.innerWidth <= 1024){
    const navdiv = document.querySelector(".navdiv");
    const MenuBar = document.getElementById("MenuBar");

    navdiv.addEventListener("click", () => {
        MenuBar.classList.remove("displayNone");
        MenuBar.classList.add("display");
    });
// }
























// // Container jisme siblings hain
// const container = document.getElementById('container');

// // Target div jisko replace karna hai
// const targetDiv = document.getElementById('target');

// // Icon create karo (example: font-awesome icon ya koi svg, yahan simple emoji use karte hain)
// const icon = document.createElement('span');
// icon.innerHTML = '🔥';  // Yahan aap apna icon HTML ya <img> use kar sakte hain
// icon.style.fontSize = '24px';  // Styling bhi kar sakte hain

// // Icon ko pehle child banane ke liye container ke start mein insert karo
// container.insertBefore(icon, container.firstChild);

// // Target div ko hata do agar aap replace karna chahte hain
// targetDiv.remove();
