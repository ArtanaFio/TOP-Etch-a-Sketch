// Create a 16 x 16 grid of div elements inside "grid-container"
let element;

const screen = document.querySelector('body');
const container = document.querySelector('.grid-container');
const pixelButton =document.getElementById('pixels');

container.remove();

pixelButton.addEventListener('click', () => {
    function pressButton() {
        ask = prompt("Type the dimension you want the square grid to be:", "0");
        return ask;
    }
    const dimension = pressButton();
    const numberDimension = parseInt(dimension);
    console.log(numberDimension);
    console.log(typeof numberDimension);
    
    console.log("This is the dimension: " + numberDimension + " x " + numberDimension);
    
})
  

/*



    function createContainer() {
        screen.appendChild(container);
        for (let i = 1; i <= 256; i++) {
            element = "div" + i;
            //console.log(element);
            element = document.createElement('div');
            element.className = 'small-div';
            container.appendChild(element);
        }
        return element;
    }
    createContainer();

const divs = document.querySelectorAll('.small-div');

divs.forEach((div) => {
    div.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'yellowgreen';
    });
    div.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'yellowgreen';
    });
});
 */
