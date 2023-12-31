import Notiflix from 'notiflix'; 
const loader = document.querySelector('.loader');

    console.log(loader);
    const loader1 = document.querySelector('.loader.number1');
const container = document.querySelector(".cont");
const BASE_URL = "https://api.thecatapi.com/v1";


import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select';
import '/node_modules/slim-select/dist/slimselect.css';



axios.defaults.headers.common["x-api-key"] = "live_w5PmOMDLB7vwucz1LhkLCDly2e2kYoJkMuHaX1iBhUTtBELR2tDGEAKumtjo5jkc";
const searchForm = document.querySelector(".js-search-form");
const info = document.querySelector(".cat-info");
const select = document.querySelector("select.breed-select");



const URL = `${BASE_URL}/images`;


addSelect();

            select.style.visibility = "visible"; // Show the container after the request
container.style.display = "block";

select.addEventListener("change", handleSearch);
function handleSearch(event) {



        showLoader1();
 addDesc();
       
}


       


function addSelect() {
    //    select.style.visibility = "hidden";
    showLoader();
    fetchBreeds()
        .then(data => {
            select.classList.remove("display");
            for (let i = 0; i < data.length; i++) {
                let option = document.createElement("option");
                option.text = data[i].name;
                option.value = data[i].id;
                select.add(option);

            }

  
            new SlimSelect({
                select: '#single',
            });

        })
        .finally(() => {
          hideLoader();
            select.style.visibility = "visible";
})
            // hideLoader2();
            // select.style.visibility = "visible";

}
function addDesc() {
    const option = select.value;
    //    info.style.visibility = "hidden";
    info.style.visibility = "hidden";
    // showLoader1();
        fetchCatByBreed(option)
        .then(data => {
      
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
                

                  
                    info.innerHTML = createMarkup(catInfo.breeds[0], catInfo);
 
                })
        })


            .catch(() =>
                
                Notiflix.Notify.failure(
          ` Oops! Something went wrong! Try reloading the page!`,
 hideLoader1()
        ))
    .finally(()=>searchForm.reset())
}

function createMarkup({ name, description, temperament }, catInfo) {

            // hideLoader1();
    // info.style.visibility = "visible";
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

    loader1.style.visibility = "hidden";
}



function showLoader1() {

    loader1.style.visibility = "visible";
}

// function hideLoader2() {

//     loader2.classList.toggle("display");
//     console.log("ooo");
// }









function showLoader() {
    const loader = document.querySelector('.loader');
    loader.style.visibility = "visible";
}

// function showLoader1() {
//     const loader1 = document.querySelector('.loader.number1');
//     loader1.style.visibility = "visible";
// }
function hideLoader() {
 const loader = document.querySelector('.loader');
    loader.style.display = "none";
}
// function hideLoader1() {
//     const loader1 = document.querySelector('.loader.number1');
//       loader1.style.display = "none";
// }