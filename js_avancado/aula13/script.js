
function novoAluno(nome, idade){
    return {nome, idade};
}

let alunos = [
    novoAluno("Carlos", 23),
    novoAluno("Siriuz", 20),
    novoAluno("Die", 35),
    novoAluno("Bl4nk", 45),
];


function idadeDaTurma(total, aluno){
    return total + aluno.idade;
}


console.log(alunos.reduce(idadeDaTurma, 0))