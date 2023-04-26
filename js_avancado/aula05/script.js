
let usuarios = ['Siriuz', 'Carlos', 'Die'];


function inserirUsuario(nome, callback){
    setTimeout(

        () => {

            usuarios.push(nome);
            callback();

        }, 1000);
}

function listarUsuarios(){
    console.log(usuarios);
}


inserirUsuario('Bl4nk', listarUsuarios);
