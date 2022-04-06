const drawingSpace = document.querySelector('.container');
const clearBtn = document.querySelector('.clear-btn');
let squareSize = document.querySelector('.square-size');
let square;
let squareNumbers = 16;
let mouseDown = false 
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;


function changeSquareSize (e) {
  squareNumbers = e.target.value;
  // createSquares();
  
}

function createSquares () {
  for(let i = 0; i < squareNumbers * squareNumbers; i++){
    square = document.createElement('div')
    square.className = 'square';
    drawingSpace.appendChild(square);
  }
}

createSquares()

const squares = document.querySelectorAll('.square');


function fillSquare (e) {
  if(e.type === 'mouseover' && mouseDown === true) {
    e.target.classList.add('fill-square')
  }
    
}

function clearAll (e) {
  squares.forEach(square => {
    square.classList.remove('fill-square')
  })
}



squares.forEach(square => square.addEventListener('mouseover', fillSquare))
squares.forEach(square => square.addEventListener('mousedown', fillSquare))

clearBtn.addEventListener('click', clearAll)

squareSize.addEventListener('input', changeSquareSize)


