const darkToggle = document.getElementById("toggleDark");
const labelDark = document.querySelector(".labelDark");
const bodyContainer = document.getElementById("bodyContainer");
const textLogo = document.querySelector("#GIFOS_1");
const searchInput = document.getElementById("txt-search");

darkToggle.addEventListener("change", () => {
  if (bodyContainer.classList.contains("body-container")) {
    bodyContainer.classList.replace("body-container", "darkMode");
    labelDark.innerHTML = "Modo Diurno";
    textLogo.setAttribute("fill", "#ffff");
  } else {
    textLogo.setAttribute("fill", "#572EE5");
    bodyContainer.classList.replace("darkMode", "body-container");
    labelDark.innerHTML = "Modo Nocturno";
  }
});
