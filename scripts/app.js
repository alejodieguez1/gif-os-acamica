const apiKey = "p8ZMZYpVy2Zl7HlxVPCToc461j1rDepR";
const url = "https://api.giphy.com/v1";
const urlTrending = `${url}/gifs/trending?api_key=${apiKey}`
//API REQUEST FUNCTION

// function request(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then((response) => response.json())
//         .then((response) => {
//           return resolve(response)
//         })
//         .catch((error) => reject(error))
//     })
//   }
fetch(urlTrending)
.then(res => res.json())
.then(data => console.log(data))