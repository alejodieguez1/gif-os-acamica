var darkMode = document.getElementById("dark-mode");
darkMode.addEventListener("click", () => {
    var topBar = document.getElementsByClassName("top-bar");
    topBar.classList.add("dark-mode")
})