let tela = document.getElementById("tela");
let context = tela.getContext("2d");

let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0,
    antiHorario: true, /* Faz o efeito de apagar o circulo */
}

function drawCanvas(){
    context.beginPath();
    context.rect(0,0,500,500);
    context.fillStyle = "beige";
    context.fill();
}

function drawCircle(circle){
    drawCanvas();
    context.beginPath();
    context.fillStyle = "red";
    context.strokeStyle = "blue";
    context.arc(circle.x, circle.y, circle.raio, circle.inicio, circle.fim);
    context.lineWidth = 5;
    context.stroke();
    context.fill();
}


setInterval(function(){
    
    if(circle.fim < 2 * Math.PI){
        circle.fim += 0.3;
        circle.x += 3;
    }

    drawCircle(circle);

}, 100)



