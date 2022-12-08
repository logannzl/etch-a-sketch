const button = document.querySelector('#button');
const container = document.querySelector('#container');

container.style.cssText = 'display: flex';

let size = 0;
let sizeStr = '';

function createSquare(){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = `width: ${sizeStr}px; height: ${sizeStr}px`; 
    container.appendChild(square);
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'blue';
        });
}



button.addEventListener('click', () => {
    let numSquaresStr = '';
    numSquaresStr = prompt('Enter the number of squares you would like per side.');
    let numSquares = Number(numSquaresStr);
    size = (700 - (numSquares * 2)) / numSquares;
    sizeStr = size.toString();
    for(let i = 0; i < numSquares; i++){
        createSquare();
    }
});
