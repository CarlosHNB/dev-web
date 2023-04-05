/* 

function saudacao(){
    return "Olá Mundo!";
}

var s = saudacao; // Passando a função como variável

console.log(s() ); // s vai se comportará como a função que foi atribuida a ela. */


// Função Anônima

/* var media = function (n1, n2){
    
    return (n1 + n2)/2;
}

console.log(media(5,6)); */

var media = (n1, n2) => {
    
    return (n1 + n2)/2;
}

console.log(media(5,6));