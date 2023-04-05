// Criando objetos

/*  

Outra forma de criar um objeto
var aluno = new Object({key: "value"});

*/


var aluno = {
    nome : "Carlos",
    notas: [7.5, 9.0],

}

var novaPropriedade = "idade";

aluno.matricula = 12345;
aluno["sobrenome"] = "Henrique";
console.log(aluno);

// Passando uma variável para ser a key do objeto aluno
aluno[novaPropriedade] = 23;


//Imprimindo a propriedade nome do aluno
/* console.log(aluno.nome);

console.log(aluno.notas[0]); // Imprimindo a nota1

console.log(aluno["notas"][1]); // Imprimindo a nota2 */

