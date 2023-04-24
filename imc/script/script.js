
let nome = document.getElementById("nome");
let altura = document.getElementById("altura");
let peso = document.getElementById("peso");

function verifyContent(){
    if(nome.value == "" || altura.value == "" || peso.value == ""){
        let informacoes = document.getElementById("informacoes");
        informacoes.innerHTML = "Preencha todos os campos"
    }else{
        getIMC();
    }
}

/* Função que Calcula o IMC */
function getIMC(){
    let imc = peso.value / (Math.pow(altura.value, 2));

    let informacoes = document.getElementById("informacoes");

    informacoes.innerHTML = "";
    informacoes.innerHTML += `${nome.value} seu IMC é ${imc.toFixed(2)}`;

    if(imc.toFixed(2) >= 18.5 && imc.toFixed(2) <= 24.9){
        informacoes.innerHTML += `<br>Você está com o peso correto!`
    }else if(imc.toFixed(2) >= 25.0 && imc.toFixed(2) <= 29.9){
        informacoes.innerHTML += `<br>Você está com sobrepeso!`
    }
}




