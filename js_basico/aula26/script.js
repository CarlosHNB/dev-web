
function criarAluno(nome, n1, n2){

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2)/2;
        }
    }

}

var turma = [
    criarAluno("Carlos", 9, 7),
    criarAluno("Siriuz", 5, 7),
    criarAluno("Die", 8.4, 5.9),

]

for(var aluno of turma){
    console.log(
                aluno.nome + 
                " - " + 
                aluno.nota1 +
                " - "+ 
                aluno.nota2 +
                " - " + aluno.media());
}