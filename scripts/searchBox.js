const searchBox = document.querySelector("#txt-search");
const iconSwap = document.querySelector("#search-icon");

const crossIconSrc = "/images/close.svg";
const searchIconSrc = "/images/icon-search.svg";

if (searchBox.value !== "") {
  iconSwap.addEventListener("click", () => {
    searchBox.value = "";
  });
}
searchBox.addEventListener("keyup", () => {
  if (searchBox.value != "") {
    iconSwap.src = crossIconSrc;
  } else {
    iconSwap.src = searchIconSrc;
  }
});
