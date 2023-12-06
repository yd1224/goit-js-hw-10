function fetchBreeds() {
  return  fetch("https://api.thecatapi.com/v1/breeds")
        .then(response => {
            if (!response.ok) {
      throw new Error("qwerty");
    }
          return response.json();
        })
 
}
function fetchCatByBreed(breedId) {
    const BASE_URL = "https://api.thecatapi.com/v1/images/search";
    const params = new URLSearchParams({
        breed_ids: breedId
    })
  console.log(breedId);
  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
   
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
}
export { fetchBreeds, fetchCatByBreed};