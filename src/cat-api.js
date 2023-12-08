import Notiflix from 'notiflix';
const select = document.querySelector("select.breed-select");
const info = document.querySelector(".cat-info");

function fetchBreeds() {
    select.style.visibility = "hidden";
    showLoader();

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
        .finally(() => {
            hideLoader();
            select.style.visibility = "visible";
        });
}

function fetchCatByBreed(breedId) {
    info.style.visibility = "hidden";
    showLoader1();

    const BASE_URL = "https://api.thecatapi.com/v1/images/search";
    const params = new URLSearchParams({
        breed_ids: breedId
    });

    console.log(breedId);

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
        // .finally(() => {
        //     hideLoader();
        //     info.style.visibility = "visible";
        // });
}

export { fetchBreeds, fetchCatByBreed };

function showLoader() {
    const loader = document.querySelector('.loader');
    loader.style.visibility = "visible";
}

function showLoader1() {
    const loader1 = document.querySelector('.loader.number1');
    loader1.style.visibility = "visible";
}
function hideLoader() {
 const loader = document.querySelector('.loader');
    loader.style.display = "none";
}

