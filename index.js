// Create a 16 x 16 grid of div elements inside "grid-container"
let element;

const sketchSide = document.querySelector('.sketch');
const panel = document.querySelector('.left');
const container = document.querySelector('.grid-container');
const pixelButton =document.getElementById('pixels');
const clearButton = document.getElementById('clear');
const rainbowButton = document.getElementById('colors');
const originalButton = document.getElementById('original');
const markerButton = document.getElementById('darken');



pixelButton.addEventListener('click', () => {
    console.log('You pressed the "New Grid" Button');
    console.log("You're using original color");
    container.innerHTML = '';
    clearButton.style.display = 'block';
    originalButton.style.display = 'block';
    rainbowButton.style.display = 'block';
    markerButton.style.display = 'block';


    let dimension;

    while (true) {
        const ask = prompt("How many squares do you want in each column and row?", "0");
        
        if (/^\d+$/.test(ask)) {
            dimension = parseInt(ask);

            if (!isNaN(dimension) && dimension >= 1 && dimension <=100) {
                console.log("valid number");
                break;
            } else {
                alert("Please enter a number between 1 and 100.");
                console.log("invalid number");
            }
        } else {
            console.log("Not a number")
            alert("Please enter a valid number.");
        }
        
        
    }
    
    console.log("This is the grid's dimensions: " + dimension + " x " + dimension);

    function createSketchPad() {
        sketchSide.appendChild(container);
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
                this.style.backgroundColor = 'lime';
        });
        div.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'lime';
        });
    });

    clearButton.addEventListener('click', () => {
        console.log("You cleared the grid");
        divs.forEach((div) => {
            div.style.backgroundColor = 'white';
        });
    });

    originalButton.addEventListener('click', () => {
        divs.forEach((div) => {
            div.addEventListener('mouseenter', function () {
                    this.style.backgroundColor = 'lime';
            });
            div.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'lime';
            });
        });
        console.log("You are using the original color");
    }); 
    
    rainbowButton.addEventListener('click', () => {
        console.log("You'red using the changing rainbow color");
        const colorsArray = ["magenta", "orange", "yellow", "lime", "cyan", "violet", "hotpink"];
        

        divs.forEach((div) => {
            div.addEventListener('mouseenter', function () {
                const color = Math.floor(Math.random() * colorsArray.length);        
                
                function assignColor() {
                    if (color === 0) {
                        return "#ff008c";
                    } else if (color === 1) {
                        return "orange";
                    } else if (color === 2) {
                        return "yellow";
                    } else if (color === 3) {
                        return "lime";
                    } else if (color === 4) {
                        return "cyan";
                    } else if (color === 5) {
                        return "#c567fc";
                    } else if (color === 6) {
                        return "hotpink";
                    } else {
                        return "Something went wrong when assigning colors";
                    }
                };
                randomColor = assignColor();
                this.style.backgroundColor = randomColor;
                console.log("mouseenter: " + this.style.backgroundColor);
            });
            div.addEventListener('mouseleave', function() {
                this.style.backgroundColor = randomColor;
                console.log("mouseleave: " + this.style.backgroundColor);
            });
        });
    });
    
    markerButton.addEventListener('click', () => {
        divs.forEach((div) => {
            div.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'black';
                this.style.opacity = '10%';
            });
            div.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'black';
                this.style.opacity = '20%';
            });
        });
    });
})











   

