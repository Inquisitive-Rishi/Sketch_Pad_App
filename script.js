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

drawGrid(5)

value.textContent = slider.value + " x " + slider.value;
slider.oninput = function() {
    value.textContent = this.value + " x " + this.value;
}