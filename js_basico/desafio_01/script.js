/* Nota do aluno - nota 1 - nota 2 - média - aprovado/reprovado */



var nomes = ["Carlos", "Siriuz", "Die"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media(nota1, nota2){
    return (nota1 + nota2)/2;

}

function aprovado(media){
    

    if(media > 7){
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}

for(var index in nomes){
    
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var media_aluno = media(nota1, nota2);
    
    console.log(

                nomes[index] + 
                " - " + 
                nota1 + 
                " - " +
                nota2 + 
                " - " +
                media_aluno + 
                " - " + aprovado(media_aluno));
}