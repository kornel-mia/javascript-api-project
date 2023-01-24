const jokeview = document.getElementById("joke");
document.getElementById("btn").addEventListener("click", function () {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "tSwfOJItsrPGTU2bgmPMuA==cn0qcskcuxqSRKuE",
    },
  };
  
  fetch("https://api.api-ninjas.com/v1/jokes?limit=1", options)
    .then((response) => response.json())
    .then((response) => (joke.innerText = response[0].joke))
    .catch((err) => console.error(err));
});
