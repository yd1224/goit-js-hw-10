function fetchBreeds() {
  return  fetch("https://api.thecatapi.com/v1/breeds")
        .then(response => {
            if (!response.ok) {
      throw new Error("qwerty");
    }
          return response.json();
        })
 
}
export { fetchBreeds };