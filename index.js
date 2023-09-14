// Create a 16 x 16 grid of div elements inside "grid-container"
let element;

const screen = document.querySelector('body');
const container = document.querySelector('.grid-container');
const pixelButton =document.getElementById('pixels');
const divs = document.querySelectorAll('.small-div');

pixelButton.addEventListener('click', () => {
    function askPrompt() {
        ask = prompt("How many squares do you want in each column and row?", "0");
        return ask;
    }
    askPrompt();

    const dimension = parseInt(askPrompt());
    console.log(dimension);
    console.log(typeof dimension);
    console.log("This is the grid's dimensions: " + dimension + " x " + dimension);

    function createSketchPad() {
        screen.appendChild(container);
        for (let i = 0; i < dimension; i++) {
            for (let j = 0; j < dimension; j++) {
                container.style.border = "1px solid black";
                container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
                container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
                element = document.createElement('div');
                element.className = 'small-div';
                container.appendChild(element);
            }    
        }
        return element;
    }
    createSketchPad();
    
    divs.forEach((div) => {
        div.addEventListener('mouseenter', function () {
                this.style.backgroundColor = '#34fc34';
        });
        div.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#34fc34';
        });
    });
})








   

