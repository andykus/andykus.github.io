const canvasWidth = 900;
const canvasHeight = 600;
let inputEl;
let commands = [];
let turtle;

function processInput() {
    turtle.giveCommands(parseCommands(inputEl.value()));
    turtle.walk();
}

function setup() {
    angleMode(DEGREES);
    createCanvas(canvasWidth, canvasHeight);
    background('black');
    inputEl = select('#inputEl');
    inputEl.input(processInput);

    stroke(255);

    turtle = new Turtle(canvasWidth / 2, canvasHeight / 2);
    processInput();
}
