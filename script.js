// Future enhancements can go here
function toggleMenu(){
    document.querySelector(".nav-menu").classList.toggle("active");
}
// Fade-in animation on load
window.addEventListener("load", function(){
    document.querySelector(".hero-content").classList.add("active");
});
// Button click function
function explorePrograms(){
    alert("Explore Programs section coming soon 🚀");
}
function explorePrograms(){
    document.getElementById("programs").scrollIntoView({ 
        behavior: "smooth" 
    });
}
function toggleDropdown(element) {
    const menu = element.nextElementSibling;
    menu.style.display =
        menu.style.display === "flex" ? "none" : "flex";
}
window.addEventListener("load", function() {
    if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }
});