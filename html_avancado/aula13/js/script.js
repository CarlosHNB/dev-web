let tela = document.getElementById("tela");
let context = tela.getContext("2d");

let x = 250;
let y = 250;
let raio = 100;

let inicio = 0;
let fim = 1.5 * Math.PI;
context.beginPath();
context.strokeStyle = "red";
context.fillStyle = "blue";

context.arc(x, y, raio, inicio, fim);

context.fill();
context.stroke();