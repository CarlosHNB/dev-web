var myHeaders = new Headers();
myHeaders.append("apikey", "");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function converter(){

    let input = document.getElementById("valor");
    valor = input.value;

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=BRL&from=USD&amount=${valor}`, requestOptions)
    .then(response => response.json())
    .then(result => {
            let resultado = `${valor} dolares = ${result.result} em reais`  
            document.getElementById("resultado").innerHTML = resultado;
    })
    .catch(error => console.log('error', error));   
    
    
}