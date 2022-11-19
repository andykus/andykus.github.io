const canvasWidth = 900;
const canvasHeight = 500;
let inputEl;
let turtle;

function processInput() {
    const commands = parseCommands(inputEl.value());
    turtle.giveCommands(commands);
    turtle.walk();
}

function setup() {
    angleMode(DEGREES);
    createCanvas(canvasWidth, canvasHeight);
    background('black');
    inputEl = select('#inputEl');
    inputEl.input(processInput);

    stroke('hotpink');

    turtle = new Turtle(canvasWidth / 2, canvasHeight / 2);
    processInput();
}
