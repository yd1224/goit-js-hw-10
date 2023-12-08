

const container = document.querySelector(".cont");
// showLoader();
// container.style.display = "none";

import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select';
import '/node_modules/slim-select/dist/slimselect.css';



axios.defaults.headers.common["x-api-key"] = "live_w5PmOMDLB7vwucz1LhkLCDly2e2kYoJkMuHaX1iBhUTtBELR2tDGEAKumtjo5jkc";
const searchForm = document.querySelector(".js-search-form");
const info = document.querySelector(".cat-info");
const select = document.querySelector("select.breed-select");



const URL = "https://api.thecatapi.com/v1/images";


addSelect();
        // hideLoader();
            select.style.visibility = "visible"; // Show the container after the request
container.style.display = "block";

searchForm.addEventListener("submit", handleSearch);
function handleSearch(event) {
    event.preventDefault();

    // console.log(option);
 addDesc();
        //  hideLoader1()
               info.style.visibility = "hidden"; 
}


       


function addSelect() {
    fetchBreeds()
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let option = document.createElement("option");
                option.text = data[i].name;
                option.value = data[i].id;
                select.add(option);

            }

    // hideLoader();
            new SlimSelect({
                select: '#single',
            });

        })
        .catch(err => console.log(err));
}
function addDesc() {
        const option = select.value;
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

                  
                    info.innerHTML = createMarkup(catInfo.breeds[0], catInfo);
 
                })
        })


        .catch(err => console.log(err))
    .finally(()=>searchForm.reset())
}

function createMarkup({ name, description, temperament }, catInfo) {

            hideLoader1();
            info.style.visibility = "visible";
    return `
    <img src="${catInfo.url
}" alt="${name}" class="cat-icon"\>
    <h2 class="cat-breed">${name}</h2>
    <p class="cat-description">${description}</p>
    <pclass="cat-temperament">${temperament}</pclass>
    `
}








function hideLoader1() {
    const loader1 = document.querySelector('.loader.number1');
      loader1.style.display = "none";
}

