const apiKey = "p8ZMZYpVy2Zl7HlxVPCToc461j1rDepR";
const url = "https://api.giphy.com/v1";
const urlTrending = `${url}/gifs/trending?api_key=${apiKey}`;
const urlCategories = `${url}/gifs/categories?api_key=${apiKey}`;

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

//Important Variables Declarations
const gifosContainer = document.querySelector("#trending-gifos-container");

const searchResultsContainer = document.querySelector(
  "#search-results-container"
);

const showMoreBtn = document.querySelector("#search-result-more");

const searchText = document.querySelector("#search-result-title");

const userInput = document.querySelector("#txt-search");
const searchBtn = document.querySelector("#btn-search");

const categoriesContainer = document.querySelector("#suggestions");

//Gif card creation function
function createItem(src, container, itemClass, itemId, gifUsername, gifTitle) {
  const item = document.createElement("div");
  item.className = itemClass;

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
  item.id = itemId;

  item.addEventListener("mouseover", () => {
    item.classList.add("card-hover");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("card-hover");
  });
  container.appendChild(item);
}

// Search Error Creation
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

    container.appendChild(item);
  }
}

function createSugestions(name, container, itemClass) {
  const item = document.createElement("h2");
  item.className = itemClass;
  item.innerHTML = `${name},`;
  container.appendChild(item);
}

// Trending API Request
request(urlTrending)
  .then((data) => {
    for (let i = 0; i <= 10; i++) {
      createItem(
        data.data[i].images.downsized.url,
        gifosContainer,
        "gif-container",
        data.data[i].id,
        data.data[i].username,
        data.data[i].title
      );
    }
  })
  .catch((error) => {
    console.error(error);
  });

//Trending categories API Request
request(urlCategories)
  .then((data) => {
    for (let i = 0; i <= 4; i++) {
      createSugestions(
        data.data[i].name,
        categoriesContainer,
        "suggestions-text"
      );
    }
  })
  .catch((err) => {
    console.error(err);
  });

//Search API Request
function search() {
  let urlSearch = `${url}/gifs/search?api_key=${apiKey}&q=${userInput.value}`;
  request(urlSearch)
    .then((data) => {
      let container = searchResultsContainer;
      container.className = "search-results-container";
      for (let i = 0; i <= 7; i++) {
        createItem(
          data.data[i].images.downsized.url,
          container,
          "gif-container",
          data.data[i].id,
          data.data[i].username,
          data.data[i].title
        );
      }
      showMoreBtn.classList.replace("hidden", "showBtn");
    })
    .catch((err) => {
      let container = searchResultsContainer;
      container.className = "errorContainer";
      createError(err, container);
      showMoreBtn.classList.replace("showBtn", "hidden");
    });
  sessionStorage.setItem("userInput", userInput.value);
  userInput.value = "";
  document.querySelector("#search-results-container").innerHTML = "";
}

function showMore() {
  let elementosArr = document.querySelectorAll(".gif-container");
  let container = searchResultsContainer;
  let urlSearch = `${url}/gifs/search?api_key=${apiKey}&q=${sessionStorage.getItem(
    "userInput"
  )}`;
  request(urlSearch)
    .then((data) => {
      for (let i = 0; i <= 101; i++) {
        if (elementosArr[i].id !== data.data[i].id) {
          createItem(
            data.data[i].images.downsized.url,
            container,
            "gif-container",
            data.data[i].id,
            data.data[i].username,
            data.data[i].title
          );
        }
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

showMoreBtn.addEventListener("click", () => {
  showMore();
});

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
