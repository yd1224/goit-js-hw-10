import axios from "axios";
import { fetchBreeds } from "./cat-api";

axios.defaults.headers.common["x-api-key"] = "live_w5PmOMDLB7vwucz1LhkLCDly2e2kYoJkMuHaX1iBhUTtBELR2tDGEAKumtjo5jkc";
console.log(fetchBreeds());
const searchForm = document.querySelector(".js-search-form");
const info = document.querySelector(".cat-info");
const select = document.querySelector("select.breed-select");
searchForm.addEventListener("submit", handleSearch);
function handleSearch(event) {
    event.preventDefault();
}







fetchBreeds()
    .then(data => {
        for (let i = 0; i < data.length; i++){
             let option = document.createElement("option");
            option.text = data[i].name;
            option.value = data[i].id;

            select.add(option);
        }
       })
     .catch(err=> console.log(err))
