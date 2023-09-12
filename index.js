// Create a 16 x 16 grid of div elements inside "grid-container"
let element;

const screen = document.querySelector('body');
const container = document.querySelector('.grid-container');
const pixelButton =document.getElementById('pixels');

container.remove();

pixelButton.addEventListener('click', () => {
    function pressButton() {
        ask = prompt("How many squares do you want in each column and row?", "0");
        return ask;
    }
    const dimension = pressButton();
    const numberDimension = parseInt(dimension);
    console.log(numberDimension);
    console.log(typeof numberDimension);
    
    console.log("This is the grid's dimensions: " + numberDimension + " x " + numberDimension);
    
    function createContainer() {
        screen.appendChild(container);
        for (let i = 0; i < dimension; i++) {
            for (let j = 0; j < dimension; j++) {
                container.style.gridTemplateRows = `repeat(${numberDimension}, 1fr)`;
                container.style.gridTemplateColumns = `repeat(${numberDimension}, 1fr)`;
                element = document.createElement('div');
                element.className = 'small-div';
                container.appendChild(element);
            }    
        }
        return element;
    }
    createContainer();

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

   

