// Create a 16 x 16 grid of div elements inside "grid-container"
let element;

const screen = document.querySelector('body');
const container = document.querySelector('.grid-container');
const pixelButton =document.getElementById('pixels');

pixelButton.addEventListener('click', () => {
    container.innerHTML = '';

    const ask = prompt("How many squares do you want in each column and row?", "0");
    const dimension = parseInt(ask);

    console.log("This is the grid's dimensions: " + dimension + " x " + dimension);

    function createSketchPad() {
        screen.appendChild(container);
        container.style.border = "1px solid black";
        container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;

        for (let i = 0; i < dimension * dimension; i++) {
            element = document.createElement('div');
            element.classList.add('small-div');
        container.appendChild(element);
        }   
    }
    createSketchPad();

    const divs = document.querySelectorAll('.small-div');
    divs.forEach((div) => {
        div.addEventListener('mouseenter', function () {
                this.style.backgroundColor = '#34fc34';
        });
        div.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#34fc34';
        });
    });
    
})









   

