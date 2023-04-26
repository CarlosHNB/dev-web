
function speakGeneric(){
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric,
}

let cat = {
    sound: "Miau",
    speak: speakGeneric,
} 

/* dog.speak();
cat.speak(); */

// Informa o contexto para a função speakGeneric
let bindedFunction = speakGeneric.bind(cat);

bindedFunction();