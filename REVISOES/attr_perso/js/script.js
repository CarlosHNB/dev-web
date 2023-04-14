const lampElement = document.getElementById("lampada_apagada");
const ButtonsElements = document.getElementById("buttons");

function getEventButton(event){

    lampStatus[event.target.id]();

}

const lampStatus = {
    'ligar': function (){lampElement.src = './images/lampada-on.gif'},
    'desligar': function(){lampElement.src = './images/lampada-off.gif'},
}

ButtonsElements.addEventListener("click", getEventButton)



/* button_on.addEventListener("click", function(){
    lampada_estado.setAttribute("src","./images/lampada-on.gif");
})

button_off.addEventListener("click", function(){
    lampada_estado.setAttribute("src", "./images/lampada-off.gif");
}) */

