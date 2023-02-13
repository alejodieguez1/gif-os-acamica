const darkMode = document.getElementById("toggleDark");
const labelDark = document.querySelector(".labelDark");
const bodyContainer = document.getElementById("bodyContainer");
const textLogo = document.querySelector("#GIFOS_1");
const searchIcon = document.getElementById("search-icon");
const createBtn = document.getElementById("create-gif");
const searchInput = document.getElementById("txt-search");

// if (bodyContainer.classList.contains("darkMode")) {
//   createBtn.src = "../images/CTA-crear-gifo-modo-noc.svg";
//   createBtn.addEventListener("mouseenter", () => {
//     createBtn.src = "../images/CTA-crear-gifo-hover-modo-noc.svg";
//   });
//   createBtn.addEventListener("mouseleave", () => {
//     createBtn.src = "../images/CTA-crear-gifo-modo-noc.svg";
//   });
// }

// if (bodyContainer.classList.contains("body-container")) {
//   createBtn.src = "../images/button-crear-gifo.svg";
//   createBtn.addEventListener("mouseenter", () => {
//     createBtn.src = "../images/CTA-crear-gifo-hover.svg";
//   });
//   createBtn.addEventListener("mouseleave", () => {
//     createBtn.src = "../images/button-crear-gifo.svg";
//   });
// }

darkMode.addEventListener("change", () => {
  if (bodyContainer.classList.contains("body-container")) {
    bodyContainer.classList.replace("body-container", "darkMode");
    labelDark.innerHTML = "Modo Diurno";
    textLogo.setAttribute("fill", "#ffff");

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
    labelDark.innerHTML = "Modo Nocturno";

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
