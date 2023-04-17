let tela = document.getElementById("tela");
let context = tela.getContext("2d");

context.beginPath();

context.lineWidth = 4;
context.strokeStyle = "red";
context.moveTo(10, 10);
context.lineTo(400, 300);
context.lineTo(100, 300);
context.closePath();
context.stroke();

context.beginPath();

context.lineWidth = 4;
context.strokeStyle = "blue";
context.fillStyle = "yellow";
context.moveTo(10, 10);
context.lineTo(400, 300);
context.lineTo(20, 200);
context.closePath();
context.stroke();
context.fill();