import Notiflix from 'notiflix';
 

function fetchBreeds() {


    return fetch("https://api.thecatapi.com/v1/breeds")
        .then(response => {
            if (!response.ok) {
                throw new Error("qwerty");
            }
            return response.json();
        })
      .catch(() => {
         Notiflix.Notify.failure(
            ` Oops! Something went wrong! Try reloading the page!`,
 
          );
      })
     
}

function fetchCatByBreed(breedId) {
 

    const BASE_URL = "https://api.thecatapi.com/v1/images/search";
    const params = new URLSearchParams({
        breed_ids: breedId
    });



    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
      .catch(() => {
        Notiflix.Notify.failure(
          ` Oops! Something went wrong! Try reloading the page!`,
 
        );
      }
          )
    
}

export { fetchBreeds, fetchCatByBreed };



