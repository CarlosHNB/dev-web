

/* Função que retorna o quadrado de x
var square = function(x){
    return x * x;
}

console.log(square(2)); */

// Função que retorna a exponenciação de um número
var power = function(base, expoente){
    var resultado = 1;

    for (var contador = 0; contador < expoente; contador++){
        resultado *= base;
    }

    return resultado;
}

console.log(power(2,8));