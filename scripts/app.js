var darkMode = document.getElementById("dark-mode");
var topBar = document.getElementById("top-bar");

darkMode.addEventListener("click", () => {
    if (darkMode.textContent === 'Modo Nocturno')
    darkMode.textContent = 'Modo Diurno';
    else darkMode.textContent = 'Modo Nocturno';

    if (darkMode.textContent === "Modo Diurno")
    topBar.classList.replace("top-bar", "darkMode");
    else topBar.classList.replace("darkMode", "top-bar");
});