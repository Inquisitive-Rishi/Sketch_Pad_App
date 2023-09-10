const drawPad = document.querySelector('.draw-pad')


function drawGrid(n) {
    for (let i = 0; i < (n*n); i++) {
        const grid = document.createElement('div');
        grid.style.boxSizing = 'border-box';
        grid.style.border = '.2px solid black';
        grid.style.height = `${600/n}px`;
        grid.style.width = `${600/n}px`;
        grid.style.aspectRatio = 1;
        drawPad.appendChild(grid);
    }
}

drawGrid(5);