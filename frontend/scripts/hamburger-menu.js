
document.getElementById("hamburger-button").addEventListener("click", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    if (hamburgerMenu.classList.contains("hidden")) {
        hamburgerMenu.classList.remove("hidden");
    } else {
        hamburgerMenu.classList.add("hidden");
    }
});


window.addEventListener("load", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const hamburgerButton = document.getElementById("hamburger-button");

    if (window.matchMedia("(max-width: 750px)").matches) {
        hamburgerMenu.classList.add("hidden");
        hamburgerButton.classList.remove("hidden");
        hamburgerButton.classList.add("hamburger-icon-class");
    } else {
        hamburgerButton.classList.add("hidden");
    }
});


window.addEventListener("resize", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const hamburgerButton = document.getElementById("hamburger-button");

    if (window.matchMedia("(max-width: 750px)").matches){
        hamburgerButton.classList.remove("hidden");
        if (hamburgerMenu.classList.contains("hidden")){
            hamburgerMenu.classList.add("hidden");
        }
    } else {
        hamburgerButton.classList.add("hidden");
        hamburgerMenu.classList.remove("hidden");
    }
});
