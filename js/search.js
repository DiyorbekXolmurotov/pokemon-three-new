var elSearch = document.querySelector("[data-search]");
elSearch.addEventListener("input" , evt => {
    evt.preventDefault();
    searchWind(elSearch.value , pokemons);
})

function searchWind(name , pokemons) {
    elBox.innerHTML = "";
    var searchedArr = [];
    let i = "";
    pokemons.forEach((pokemon) => {pokemon.name.toUpperCase().includes(name.toUpperCase()) ? searchedArr.push(pokemon): i += ""});
    renderPokemons(searchedArr);
}