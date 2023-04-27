

function novoAluno(nome, idade){

    return {nome, idade};

}

let alunos = [
    novoAluno("Carlos", 23),
    novoAluno("Siriuz", 20),
    novoAluno("Die", 35),
    novoAluno("Bl4nk", 45),
];

function temMenosDe30(aluno){
    return aluno.idade < 30;
}

function temMaisDe30(aluno){
    return aluno.idade > 30;
}

console.log(alunos.filter(temMenosDe30));