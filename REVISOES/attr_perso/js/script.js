let lampada_estado = document.getElementById("lampada_apagada");
let button_on = document.getElementById("ligar")
let button_off = document.getElementById("desligar")


button_on.addEventListener("click", function(){
    lampada_estado.setAttribute("src","./images/lampada-on.gif");
})

button_off.addEventListener("click", function(){
    lampada_estado.setAttribute("src", "./images/lampada-off.gif");
})

