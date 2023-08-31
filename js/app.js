var elForm = document.querySelector("[data-form]");
var elImgUrl = document.querySelector("[data-img-url]");
var elTitle = document.querySelector("[data-title]");
var elType = document.querySelector("[data-type]");
var elWeight = document.querySelector("[data-weight]");
var elHeight = document.querySelector("[data-height]");
var elBox = document.querySelector("[data-box]");
var elTemplate = document.querySelector("[data-template]");
var elSelect = document.querySelector("[data-select]");
var elSelectTou = document.querySelector("[data-select-tou]");
let elUl = document.querySelector("[data-ul]");

renderPokemons(pokemons);
elForm.addEventListener("submit", evt => {
  evt.preventDefault();
  var pokemon = {
    img: null,
    type: null,
    name: null,
    height: null,
    weight: null,
  };

  pokemon.img = elImgUrl.value;
  pokemon.type = elType.value.split(" ");
  pokemon.name = elTitle.value;
  pokemon.height = elHeight.value;
  pokemon.weight = elWeight.value;

  pokemons.unshift(pokemon);
  elBox.prepend(createEl(pokemon));
});

function renderPokemons(pokemons) {
  elBox.innerHTML = "";
  for (let i = 0; i < pokemons.length; i++) {
    var pokemon = pokemons[i];
    elBox.appendChild(createEl(pokemon));
  }
}

function createEl(pokemon) {
  var card = elTemplate.content.cloneNode(true);

  card.querySelector(`img`).src = pokemon.img;
  card.querySelector(`.jakiro`).textContent = pokemon.name;
  card.querySelector(`.title_five`).textContent = pokemon.type;
  card.querySelector(`.height`).textContent = pokemon.height;
  card.querySelector(`.weight`).textContent = pokemon.weight;
  card.querySelector(`.btn-danger`).dataset.pokemonId = pokemon.id;

  return card;
}

elBox.addEventListener("click" , evt=>{
  deletePokemon(evt)
})

elSelect.addEventListener("input", (evt) => {
  evt.preventDefault();
  let elSortName = pokemons.sort((a, b) => a.name.toLowerCase().charCodeAt() - b.name.toLowerCase().charCodeAt()); 
  renderPokemons(elSortName);
});

elSelect.addEventListener("input", (evt) => {
  evt.preventDefault();
  let elSortNameTou = pokemons.sort((a, b) => b.name.toLowerCase().charCodeAt() - a.name.toLowerCase().charCodeAt()); 
  renderPokemons(elSortNameTou);
});

elSelectTou.addEventListener("input", (evt) => {
  evt.preventDefault();
  let elSortHeight = pokemons.sort((a, b) => b.height.toLowerCase().charCodeAt() - a.height.toLowerCase().charCodeAt()); 
  renderPokemons(elSortHeight);
});

elSelectTou.addEventListener("input", (evt) => {
  evt.preventDefault();
  let elSortWeight = pokemons.sort((a, b) => b.weight.toLowerCase().charCodeAt() - a.weight.toLowerCase().charCodeAt()); 
  renderPokemons(elSortWeight);
});

// elSelect.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   pokemons.sort((a , b) => a.name.toLowerCase().charCodeAt() - b.name.toLowerCase().charCodeAt());
// });

// elSelect.addEventListener("input", (evt) => {
//   let elSort = pokemons.sort((a, b) => b.name.toLowerCase().charCodeAt() - a.name.toLowerCase().charCodeAt()); 
//   renderPokemons(elSort);
// });

function deletePokemon(evt) {
  let elT = evt.target.closest("[data-pokemon-id]");

  if (!elT) return;

  let id = elT.dataset.pokemonId;
  let index = pokemons.findIndex((a) => +a.id == +id);
  let pwd = pokemons.splice(index, 1);
  elT.parentElement.remove()
}

document.addEventListener("click" , evt=>{
  console.log(evt.target);
})