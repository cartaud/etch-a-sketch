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
    sqr.addEventListener('mouseover', blackFunc);
    sqr.style.width = `${dim}px`;
    sqr.style.height = `${dim}px`;
    container.append(sqr);
}

slider.oninput = function () {
    output.innerHTML = this.value;
    change(3);
    reSize(this.value);
}

//removes all screen squares and creates new squares for new size
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

//on mouse over, the squares background color changes to black
function blackFunc() {
    this.style.backgroundColor = 'black';
}

//assigns a random color from array for every square
function rainbowFunc() {
    const rainbowArr = ['red', 'blue', 'green', 'pink', 'purple', 'orange', 'yellow', 'cyan', 'indigo', 'violet', 'ForestGreen', 'HotPink', 'IndianRed', 'Lime', 'Teal'];
    let rand = Math.floor(Math.random() * rainbowArr.length);
    this.style.backgroundColor = rainbowArr[rand];
}


//assigns new event listener 
function change(value) {
    //creates a list of every element with class = square
    const squares = document.querySelectorAll('.square');

    if (value==1) {
        for (let i=0; i<squares.length;i++){
            squares[i].removeEventListener('mouseover', rainbowFunc)
            squares[i].addEventListener('mouseover', blackFunc)
        }
    }
    else if (value==2) {
        for (let i=0; i<squares.length;i++){
            squares[i].removeEventListener('mouseover', blackFunc)
            squares[i].addEventListener('mouseover', rainbowFunc)
        }
    }
    else if (value==3) {
        for (let i=0; i<squares.length;i++){
            squares[i].style.backgroundColor = 'white';
            squares[i].addEventListener('mouseover', blackFunc);
        }
    }
}


//function that allows user to choose drawing color
let custom = document.getElementById('customColor');
custom.oninput = function() {
    let clr = this.value
    
    const squares = document.querySelectorAll('.square');
    for (let i=0; i<squares.length;i++){
        squares[i].removeEventListener('mouseover', blackFunc)
        squares[i].removeEventListener('mouseover', rainbowFunc)
        squares[i].addEventListener('mouseover', () => {
            squares[i].style.backgroundColor = clr;
            
        });
    } 
}



/*

    

else if (value==3){
        for (let i=0; i<squares.length;i++){
            squares[i].removeEventListener('mouseover', blackFunc)
            squares[i].removeEventListener('mouseover', rainbowFunc)
            squares[i].addEventListener('mouseover', customFunc)
        }
    }
*/