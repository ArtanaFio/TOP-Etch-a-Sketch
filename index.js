                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               // Create a 16 x 16 grid of div elements inside "grid-container"
let element;
let dimension;

const gridModal = document.getElementById('grid-modal');
gridModal.classList.add('closed');

const startButton = document.getElementById('start');
const invisibleElements = document.querySelectorAll('.none');
const sketchSide = document.querySelector('.sketch');
const playButtons = document.getElementById("play-buttons");
const functionButtons = document.getElementById('functions');

startButton.addEventListener('click', () => {
    startButton.remove();
    invisibleElements.forEach((element) => {
        element.classList.remove('none');
        sketchSide.classList.add('flex');
        playButtons.classList.add('play-area');
        if (window.innerWidth <=400) {
            playButtons.style.backgroundColor = "transparent";
            playButtons.style.border = "none";
        }
    })
})

const pixelButton = document.getElementById('pixels');
const container = document.querySelector('.grid-container');
const directions = document.querySelector('h3');
const input = document.querySelector('input');
const cancelButton = document.getElementById('cancel');
const submitButton = document.getElementById('submit');

cancelButton.addEventListener('click', () => {
    gridModal.classList.add('closed');
    gridModal.classList.remove('opened');
})

pixelButton.addEventListener('click', () => {
    console.log("You're using original color");
    container.innerHTML = '';
    directions.classList.add('none');
    playButtons.classList.add('add-gap');
    gridModal.classList.add('opened');
    gridModal.classList.remove('closed');

    

    submitButton.addEventListener('click', () => {
        const ask = input.value;
            //const ask = prompt("How many squares do you want in each column and row?", "0");
            
        if (/^\d+$/.test(ask)) {
            dimension = parseInt(ask);

            if (!isNaN(dimension) && dimension >= 1 && dimension <=100) {
                functionButtons.classList.add('separate');
                gridModal.classList.add('closed');
                gridModal.classList.remove('opened');
                console.log("This is the grid's dimensions: " + dimension + " x " + dimension);
                createSketchPad();
            } else {
                alert("Please enter a number between 1 and 100.");
                console.log("invalid number");
            }
        } else {
            console.log("Not a number")
            alert("Please enter a valid number.");
        }
    });

    if (window.innerWidth <= 400) {
        playButtons.style.border = "2px dashed hotpink";
    }

    const screen = document.getElementById("screen");
    const appearButtons = document.querySelectorAll('.opt');
    const clearButton = document.getElementById('clear');
    const options = document.querySelector('.options');
    const rainbowButton = document.getElementById('colors');
    const originalButton = document.getElementById('original');
    const pencilButton = document.getElementById('darken');
    
    function createSketchPad() {
        screen.appendChild(container);
        functionButtons.appendChild(clearButton);
        options.appendChild(originalButton);
        options.appendChild(rainbowButton);
        options.appendChild(pencilButton);

        appearButtons.forEach((button) => {
            button.style.display = 'block';
        });

        container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;

        for (let i = 0; i < dimension * dimension; i++) {
            element = document.createElement('div');
            element.classList.add('small-div');
            element.style.backgroundColor = "white";
            container.appendChild(element);
        }

        const divs = document.querySelectorAll('.small-div');

    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'lime';
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
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'lime';
            });
        });
        console.log("You are using the original color");
    }); 
    
    rainbowButton.addEventListener('click', () => {
        console.log("You'red using the changing rainbow color");
        const colorsArray = ["magenta", "orange", "yellow", "lime", "cyan", "violet", "hotpink"];
        
        divs.forEach((div) => {
            div.addEventListener('mouseover', () => {
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
                div.style.backgroundColor = randomColor;
            });
        });
    });
    
    pencilButton.addEventListener('click', () => {
        divs.forEach((div) => {
            let opacity = 0.1;
            let divOpacity = `rgba(0, 0, 0, ${opacity})`;
            div.addEventListener('mouseover', () => {
                opacity += 0.1;
                if (opacity > 1) {
                    opacity = 1;
                }
                divOpacity = `rgba(0, 0, 0, ${opacity}`;
                div.style.backgroundColor = divOpacity;
            });
        });
    });
    }
    createSketchPad();    
})

function updateCopyrightYear() {
    const copyrightYear = document.querySelector(".year");

    copyrightYear.textContent = new Date().getFullYear();
};
updateCopyrightYear();

function changeLayout() {
    
}

