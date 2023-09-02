const container = document.querySelector('.draw-pad');

for (let i = 0; i < 16; i++) {
    const grid = document.createElement('div');
    container.appendChild(grid)
    
    grid.style.width = '31px';
    grid.style.height = '31px';
    grid.style.border = '.25px solid grey';
}





