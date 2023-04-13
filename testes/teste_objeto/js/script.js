

let options = prompt("Entre com o tipo: ");

function listarPokemon(){

    let pokedex = {
        'agua': ['squirtle'],
        'fogo': ['charmander'],
        'natureza': ['bulbasaur'],
        'eletrico': ['pikachu'],
    }

    if(options in pokedex){
        let retorno = document.getElementById("retorno")
        retorno.innerHTML += pokedex[options];
    }
}

listarPokemon();

