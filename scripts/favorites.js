const getGIFS = JSON.parse(localStorage.getItem("favGifs"));
const container = document.querySelector(".favorites-gifs-empty-container");
getGIFS.forEach((element) => {
  createItem(
    element.src,
    favoritesContainer,
    "gif-container",
    element.id,
    element.username,
    element.title
  );
});
