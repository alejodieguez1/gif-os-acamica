const emptyContainer = document.querySelector(
  ".favorites-gifs-empty-container"
);
const containsContainer = document.querySelector(
  ".favorites-gifs-content-container"
);
const getGIFS = JSON.parse(localStorage.getItem("favGifs"));
if (getGIFS == null) {
  emptyContainer.classList.toggle("show");
  containsContainer.classList.toggle("hidden");
} else {
  containsContainer.classList.toggle("show");
  emptyContainer.classList.toggle("hidden");
}

getGIFS.forEach((element) => {
  createItem(
    element.src,
    containsContainer,
    "gif-container",
    element.id,
    element.username,
    element.title
  );
});
