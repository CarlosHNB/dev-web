let lista = document.getElementById("lista");

let qtd_list = parseInt(lista.dataset.num);

let conteudo = "";


for(let i = 0; i < qtd_list; i++){
    conteudo += "<li>" + i + "</li>";
    
}

lista.innerHTML = conteudo;
