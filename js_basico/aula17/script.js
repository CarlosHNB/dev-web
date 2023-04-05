/* var numero = 5;

for(var vez = 0; vez < numero; vez++){
    console.log("Executando o for pela " + vez + " vez");
}

console.log("Acabou") */


/* var numero = 5;

while(numero < 10){

    console.log("Número " + numero);
    numero++;

}   

console.log("Acabou") */



var flag = true;

while(flag){

    var numero = Math.random();

    var resposta = prompt("Digite o numero: ")

    if(parseInt(resposta) == numero){
        alert("Parabéns você acertou");
    }else{
        alert("Você errou o número era: " + numero);
    }

    var opcao = prompt("Deseja continuar?")

    opcao != "sim" ? flag=false : flag;
}



