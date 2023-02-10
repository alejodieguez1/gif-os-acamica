const apiKey = "p8ZMZYpVy2Zl7HlxVPCToc461j1rDepR";
const url = "https://api.giphy.com/v1";
const urlTrending = `${url}/gifs/trending?api_key=${apiKey}`;

const gifFavImage = "../images/icon-fav.svg";
const gifDownloadImage = "../images/icon-download.svg";
const gifMaxImage = "../images/icon-max-normal.svg";

//API REQUEST FUNCTION
function request(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => reject(error));
  });
}

const gifosContainer = document.querySelector("#trending-gifos-container");

const searchResultsContainer = document.querySelector(
  "#search-results-container"
);

const searchText = document.querySelector("#search-result-title");

const userInput = document.querySelector("#txt-search");
const searchBtn = document.querySelector("#btn-search");

//Gif card creation function
function createItem(src, container, itemId, gifUsername, gifTitle) {
  const item = document.createElement("div");
  item.className = itemId;

  const gif = document.createElement("img");
  gif.src = src;

  const gifBtnsContainer = document.createElement("div");
  gifBtnsContainer.className = "gifBtns-container";

  const gifFav = document.createElement("img");
  const gifDownload = document.createElement("img");
  const gifMax = document.createElement("img");

  gifFav.src = gifFavImage;
  gifDownload.src = gifDownloadImage;
  gifMax.src = gifMaxImage;

  gifBtnsContainer.appendChild(gifFav);
  gifBtnsContainer.appendChild(gifDownload);
  gifBtnsContainer.appendChild(gifMax);

  const gifInfoContainer = document.createElement("div");
  gifInfoContainer.className = "gifInfo-container";

  const gifUser = document.createElement("p");
  gifUser.textContent = gifUsername;

  const gifTit = document.createElement("h4");
  gifTit.textContent = gifTitle;

  gifInfoContainer.appendChild(gifUser);
  gifInfoContainer.appendChild(gifTit);

  item.appendChild(gifBtnsContainer);
  item.appendChild(gif);
  item.appendChild(gifInfoContainer);

  // item.addEventListener("mouseover", () => {
  //   item.classList.add("card-hover");
  // });
  // item.addEventListener("mouseout", () => {
  //   item.classList.remove("card-hover");
  // });
  container.appendChild(item);
}
function createError(err, container) {
  if (err.data == undefined) {
    const item = document.createElement("div");
    item.className = "error-container";

    const errorImg = document.createElement("img");
    errorImg.src = "../images/icon-busqueda-sin-resultado.svg";

    const parraf = document.createElement("h1");
    parraf.innerHTML = "Intenta con otra busqueda";

    item.appendChild(errorImg);
    item.appendChild(parraf);

    // container.id = "errorContainer";
    container.appendChild(item);
  }
}

// Trending API Request
request(urlTrending)
  .then((data) => {
    for (let i = 0; i <= 10; i++) {
      createItem(
        data.data[i].images.downsized.url,
        gifosContainer,
        "gif-container",
        data.data[i].username,
        data.data[i].title
      );
    }
  })
  .catch((error) => {
    console.error(error);
  });

//Search API Request
function search() {
  let urlSearch = `${url}/gifs/search?api_key=${apiKey}&q=${userInput.value}`;
  request(urlSearch)
    .then((data) => {
      let container = searchResultsContainer;
      container.className = "search-results-container";
      for (let i = 0; i <= 5; i++) {
        createItem(
          data.data[i].images.downsized.url,
          container,
          "gif-container",
          data.data[i].username,
          data.data[i].title
        );
      }
    })
    .catch((err) => {
      let container = searchResultsContainer;
      container.className = "errorContainer";
      createError(err, container);
    });
  userInput.value = "";
  document.querySelector("#search-results-container").innerHTML = "";
}

//Search Input Value
userInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    searchText.innerHTML = userInput.value;
    search(userInput.value);
  }
});

//Arrows slider functions
const left = document.getElementById("trending-left-arrow");
const right = document.getElementById("trending-right-arrow");

left.addEventListener("click", () => {
  gifosContainer.scrollBy(-400, 0);
});
right.addEventListener("click", () => {
  gifosContainer.scrollBy(400, 0);
});
