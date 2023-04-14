let lampada_estado = document.getElementById("lampada_apagada");

function ligarLamp(){
    lampada_estado.setAttribute("src","./images/lampada-on.gif");
}

function desligarLamp(){
    lampada_estado.setAttribute("src", "./images/lampada-off.gif");
}