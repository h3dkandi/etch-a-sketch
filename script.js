let gridNumber = 16;
let colorMode = 'black';
createNewGrid(gridNumber);

function createNewGrid() {
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < gridNumber * gridNumber; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

    fillColor();
}

const resetBtn = document.querySelector('.resetBtn');

resetBtn.addEventListener('click', () => {
    gridNumber = window.prompt('Select new grid style (only numbers below 100):', 16);

    if (gridNumber > 100) {
        alert('Sorry, choose number below 100')
        return;
    } else if (gridNumber === null) {
        return;
    }

    let removeGrid = document.querySelectorAll('.grid-item')
    removeGrid.forEach((item) => {
        item.remove();
    });

    createNewGrid(gridNumber);
    colorMode = 'black';

});

function fillColor() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            if (colorMode === 'black') {
                if (e.currentTarget.style.backgroundColor !== 'black') {
                    e.currentTarget.style.opacity = 0;
                }
                e.currentTarget.style.backgroundColor = 'black';
                let opacityIncrement = 0.10;
                let opacity = Number(e.currentTarget.style.opacity) + opacityIncrement;
                e.currentTarget.style.opacity = opacity;
            } else if (colorMode === 'randomColor') {
                let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                e.currentTarget.style.backgroundColor = randomColor;
                e.currentTarget.style.opacity = 100;
            } else if (colorMode === 'erase') {
                e.currentTarget.style.opacity = 100;
                e.currentTarget.style.backgroundColor = 'white';
            }
        });
    });
}

const randomColorBtn = document.querySelector('.randomColorBtn');
randomColorBtn.addEventListener('click', () => {
    colorMode = 'randomColor';
})

const blackColorBtn = document.querySelector('.blackColorBtn');
blackColorBtn.addEventListener('click', () => {
    colorMode = 'black';
})

const eraseBtn = document.querySelector('.eraseBtn');
eraseBtn.addEventListener('click', () => {
    colorMode = 'erase';
})