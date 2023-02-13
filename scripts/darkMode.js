const darkMode = document.getElementById("dark-mode");
const bodyContainer = document.getElementById("bodyContainer");
const textLogo = document.querySelector("#GIFOS_1");
const searchIcon = document.getElementById("search-icon");
const createBtn = document.getElementById("create-gif");
const searchInput = document.getElementById("txt-search");

darkMode.addEventListener("click", () => {
  if (bodyContainer.classList.contains("body-container")) {
    bodyContainer.classList.replace("body-container", "darkMode");
    darkMode.textContent = "Modo Diurno";
    textLogo.setAttribute("fill", "#ffff");

    createBtn.src = "../images/CTA-crear-gifo-modo-noc.svg";
    createBtn.addEventListener("mouseenter", () => {
      createBtn.src = "../images/CTA-crear-gifo-hover-modo-noc.svg";
    });
    createBtn.addEventListener("mouseleave", () => {
      createBtn.src = "../images/CTA-crear-gifo-modo-noc.svg";
    });

    searchIcon.src = "/images/icon-search-modo-noct.svg";
    searchInput.addEventListener("keyup", () => {
      if (searchInput.value != "") {
        searchIcon.src = "../images/close-modo-noct.svg";
      } else {
        searchIcon.src = "../images/icon-search-modo-noct.svg";
      }
    });
  } else {
    textLogo.setAttribute("fill", "#572EE5");
    bodyContainer.classList.replace("darkMode", "body-container");
    darkMode.textContent = "Modo Nocturno";

    createBtn.src = "../images/button-crear-gifo.svg";
    createBtn.addEventListener("mouseenter", () => {
      createBtn.src = "../images/CTA-crear-gifo-hover.svg";
    });
    createBtn.addEventListener("mouseleave", () => {
      createBtn.src = "../images/button-crear-gifo.svg";
    });

    searchIcon.src = "../images/icon-search.svg";
    searchInput.addEventListener("keyup", () => {
      if (searchInput.value != "") {
        searchIcon.src = "../images/close.svg";
      } else {
        searchIcon.src = "../images/icon-search.svg";
      }
    });
  }
});
