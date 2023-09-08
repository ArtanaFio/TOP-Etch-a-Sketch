// Create a 16x16 grid of divs inside "grid-container"
let element;

const container = document.querySelector('.grid-container');


function createDiv() {
    for (let i = 1; i <= 256; i++) {
        element = "div" + i;
        console.log(element);
        element = document.createElement('div');
        element.classList.add('small-div');
        container.appendChild(element);
    }
    return element;
}
createDiv();