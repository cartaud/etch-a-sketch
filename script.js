const container = document.querySelector('.screen');

// dimension for a single square (will add option for user to chose this value later on)
const dim = 31.25;

//creates specified number of squares and adds them to container
for (let i=0; i<256 ; i++){
    const sqr = document.createElement('div');
    sqr.classList.add('square');
    sqr.style.width = `${dim}px`;
    sqr.style.height = `${dim}px`;
    container.append(sqr);
}


//creates a list of every element with class = square
const squares = document.querySelectorAll('.square')


//adds an event listener mouse over to every square
for (let i=0; i<squares.length;i++){
    squares[i].addEventListener('mouseover', start)
}

//on mouse over, the squares background color changes to black
function start() {
    this.classList.add('fill')
}




function blackToggle() {
    for (let i=0; i<squares.length;i++){
        squares[i].removeEventListener('mouseover', start)
        squares[i].removeEventListener('mouseover', rainbowFunc)
        squares[i].addEventListener('mouseover', blackFunc)
    }
}

function blackFunc() {
    this.style.backgroundColor = 'black';
}





//attempting to create rainbow effect WIP
const rainbowArr = ['red', 'blue', 'green', 'pink', 'purple', 'orange', 'yellow'];
let rand = Math.floor(Math.random() * rainbowArr.length)


function rainbowToggle() {
    for (let i=0; i<squares.length;i++){
        squares[i].removeEventListener('mouseover', start)
        squares[i].removeEventListener('mouseover', blackFunc)
        squares[i].addEventListener('mouseover', rainbowFunc)
    }
}

function rainbowFunc() {
    this.style.backgroundColor = rainbowArr[rand];
    
}


function clearToggle() {
    for (let i=0; i<squares.length;i++){
        squares[i].removeEventListener('mouseover', blackFunc)
        squares[i].removeEventListener('mouseover', rainbowFunc)
        squares[i].style.backgroundColor = 'white';
        squares[i].addEventListener('mouseover', start)
    }
}




/*
function change(value) {
    for (let i=0; i<squares.length;i++){
        squares[i].removeEventListener('mouseover', changeColor)
        squares[i].removeEventListener('mouseover', blackFunc)
        squares[i].addEventListener('mouseover', rainbowFunc)
    }
    if (value=1) {
        for (let i=0; i<squares.length;i++){
            squares[i].addEventListener('mouseover', blackFunc)
        }
    }
    else if (value=2) {
        for (let i=0; i<squares.length;i++){
            squares[i].addEventListener('mouseover', rainbowFunc)
        }
    }
    else if (value=3) {
        for (let i=0; i<squares.length;i++){
            squares[i].style.backgroundColor = 'white';
        }
    }
}

*/