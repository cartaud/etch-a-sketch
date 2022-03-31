const container = document.querySelector('.screen');

let slider = document.getElementById('myRange');
let output = document.getElementById('slideValue');
output.innerHTML = slider.value;

let size = output.innerHTML;
let total = size * size; //dimension for entire sketch screen
let dim = (500/size); // dimension for a single square 
//creates specified number of squares and adds them to container
for (let i=0; i<total ; i++){
    const sqr = document.createElement('div');
    sqr.classList.add('square');
    sqr.style.width = `${dim}px`;
    sqr.style.height = `${dim}px`;
    container.append(sqr);
}

slider.oninput = function () {
    output.innerHTML = this.value;
    clearToggle();
    reSize(this.value);
}

function reSize(newSize) {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    size = newSize;
    total = size * size;
    dim = (500/size);
    for (let i=0; i<total ; i++){
        const sqr = document.createElement('div');
        sqr.classList.add('square');
        sqr.addEventListener('mouseover', blackFunc);
        sqr.style.width = `${dim}px`;
        sqr.style.height = `${dim}px`;
        container.append(sqr);
    }

    
}

//creates a list of every element with class = square
const squares = document.querySelectorAll('.square')

//Initializes the starting color to be black 
for (let i=0; i<squares.length;i++){
    squares[i].addEventListener('mouseover', blackFunc)
}

//Will change draw color back to black on button click
function blackToggle() {
    for (let i=0; i<squares.length;i++){
        squares[i].removeEventListener('mouseover', rainbowFunc)
        squares[i].addEventListener('mouseover', blackFunc)
    }
}

//on mouse over, the squares background color changes to black
function blackFunc() {
    this.style.backgroundColor = 'black';
}





//attempting to create rainbow effect WIP
const rainbowArr = ['red', 'blue', 'green', 'pink', 'purple', 'orange', 'yellow'];
let rand = Math.floor(Math.random() * rainbowArr.length)


function rainbowToggle() {
    for (let i=0; i<squares.length;i++){
        squares[i].removeEventListener('mouseover', blackFunc)
        squares[i].addEventListener('mouseover', rainbowFunc)
    }
}

function rainbowFunc() {
    this.style.backgroundColor = rainbowArr[rand];
    
}


function clearToggle() {
    for (let i=0; i<squares.length;i++){
        squares[i].style.backgroundColor = 'white';
        squares[i].addEventListener('mouseover', blackFunc);
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