class Turtle {
    constructor(initialX, initialY) {
        this.commands = [];
        this.isDrawing = true;
        this.initialX = initialX;
        this.initialY = initialY;
        this.penSize = 1;
    }

    giveCommands(commands) {
        this.commands = commands;
    }

    drawLine(length) {
        if (this.isDrawing) {
            line(0, 0, length, 0);
        }

        translate(length, 0);
    }

    setPenSize(size) {
        strokeWeight(size);
    }

    turnLeft(deg) {
        rotate(-deg);
    }

    turnRight(deg) {
        rotate(deg);
    }

    moveForward(steps) {
        this.drawLine(steps);
    }

    moveBackwards(steps) {
        this.drawLine(-steps);
    }

    penUp() {
        this.isDrawing = false;
    }

    penDown() {
        this.isDrawing = true;
    }

    executeCommand(command) {
        switch(command.type) {
            case TURN_RIGHT:
                return this.turnRight(command.argument);
            case TURN_LEFT:
                return this.turnLeft(command.argument);
            case FORWARD:
                return this.moveForward(command.argument);
            case BACK:
                return this.moveBackwards(command.argument);
            case PEN_UP: 
                return this.penUp();
            case PEN_DOWN:
                return this.penDown();
            case SET_PEN_SIZE: 
                return this.setPenSize(command.argument);
        }
    }

    walk() {
        push();
        clear();
        translate(50, 50);
        this.setPenSize(1);
        this.penDown();
        this.commands.forEach(c => this.executeCommand(c));
        pop();
    }
}