
document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square) =>{
        
        square.addEventListener('click', handleClick);
    });
});

function handleClick(event){
    console.log(event.target);

    let squareItem = event.target;
    let position = squareItem.id;

    if(handleMove(position)){
        
        setTimeout(() =>{
            alert("O Jogo Acabou - O vencedor foi " + `${playerTime + 1}`);

        }, 10)
    }

    updateSquare(position);

};

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'</div>`
}

/* function updateSquares(){
    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square) =>{
        
        square.addEventListener('click', handleClick);
    
    })

    squares.forEach((square) =>{

        let squares = document.querySelectorAll(".square");
    
        square.addEventListener('click', handleClick);
    
        squares.forEach((square) => {
            let position = square.id;
            let symbol = board[position];
    
            if(symbol != ""){
                square.innerHTML = `<div class='${symbol}'</div>`
            }
        })
    })
}; */


    
