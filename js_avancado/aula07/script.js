
let usuarios = ["Siriuz", "Die", "Carlos"];

function inserirUsuarios(nome){
    
    let promise = new Promise(function(resolve, reject){

        setTimeout(
            () =>{

                usuarios.push(nome);

                let error = false;

                if(!error){
                    resolve();
                }else{
                    reject({msg: "Error qualquer"})
                }

            }, 1000);
    });

    return promise;

}

function listarUsuarios(){
    console.log(usuarios);
}

async function executar(){

    await inserirUsuarios("Bl4nk");
    listarUsuarios();
    
    
}

executar();