const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
function pokemon(){

    fetch(url)
   .then(response => response.json())
   .then(data => console.log(
    data.name, 
    data.id, 
    data.types[0]["type"]["name"], 
    data.stats[0]["base_stat"], // HP
    data.stats[1]["base_stat"], // Attack
    data.stats[2]["base_stat"], // Defense
    data.stats[5]["base_stat"], // Speed
    data.sprites["other"]["official-artwork"]["front_default"],
    ),
    

    )

   .catch(err => console.log(err));
 
 
};

pokemon();