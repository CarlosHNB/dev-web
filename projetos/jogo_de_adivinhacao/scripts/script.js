
function getUserInput(){
    let user_input = document.getElementById("user-input");
    return user_input.value;
}

function verifyNumber(user_value = getUserInput()){

   let routed_number = Math.floor(Math.random() * 10);
   
   if(user_value != routed_number){
    console.log("Você errou");
    console.log("O número correto é: ", routed_number);
   }else{
    console.log("Parabésn Você acertou");
    console.log("O número sorteado é: ", routed_number);
   }

}
