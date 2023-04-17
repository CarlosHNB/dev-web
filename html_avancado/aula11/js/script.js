let tela = document.getElementById("tela");
let context = tela.getContext("2d");

/* Cria um retângulo preenchido com vermelho 
 context.fillStyle = "red";
 context.fillRect(10,10, 100, 200); */

/* Cria um retângulo com borda azul e sem preenchimento
 context.strokeStyle = "red";
 context.strokeRect(10, 10, 100, 200);
 */

 /* Cria um retangulo preenchido com vermelho e com borda azul */
 context.rect(10, 10, 100, 200);
 context.fillStyle = "red";
 context.strokeStyle = "blue";
 context.lineWidth = 3;
 context.fill();
 context.stroke();

 context.clearRect(45, 90, 30, 40);