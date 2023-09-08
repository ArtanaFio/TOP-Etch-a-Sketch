// Create a 16 x 16 grid of div elements inside "grid-container"
let element;

const container = document.querySelector('.grid-container');


function createDiv() {
    for (let i = 1; i <= 256; i++) {
        element = "div" + i;
        console.log(element);
        element = document.createElement('div');
        element.className = 'small-div';
        container.appendChild(element);
    }
    return element;
}
createDiv();

const divs = document.querySelectorAll('.small-div');

divs.forEach((div) => {
    div.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'yellowgreen';
    });
    div.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'yellowgreen';
    });
});
