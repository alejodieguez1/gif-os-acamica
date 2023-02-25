//Important Variables Declarations
const apiKey = "p8ZMZYpVy2Zl7HlxVPCToc461j1rDepR";
const url = "https://api.giphy.com/v1";
const urlTrending = `${url}/gifs/trending?api_key=${apiKey}`;
const urlCategories = `${url}/gifs/categories?api_key=${apiKey}&limit=5`;

const gifFavImage = "../images/icon-fav.svg";
const gifDownloadImage = "../images/icon-download.svg";
const gifMaxImage = "../images/icon-max-normal.svg";

const gifosContainer = document.querySelector("#trending-gifos-container");

const searchResultsContainer = document.querySelector(
  "#search-results-container"
);

const showMoreBtn = document.querySelector("#search-result-more");

const searchText = document.querySelector("#search-result-title");

const userInput = document.querySelector("#txt-search");
const searchBtn = document.querySelector("#btn-search");
const searchImg = document.querySelector("#search-icon");
const inputContainer = document.querySelector("#input-container");
const suggestionsUl = document.querySelector("#search-suggestions-ul");

const categoriesContainer = document.querySelector(
  "#trending-categories-suggestions"
);

const left = document.getElementById("trending-left-arrow");
const right = document.getElementById("trending-right-arrow");

const contentContainer = document.querySelector("#bodyContainer");

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

//Gif card creation function
function createItem(src, container, itemClass, itemId, gifUsername, gifTitle) {
  const item = document.createElement("div");
  item.className = itemClass;

  const gif = document.createElement("img");
  gif.src = src;
  gif.className = "gif-img";

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

  item.appendChild(gif);
  item.appendChild(gifBtnsContainer);
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

function createCategories(a, e, i, o, u, container, itemClass) {
  const item = document.createElement("h2");
  item.className = itemClass;
  item.innerHTML = `${a}, ${e}, ${i}, ${o}, ${u}`;
  container.appendChild(item);
}

function createSuggestions(name, container) {
  const listItem = document.createElement("li");
  listItem.innerHTML = name;
  container.appendChild(listItem);
}
function removeSuggestions(container) {
  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
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
    createCategories(
      data.data[0].name,
      data.data[1].name,
      data.data[2].name,
      data.data[3].name,
      data.data[4].name,
      categoriesContainer,
      "suggestions-text"
    );
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
//Show more results function
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

//Search Input Value Event
userInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    searchText.innerHTML = userInput.value;
    search(userInput.value);
    inputContainer.classList.replace(
      "suggested-search-input",
      "empty-search-input"
    );
    searchImg.classList.remove("cancel");
  }
});

//Search Suggestions Function
function suggestedSearch() {
  let urlSuggestions = `${url}/gifs/search/tags?api_key=${apiKey}&q=${userInput.value}&limit=5`;
  let container = suggestionsUl;
  let suggestionsArr = [];
  request(urlSuggestions).then((data) => {
    for (let i = 0; i < 5; i++) {
      suggestionsArr.push(data.data[i].name);
      createSuggestions(suggestionsArr[i], container);
    }
    if (suggestionsArr.length > 5) {
      removeSuggestions(container);
    }
  });
}

//Arrows slider functions
left.addEventListener("click", () => {
  gifosContainer.scrollBy(-400, 0);
});
right.addEventListener("click", () => {
  gifosContainer.scrollBy(400, 0);
});

// Search Icon changes when input is not empty
userInput.addEventListener("input", () => {
  if (userInput.value != "") {
    removeSuggestions(suggestionsUl);
    suggestedSearch();
    inputContainer.classList.replace(
      "empty-search-input",
      "suggested-search-input"
    );
    searchImg.classList.add("cancel");
  } else {
    inputContainer.classList.replace(
      "suggested-search-input",
      "empty-search-input"
    );
    searchImg.classList.remove("cancel");
  }
});

// Search cancel button functionality
searchBtn.addEventListener("click", () => {
  if (searchImg.classList.contains("cancel")) {
    userInput.value = "";
    searchImg.classList.remove("cancel");
    inputContainer.classList.replace(
      "suggested-search-input",
      "empty-search-input"
    );
  }
});
