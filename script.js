const button = document.querySelector('#button');
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
        square.style.backgroundColor = 'blue';
        });
}

function createRow(){
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    console.log(createSquare);
    for(let i = 0; i < numSquares; i++){
        createSquare(row);
    }
}

button.addEventListener('click', () => {
    numSquaresStr = '';
    numSquaresStr = prompt('Enter the number of squares you would like per side.');
    numSquares = Number(numSquaresStr);
    size = (700 - (numSquares * 2)) / numSquares;
    sizeStr = size.toString();
    for(let x = 0; x < numSquares; x++){
        createRow();
    }
});
