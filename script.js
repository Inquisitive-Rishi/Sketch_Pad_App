const gridContainer = document.querySelector('.grid-container')
const value = document.querySelector('.slider p')
const slider = document.querySelector('.slider input')
const eraser = document.querySelector('.eraser')
const colorPicker = document.querySelector('.color-picker input')
const toggleGridBtn = document.querySelector('.toggle-grid')
const footer = document.querySelector('footer')
const resetBtn = document.querySelector('.reset')

let draw = false;

let currentColor = '#000000'

colorPicker.oninput = () => {
    currentColor = colorPicker.value;
}

const drawGrid = (n) => {
    const containerDim = 600;
    for (let i = 0; i < n*n; i++) {
        const grid = document.createElement('div')
        grid.style.height = `${containerDim/n}px`
        grid.style.width = `${containerDim/n}px`
        // grid.style.border = '.3px solid black'
        gridContainer.appendChild(grid)
    }
    
    const grids = document.querySelectorAll('.grid-container div')

    // toggleGridBtn.addEventListener('click', () => {
    //     grids.forEach(grid => {
    //         grid.classList.toggle('disappear');
    //     })
    // })

    grids.forEach(grid => {
        grid.addEventListener('mousedown',() => draw = true);
        grid.addEventListener('mouseup',() => draw = false);
        grid.addEventListener('mousemove',() => drawNow(grid));
    })

    resetBtn.addEventListener('click', () => {
        grids.forEach(grid => {
            grid.style.backgroundColor = 'white'
            colorPicker.value = '#000'
        })
    })
}

function drawNow(x) {
    if (!draw) {
        return false;
    } else {
        x.style.backgroundColor = currentColor;
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

eraser.addEventListener('click', () => {
    currentColor = 'white'
})

footer.textContent = `Copyright © Rishi Raj ${new Date().getFullYear()}`