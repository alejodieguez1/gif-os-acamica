// const searchBox = document.querySelector("#txt-search");
// const iconSwap = document.querySelector("#search-icon");

// const bodyTag = document.getElementById("bodyContainer");

// let searchIconSrc = "";
// let closeIconSrc = "";

// function getSrc(e, i) {
//   if (bodyTag.classList.contains("darkMode")) {
//     e = "../images/icon-search-modo-noct.svg";
//     i = "../images/close-modo-noct.svg";
//   } else if (bodyTag.classList.contains("body-container")) {
//     e = "../images/icon-search.svg";
//     i = "../images/close.svg";
//   }
//   return e && i;
// }

// function changeIcon(icon, search, close) {
//   if (searchBox.value !== "") {
//     getSrc(search, close);
//     icon.src = search;
//   } else {
//     getSrc(search, close);
//     icon.src = close;
//   }
// }
// searchBox.addEventListener("keyup", () => {
//   changeIcon(iconSwap, searchIconSrc, closeIconSrc);
// });
