let defClr = 'black';

const drawPad = document.querySelector('.draw-pad')

const container = document.createElement('div');
drawPad.appendChild(container);

const two = document.querySelector('#two');
const four = document.querySelector('.four');
const sixteen = document.querySelector('.sixteen');
const thirtyTwo = document.querySelector('.thirty-two');
const sixtyFour = document.querySelector('.sixty-four');
const clearGrd = document.querySelector('.clear-grd');

const tglGrid = document.querySelector('.tgl-grd');


two.addEventListener('click', ()=> createCustomGrid(2));
four.addEventListener('click', ()=> createCustomGrid(4));
sixteen.addEventListener('click', ()=> createCustomGrid(16));
thirtyTwo.addEventListener('click', ()=> createCustomGrid(32));
sixtyFour.addEventListener('click', ()=> createCustomGrid(64));
clearGrd.addEventListener('click', ()=> window.location.reload())

const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const brown = document.querySelector('.brown');
const orange = document.querySelector('.orange');
const purple = document.querySelector('.purple');
const eraser = document.querySelector('.eraser');
const random = document.querySelector('.rndm-clr');


eraser.addEventListener('click',()=> defClr = 'rgb(249, 247, 244)');
red.addEventListener('click',()=> defClr = 'red');
blue.addEventListener('click',()=> defClr = 'blue');
brown.addEventListener('click',()=> defClr = 'brown');
orange.addEventListener('click',()=> defClr = 'orange');
purple.addEventListener('click',()=> defClr = 'purple');
random.addEventListener('click',()=> defClr = `hsl(${Math.random()*360},100%,50%)`);



container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.setAttribute('class', 'container');

let draw = false;

function drawGrid(n) {
    for (let i = 0; i < (n*n); i++) {
        const grid = document.createElement('div'); 
        grid.style.boxSizing = 'border-box';
        grid.classList.add('crt-brd');
        grid.style.height = `${600/n}px`;
        grid.style.width = `${600/n}px`;
        grid.style.aspectRatio = 1;
        grid.setAttribute('id', 'grid');
        container.appendChild(grid);
    }
}


function createCustomGrid(x) {
    let input = parseInt(x);
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
        
        tglGrid.addEventListener('click', ()=> {
            grids.forEach(grid => grid.classList.toggle('crt-brd'));
        })
        //if container is empty, draw grids if not create grids.

        // mouse click and hold function called here.
        grids.forEach((grid) => {
            grid.addEventListener('mousedown',startDraw);
            grid.addEventListener('mouseup', stopDraw);
            grid.addEventListener('mousemove',()=> drawNow(grid));
        })
    }
};


function startDraw() {
    draw = true;
}

function stopDraw() {
    draw = false;
}

function drawNow(x) {
    if (!draw) return;
    x.style.backgroundColor = defClr;
}




