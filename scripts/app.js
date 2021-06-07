var darkMode = document.getElementById("dark-mode");
var bodyContainer = document.getElementById("bodyContainer");
var textLogo = document.querySelector("#GIFOS_1");
var searchIcon = document.getElementById("search-icon");
var createBtn = document.getElementById("create-gif");

darkMode.addEventListener("click", () => {
    if (darkMode.textContent === 'Modo Nocturno')
    darkMode.textContent = 'Modo Diurno';
    else darkMode.textContent = 'Modo Nocturno';

    if (darkMode.textContent === "Modo Diurno")
    bodyContainer.classList.replace("body-container","darkMode");
    else bodyContainer.classList.replace("darkMode", "body-container")

    if (bodyContainer.classList.contains("darkMode"))
    textLogo.setAttribute("fill", "#ffff");
    else textLogo.setAttribute("fill", "#572EE5")

    if (bodyContainer.classList.contains("darkMode")) {
        searchIcon.src = "/images/icon-search-modo-noct.svg";
    }else searchIcon.src = "/images/icon-search.svg";

    if (bodyContainer.classList.contains("darkMode")) {
        createBtn.src = "/images/CTA-crear-gifo-modo-noc.svg";
    }else createBtn.src = "/images/button-crear-gifo.svg";
});

createBtn.addEventListener("mouseenter", () => {
    if(bodyContainer.classList.contains("darkMode"))
    createBtn.src = "/images/CTA-crear-gifo-hover-modo-noc.svg";
});
createBtn.addEventListener("mouseleave", () => {
    if(bodyContainer.classList.contains("darkMode"))
    createBtn.src = "/images/CTA-crear-gifo-modo-noc.svg";
})