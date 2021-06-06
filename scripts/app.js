var darkMode = document.getElementById("dark-mode");
var bodyContainer = document.getElementById("bodyContainer");

darkMode.addEventListener("click", () => {
    if (darkMode.textContent === 'Modo Nocturno')
    darkMode.textContent = 'Modo Diurno';
    else darkMode.textContent = 'Modo Nocturno';

    // if (darkMode.textContent === "Modo Diurno")
    // bodyContainer.classList.replace("body-container","darkMode");
    // else bodyContainer.classList.remove("darkMode", "body-container")
});
