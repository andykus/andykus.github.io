class CelestialBody {
    constructor(name, mass, radius, pos, col, orbitsBody) {
        this.name = name;
        this.mass = mass;
        this.radius = radius;
        this.color = col;
        this.pos = pos;
        this.orbitsBody = orbitsBody;
        this.path = [];

        if (orbitsBody) {
            const vel = pos.copy();
            vel.rotate(HALF_PI);
            vel.setMag(sqrt(Universe.G * orbitsBody.mass / pos.mag()));
            
            this.velocity = vel;
            return;
        }

        this.velocity = createVector(0, 0);
    }

    applyForce(force) {
        this.velocity.x += force.x / this.mass;
        this.velocity.y += force.y / this.mass;
    }

    attract(otherBody) {
        const r = dist(this.pos.x, this.pos.y, otherBody.pos.x, otherBody.pos.y);
        const f = this.pos.copy().sub(otherBody.pos);
        f.setMag((Universe.G * this.mass * otherBody.mass) / Math.pow(r, 2));
        
        otherBody.applyForce(f);
    }

    updatePath() {
        this.path.push(this.pos);
        
        if (this.path.length > 100) {
            this.path.splice(0, 1);
        }
    }

    update() {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;

        this.path.push(this.pos.copy());
    }

    drawPath() {
        stroke(this.color);
        for (let i = 0; i < this.path.length - 1; i++) {
            line(this.path[i].x, this.path[i].y, this.path[i + 1].x, this.path[i + 1].y)
        }
    }

    drawLabel() {
        textSize(12);
        fill(this.color);
        text(this.name, this.pos.x, this.pos.y - this.radius + 5);
    }

    draw() {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);

        this.drawPath();
        this.drawLabel();
    }
}