let celestialBodies;

function setup() {
    createCanvas(window.innerWidth - 50, window.innerHeight - 50);

    const sun = new Star(
        'Sun', 
        100, 
        50, 
        createVector(0, 0),
        color(245, 206, 66)
    );

    const mercury = new Planet(
        'Mercury',
        20,
        9,
        createVector(-50, 0),
        color('#e5e5e5'),
        sun
    );

    const venus = new Planet(
        'Venus', 
        100, 
        20, 
        createVector(-100, 0),
        color('#e3bb76'),
        sun
    );

    const earth = new Planet(
        'Earth', 
        100, 
        25, 
        createVector(-150, 0),
        color('#2f6a69'),
        sun
    );

    const mars = new Planet(
        'Mars', 
        100, 
        12.5, 
        createVector(-200, 0),
        color('#993d00'),
        sun
    );

    const jupiter = new Planet(
        'Jupiter', 
        100, 
        40, 
        createVector(-250, 0),
        color('#b07f35'),
        sun
    );

    const saturn = new Planet(
        'Saturn', 
        100, 
        35, 
        createVector(-300, 0),
        color('#b08f36'),
        sun
    );

    const uranus = new Planet(
        'Uranus', 
        100, 
        40, 
        createVector(-350, 0),
        color('#5580aa'),
        sun
    );

    const neptune = new Planet(
        'Neptune', 
        100, 
        39, 
        createVector(-400, 0),
        color('#366896'),
        sun
    );

    celestialBodies = [
        sun,
        mercury,
        venus,
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
    ];    
};

function draw() {
    translate(width / 2, height / 2);
    background(0);

    celestialBodies
        .filter(body => body.orbitsBody)
        .forEach(body => body.orbitsBody.attract(body));

    celestialBodies.forEach(body => {
        body.update();
        body.draw();
    });
};