const container = document.querySelector('.draw-pad');

// function drawGrid(n) {
//     for (let i = 0; i < n; i++) {
//         const box = document.createElement('div');
//         box.style.display = 'flex';
        
//     }
// }


for (let i = 0; i < 16; i++) {
    const box = document.createElement('div');
    box.style.display = 'flex';
    box.style.flexDirection = "column";
    container.appendChild(box);
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.style.height = '40px';
        grid.style.width = '40px';
        grid.style.border = '1px solid black';
        box.appendChild(grid);
    }
}