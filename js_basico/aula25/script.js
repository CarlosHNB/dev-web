
function calcMedia(){
    return (this.notas[0] + this.notas[1])/2;
}

var aluno = {
    nome: "Carlos",
    notas: [7, 9],
    media: calcMedia,

    ternario: 20 > 18 ? "True" : "False",

    
}

var aluno1 = {
    nome: "João",
    notas: [6, 8],
  
   media: calcMedia, // Passando a função para a propriedade media

}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());

console.log(typeof(aluno.media()));
