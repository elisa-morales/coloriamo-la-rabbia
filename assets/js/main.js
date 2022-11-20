function newElement(type, id, text) {
    element = document.createElement(type);
    element.id = id;
    element.innerHTML = text;
    return element;
}

const counterContainer = newElement('div', 'main', '');
const counterNum = newElement('p', 'counter', '0');
const counterButtons = newElement('div', 'buttons', '');
const increaseButton = newElement('button', 'increase', '+');
const decreaseButton = newElement('button', 'decrease', '-');
const resetButton = newElement('button', 'reset', 'RESET');

// append child
main.appendChild(counterContainer);
counterContainer.appendChild(counterNum);
counterContainer.appendChild(counterButtons);
counterButtons.appendChild(increaseButton);
counterButtons.appendChild(resetButton);
counterButtons.appendChild(decreaseButton);

// set initial count

let count = 0;
let maxClicks = 25;

increaseButton.addEventListener('click', more);
increaseButton.addEventListener('click', changeColor);
decreaseButton.addEventListener('click', less);
resetButton.addEventListener('click', clear);
resetButton.addEventListener('click', resetColor);

function more() {
    count++;
    counterNum.innerHTML = count;
    
    if (count == maxClicks){
        alert('Ama, tutto bene?');   
     }
}

function less() {
    count--;
    counterNum.innerHTML = count;
}

function clear() {
    count = 0;
    counterNum.innerHTML = count;
}

function getHex() {
    let letters = '0123456789ABCDEF'; 
    let color = '#'; 
    for (let i = 0; i < 6; i++) 
    color += letters[(Math.floor(Math.random() * 16))]; 
    return color;
}

function changeColor() {
    let hex = getHex();
    document.getElementsByTagName('BODY')[0].style.backgroundColor = hex;
}

function resetColor() {
    document.getElementsByTagName('BODY')[0].style.backgroundColor = 'white';
 }
