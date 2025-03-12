const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("hamburger-menus");

// Toggle menu visibility on click
hamburger.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Hide menu when clicking outside
document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
});

// Hide menu when resizing to PC screen
window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        menu.style.display = "none";
    }
});
