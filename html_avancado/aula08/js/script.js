let jogador = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;

function moveJogador(x, y){
    let posX = x + "px";
    let posY = x + "px";

    jogador.style.top = posX;
    jogador.style.left = posY;

}

setInterval(function (){
    moveJogador(xInicial++, yInicial++);
}, 24);