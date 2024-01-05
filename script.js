const gridContainer = document.querySelector('.grid-container')
const value = document.querySelector('.slider p')
const slider = document.querySelector('.slider input')
const colorPicker = document.querySelector('.color-picker input')
// const toggleGridBtn = document.querySelector('.toggle-grid')

let defaultColor = '#000000'
let grids = document.querySelectorAll('.grid-container div')

const drawGrid = (n) => {
    const containerDim = 600;
    for (let i = 0; i < n*n; i++) {
        const grid = document.createElement('div')
        grid.style.height = `${containerDim/n}px`
        grid.style.width = `${containerDim/n}px`
        grid.style.border = '.3px solid black'
        gridContainer.appendChild(grid)

        // toggleGridBtn.addEventListener('click', () => {
        //     grid.classList.toggle('disappear')
        // })
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

colorPicker.oninput = () => {
    defaultColor = colorPicker.value;
    console.log(defaultColor);
}


