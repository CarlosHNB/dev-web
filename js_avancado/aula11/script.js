
var pessoa = {
    nome: "Siriuz Bl4ck",
    idade: 23,
};

var contato = {
    telefone: 985221348,
    email: "siriuz@bl4ck.com",
};


var copia = {...pessoa, ...contato};
copia.idade = 88;

console.log(pessoa);
console.log(copia)