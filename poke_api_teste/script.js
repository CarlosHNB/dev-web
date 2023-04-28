const url = "https://pokeapi.co/api/v2/pokemon/";


let pokemon_name = document.getElementById("pokemon");
let button_search = document.getElementById("btn");

button_search.addEventListener('click', () =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name.value}`)
  .then(response => response.json())
  .then(data => console.log(data.name))
  .catch(err => console.log(err));
});