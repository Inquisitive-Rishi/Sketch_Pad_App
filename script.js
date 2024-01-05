const pad = document.querySelector('.pad')
const gridContainer = document.querySelector('.grid-container')
const value = document.querySelector('.slider p')
const slider = document.querySelector('.slider input')


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

value.textContent = slider.value + " x " + slider.value;
drawGrid(slider.value)

slider.oninput = function() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }

    value.textContent = this.value + " x " + this.value;
    drawGrid(this.value)
}