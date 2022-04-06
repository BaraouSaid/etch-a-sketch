const drawingSpace = document.querySelector('.container');
const clearBtn = document.querySelector('.clear-btn')


let square;

function createSquares () {
  for(let i = 0; i < 16 * 16; i++){
    square = document.createElement('div')
    square.className = 'square';
    drawingSpace.appendChild(square);
  }
}

createSquares()

const squares = document.querySelectorAll('.square');

function fillSquare (e) {
  
    e.target.classList.add('fill-square')
  
  
  // squares.forEach(square => square.classList.add('fill-square'))
}

function clearAll (e) {
  squares.forEach(square => {
    square.classList.remove('fill-square')
  })
}

// fillSquare();

squares.forEach(square => square.addEventListener('mouseover', fillSquare))

clearBtn.addEventListener('click', clearAll)



