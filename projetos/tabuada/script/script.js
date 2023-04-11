

function gerar(){
    let input_user = document.getElementById("tabuada");
    value_user = input_user.value;
    input_user.value = "";
    
    for(let i = 1; i <= 10; i++){
        console.log(value_user * i);

        var resultado_gerado = document.getElementById("resultado");
        resultado_gerado.innerHTML += `<p>${value_user} * ${i} = ${value_user * i}`
    }
    
}
