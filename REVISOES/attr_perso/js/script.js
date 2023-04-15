const lampElement = document.getElementById("lampada_apagada");
const buttonsElements = document.getElementById("buttons");

function getEventButton(event){

    lampStatus[event.target.id]();

}

const lampStatus = {
    'ligar': function (){lampElement.setAttribute('src', './images/lampada-on.gif')},
    'desligar': function(){lampElement.setAttribute('src', './images/lampada-off.gif')},
}

buttonsElements.addEventListener("click", getEventButton);
