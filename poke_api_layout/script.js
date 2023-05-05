const url = "https://pokeapi.co/api/v2/pokemon/";


let pokemon_name = document.getElementById("pokemon");
let button_search = document.getElementById("btn");
let informacoes = document.getElementById("informacoes");

let pokemon = {};

/* Função responsável por pegar as informações do pokemon */
function getInfo(name_poke, id_poke, type_poke, hp_poke, attack_poke, defense_poke, speed_poke, image_poke){

  setInfo(name_poke, id_poke, type_poke, hp_poke, attack_poke, defense_poke, speed_poke, image_poke);
}

/* Função responsável por setar as informações dentro do objeto pokemon */
function setInfo(name_poke, id_poke, type_poke, hp_poke, attack_poke, defense_poke, speed_poke, image_poke){

    pokemon = {
    name: name_poke,
    id: id_poke,
    type: type_poke,
    hp: hp_poke,
    attack: attack_poke,
    defense: defense_poke,
    speed: speed_poke,
    image: image_poke,
  };
  console.log(pokemon);
  sendHTML();
}

/* Função responsável por enviar as informações para o front-end */
function sendHTML(){
  informacoes.innerHTML =
  `<div class="container">
    <section class="top-side">
        <p class="top">ID ${pokemon.id}</p>
        <p class="top">HP ${pokemon.hp}</p>
    </section>
    <section class="middle-side">
        <img class="img-poke" src="${pokemon.image}" alt="${pokemon.name}">
        <p class="name-poke">${pokemon.name}</p>
        <p class="type-poke">${pokemon.type}</p>
    </section>
    <section class="full-value">
        <section class="bot-side-numbers">
            <p>${pokemon.attack}</p>
            <p>${pokemon.defense}</p>
            <p>${pokemon.speed}</p>            
        </section>
        <section class="bot-side-details">
            <p>Attack</p>
            <p>Defense</p>
            <p>Speed</p>
        </section>
    </section>
  
    </div>`
}

/* Fetch da API */
button_search.addEventListener('click', () =>{
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name.value}`)
  .then(response => response.json())
  .then(data => getInfo(
    data.name, 
    data.id, 
    data.types[0]["type"]["name"], 
    data.stats[0]["base_stat"], // HP
    data.stats[1]["base_stat"], // Attack
    data.stats[2]["base_stat"], // Defense
    data.stats[5]["base_stat"], // Speed
    data.sprites["other"]["official-artwork"]["front_default"], // Image
    ))
  .catch(err => console.log(err));


});
