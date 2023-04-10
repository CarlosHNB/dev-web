// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml

// Crianças valem por 0,5

let input_adultos = document.getElementById("adultos");
let input_criancas = document.getElementById("criancas");
let input_duracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando..");

    let qtd_adultos = input_adultos.value
    let qtd_criancas = input_criancas.value
    let duracao = input_duracao.value

    let qtd_total_carne = (carnePorPessoa(duracao) * qtd_adultos) + ((carnePorPessoa(duracao)/2) * qtd_criancas);
    let qtd_total_cerveja = cervejaPorPessoa(duracao) * qtd_adultos;
    let qtd_total_bebidas = bebidasPorPessoa(duracao) * qtd_adultos + ((bebidasPorPessoa(duracao)/2) * qtd_criancas);
    

    resultado.innerHTML = `<p>${qtd_total_carne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtd_total_cerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtd_total_bebidas/2000)} Garrafas de Bebidas</p>`

}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }

}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }

}

function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }

}
