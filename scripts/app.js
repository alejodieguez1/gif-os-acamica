const apiKey = "p8ZMZYpVy2Zl7HlxVPCToc461j1rDepR";
const url = "https://api.giphy.com/v1";
const urlTrending = `${url}/gifs/trending?api_key=${apiKey}`;
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
function createItem(src, container, itemId) {
  const item = document.createElement("div");
  item.className = itemId;
  const gif = document.createElement("img");
  gif.src = src;
  item.appendChild(gif);
  container.appendChild(item);
}

request(urlTrending)
  .then((data) => {
    const contenedor = document.querySelector("#trending-gifos");
    for (let i = 0; i <= 10; i++) {
      createItem(
        data.data[i].images.downsized.url,
        contenedor,
        "gif-container"
      );
    }
  })
  .catch((error) => {
    console.error(error);
  });
