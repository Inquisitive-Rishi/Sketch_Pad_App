const drawPad = document.querySelector('.draw-pad')

const container = document.createElement('div');
drawPad.appendChild(container);

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.setAttribute('class', 'container');

function drawGrid(n) {
    for (let i = 0; i < (n*n); i++) {
        const grid = document.createElement('div');
        grid.style.boxSizing = 'border-box';
        grid.style.border = '1px solid black';
        grid.style.height = `${600/n}px`;
        grid.style.width = `${600/n}px`;
        grid.style.aspectRatio = 1;
        grid.setAttribute('id', 'grid');
        container.appendChild(grid);
    }
}
drawGrid(100);

const grids = document.querySelectorAll('#grid');

grids.forEach((grid)=> {
    grid.addEventListener('mouseover', ()=> {
        grid.classList.add('bgColor')
    })
    grid.addEventListener('mouseleave', ()=> {
        setTimeout(() => {
            grid.classList.remove('bgColor')
        }, 200);
    })
})