const pad = document.querySelector('.pad')
const gridContainer = document.querySelector('.grid-container')

const drawGrid = (n) => {
    const containerDim = 600;
    for (let i = 0; i < n*n; i++) {
        const grid = document.createElement('div')
        grid.style.height = `${containerDim/n}px`
        grid.style.width = `${containerDim/n}px`
        grid.style.border = '1px solid black'
        gridContainer.appendChild(grid)
    }
}

drawGrid(5)