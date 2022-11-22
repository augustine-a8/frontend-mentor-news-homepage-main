const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const bodyElement = document.getElementById("body");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
        bodyElement.setAttribute("data-focus", "true");
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        bodyElement.setAttribute("data-focus", "false");
    }
});
