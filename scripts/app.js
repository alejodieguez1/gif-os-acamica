var darkMode = document.getElementById("dark-mode");
var topBar = document.getElementById("top-bar");
var bodyContainer = document.querySelector("body");
var headerContainer = document.getElementById("header-container");

darkMode.addEventListener("click", () => {
    if (darkMode.textContent === 'Modo Nocturno')
    darkMode.textContent = 'Modo Diurno';
    else darkMode.textContent = 'Modo Nocturno';

    if (darkMode.textContent === "Modo Diurno")
    headerContainer.style.backgroundColor = ("#37383C");
    else headerContainer.style.backgroundColor = ("#ffff")

    if (darkMode.textContent === "Modo Diurno")
    topBar.classList.replace("top-bar", "darkMode");
    else topBar.classList.replace("darkMode", "top-bar");

    if (darkMode.textContent === "Modo Diurno")
    bodyContainer.style.backgroundColor = ("#37383C");
    else bodyContainer.style.backgroundColor = ("white");
});