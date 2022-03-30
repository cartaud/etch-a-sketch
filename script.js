const container = document.querySelector('.screen');
const dim = 31.25;
for (let i=0; i<256 ; i++){
    const sqr = document.createElement('div');
    sqr.classList.add('square');
    sqr.style.width = `${dim}px`;
    sqr.style.height = `${dim}px`;
    container.append(sqr);
}