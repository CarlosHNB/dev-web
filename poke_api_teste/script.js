const url = "https://pokeapi.co/api/v2/pokemon/";


const pokemon_name = document.getElementById("pokemon");
const button_search = document.getElementById("btn");
const informacoes = document.getElementById("informacoes");

let pokemon = {}

/* Função responsável por pegar as informações do pokemon */
function getInfo(name_poke, id_poke, type_poke){

  setInfo(name_poke, id_poke, type_poke);
}

/* Função responsável por setar as informações dentro do objeto pokemon */
function setInfo(name_poke, id_poke, type_poke){

    pokemon = {
    nome: name_poke,
    id: id_poke,
    type: type_poke,

  };

  sendHTML();
}

/* Função responsável por enviar as informações para o front-end */
function sendHTML(){
  informacoes.innerHTML = 
  `<p>Nome: ${pokemon.nome}</p>
   <p>ID: ${pokemon.id}</p>
   <p>Tipo: ${pokemon.type[0]["type"]["name"]}</p>
  `
}

/* Fetch da API */
button_search.addEventListener('click', () =>{
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name.value}`)
  .then(response => response.json())
  .then(data => getInfo(data.name, data.id, data.types))
  .catch(err => console.log(err));


});

