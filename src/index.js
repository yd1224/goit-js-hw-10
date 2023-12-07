import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select';
import '/node_modules/slim-select/dist/slimselect.css';



axios.defaults.headers.common["x-api-key"] = "live_w5PmOMDLB7vwucz1LhkLCDly2e2kYoJkMuHaX1iBhUTtBELR2tDGEAKumtjo5jkc";
console.log(fetchBreeds());
const searchForm = document.querySelector(".js-search-form");
const info = document.querySelector(".cat-info");
const select = document.querySelector("select.breed-select");
const URL = "https://api.thecatapi.com/v1/images";
searchForm.addEventListener("submit", handleSearch);
function handleSearch(event) {
    event.preventDefault();
    const option = select.value;
    console.log(option);
    fetchCatByBreed(option)
        .then(data => {
            console.log(data[0].id);
            return data[0].id;
      
        })
        .then(inf => {
            return fetch(`${URL}/${inf}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(res.statusText)
                    }
                             return res.json();
                })
                .then(catInfo => {
                    console.log(catInfo.breeds[0]);
                    console.log(catInfo.url);
                    
                  
                    info.innerHTML = createMarkup(catInfo.breeds[0],catInfo );
                })
            })

        .catch(err => console.log(err))
    .finally(()=>searchForm.reset())
}







fetchBreeds()
    .then(data => {
        for (let i = 0; i < data.length; i++){
             let option = document.createElement("option");
            option.text = data[i].name;
            option.value = data[i].id;
            select.add(option);

        }
    new SlimSelect({
        select: '#single',

})
       })
     .catch(err=> console.log(err))

function createMarkup({ name, description, temperament},catInfo ) {
    return `
    <img src="${catInfo.url
}" alt="${name}" class="cat-icon"\>
    <h2 class="cat-breed">${name}</h2>
    <p class="cat-description">${description}</p>
    <pclass="cat-temperament">${temperament}</pclass>
    `
}