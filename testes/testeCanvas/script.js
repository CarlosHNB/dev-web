const board = document.getElementById("board");
const context = board.getContext("2d");


let circle = {
    x: 160, 
    y: 140,
    raio: 20,
    inicio: 0,
    fim: 2 * Math.PI,
}


context.beginPath();

context.moveTo(300, 250);
context.lineTo(20, 250);
context.strokeStyle = "red";
context.stroke();


context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 250);
context.strokeStyle = "red";
context.stroke();

context.beginPath()
context.moveTo(100, 100);
context.lineTo(160, 100);
context.strokeStyle = "red";
context.stroke();

context.beginPath()
context.moveTo(160, 120);
context.lineTo(160, 100);
context.strokeStyle = "red";
context.stroke();

context.beginPath()
context.arc(circle.x, circle.y, circle.raio, circle.inicio, circle.fim);
context.strokeStyle = "red";
context.stroke();

context.beginPath()
context.moveTo(160, 160);
context.lineTo(160, 220);
context.strokeStyle = "red";
context.stroke();

