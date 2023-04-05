var nota1 = 1.0;
var nota2 = 1.0;

media = (nota1 + nota2) / 2;

var conceito = "";
  
if(media >= 8){
    conceito = "Ótimo";
}

else if(media >= 6.5){
    conceito = "Bom";
}

else{
    conceito = "Regular";
}

switch(conceito = "mais ou menos"){
    case "Ótimo":
        console.log("Parabés, se garantiu!");
        break;
    case "Bom":
        console.log("Boa, bateu na trave!!");
        break;
    case "Regular":
        console.log("Não deu bom, mas vai da certo");
        break;
    
    default: 
        console.log("Error 404 kkkk");
}

