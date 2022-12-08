const buttonSetup = document.querySelector('#buttonSetup');
const container = document.querySelector('#container')

container.style.cssText = 'display: flex';

let size = 0;
let sizeStr = '';
let numSquares = 0;
let numSquaresStr = '';

function createSquare(parent){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = `width: ${sizeStr}px; height: ${sizeStr}px`; 
    parent.appendChild(square);
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "blue";
    });

}


function createRow(){
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for(let i = 0; i < numSquares; i++){
        createSquare(row);
    }
}

function clearGrid(gridSize){
    for (y = 0; y < gridSize; y++){
        container.removeChild(container.lastChild);
    }
        numSquares = 0;
    }



buttonSetup.addEventListener('click', function draw() {
    if (numSquares > 0 && numSquares < 101){
        clearGrid(numSquares);
        draw();
    }
    else{
    numSquares = 0;
    numSquaresStr = prompt('Enter the number of squares you would like per side. 1 - 100');
    numSquares = Number(numSquaresStr);
        if (numSquares < 1 || numSquares > 100){
            draw ();
        }
        else{
            size = (700 - (numSquares * 2)) / numSquares;
            sizeStr = size.toString();
            for(let x = 0; x < numSquares; x++){
                createRow();
            }
    }}

});
