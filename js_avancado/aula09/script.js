

function novoAluno(nome, idade){

    return {nome, idade};

}

let alunos = [
    novoAluno("Carlos", 23),
    novoAluno("Siriuz", 20),
    novoAluno("Die", 35),
    novoAluno("Bl4nk", 45),
];


function nomeIdade(aluno){

    return {
        name: aluno.nome,
        age: aluno.idade + 5,
    }

}

console.log(alunos.map(nomeIdade));

