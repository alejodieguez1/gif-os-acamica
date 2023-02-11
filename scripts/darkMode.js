const darkMode = document.getElementById("dark-mode");
const bodyContainer = document.getElementById("bodyContainer");
const textLogo = document.querySelector("#GIFOS_1");
const searchIcon = document.getElementById("search-icon");
const createBtn = document.getElementById("create-gif");

// let mediaQueryObj = window.matchMedia("(prefers-color-scheme: dark)");
// let isDarkMode = mediaQueryObj.matches; //
// document.getElementById("status").textContent = "Is Dark Mode :  " + isDarkMode;

darkMode.addEventListener("click", () => {
  if (bodyContainer.classList.contains("body-container")) {
    bodyContainer.classList.replace("body-container", "darkMode");
    darkMode.textContent = "Modo Diurno";
    textLogo.setAttribute("fill", "#ffff");
    searchIcon.src = "/images/icon-search-modo-noct.svg";
    createBtn.src = "/images/CTA-crear-gifo-modo-noc.svg";
  } else {
    textLogo.setAttribute("fill", "#572EE5");
    searchIcon.src = "/images/icon-search.svg";
    createBtn.src = "/images/button-crear-gifo.svg";
    bodyContainer.classList.replace("darkMode", "body-container");
    darkMode.textContent = "Modo Nocturno";
  }
});

createBtn.addEventListener("mouseenter", () => {
  if (bodyContainer.classList.contains("darkMode"))
    createBtn.src = "/images/CTA-crear-gifo-hover-modo-noc.svg";
});
createBtn.addEventListener("mouseleave", () => {
  if (bodyContainer.classList.contains("darkMode"))
    createBtn.src = "/images/CTA-crear-gifo-modo-noc.svg";
});
