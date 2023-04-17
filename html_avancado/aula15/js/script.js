let tela = document.getElementById("tela");
let context = tela.getContext("2d");

let img = new Image();
img.src = "./images/pikachu.png"
img.onload = desenharImg;

function desenharImg(){
    context.drawImage(this, 0, 0,this.naturalWidth/2, this.naturalHeight/2);
}
