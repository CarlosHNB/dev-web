let imagem = document.getElementById("pokemon");

imagem.addEventListener("click", function(){
    imagem.setAttribute("src", "./imagens/pikachu.png");
})


let lista = document.getElementById("lista");

let qtd_list = parseInt(lista.getAttribute("num"));

let conteudo = "";


for(let i = 0; i < qtd_list; i++){
    conteudo += "<li>" + i + "</li>";
    
}

lista.innerHTML = conteudo;
