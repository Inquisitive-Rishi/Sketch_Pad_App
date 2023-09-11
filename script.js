const drawPad = document.querySelector('.draw-pad')
const btn = document.querySelector('.grid-count')

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


function createCustomGrid() {
    let input = parseInt(prompt("No:of grid - each side",10));
    if (input > 100) {
        return;
    } else {
        drawGrid(input)
        let total_grids = input**2;
        const grids = document.querySelectorAll('#grid');
        if (grids.length > total_grids) {
            for (let i = 0; i < (grids.length-total_grids); i++) {
                grids[i].remove();
            }
        }
        
        //if container is empty, draw grids if not create grids.
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', ()=> {
        grid.classList.add('bgColor')
    })
        grid.addEventListener('mouseleave', ()=> {
        setTimeout(() => {
            grid.classList.remove('bgColor')
        }, 200);
        })
    })
    }
}

function removeGrids() {
    for (let i = 0; i < total_grids; i++) {
        grids[i].remove();
    } 
}

btn.addEventListener('click',createCustomGrid);
