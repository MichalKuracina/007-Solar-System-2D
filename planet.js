class Planet {
    constructor(ellipseWidth, radius, color, speed) {
        this.x = width / 2;
        this.y = height / 2;
        this.ellipseWidth = ellipseWidth;
        this.ellipseHeight = ellipseWidth;
        this.radius = radius;
        this.xPos = 0;
        this.yPos = 0;
        this.angle = 0;
        this.color = color;
        this.speed = speed;
    }

    update() {
        // let relativeAngle = (TWO_PI / 365) * this.angle; // * deltaTime; // Adjust speed here
        // // Calculate position on ellipse
        this.xPos = this.x + (this.ellipseWidth / 2) * cos(this.angle);
        this.yPos = this.y + (this.ellipseHeight / 2) * sin(this.angle);
        // this.xPos = this.x + (this.ellipseWidth / 2) * cos(relativeAngle);
        // this.yPos = this.y + (this.ellipseHeight / 2) * sin(relativeAngle);
    }

    show() {
        // // Draw elliptical orbit
        noFill();
        stroke(150);
        ellipse(this.x, this.y, this.ellipseWidth, this.ellipseHeight);

        // // Draw planet
        fill(this.color[0], this.color[1], this.color[2]);
        noStroke();
        ellipse(this.xPos, this.yPos, this.radius, this.radius);

        // Increment angle for motion
        this.angle += TWO_PI / this.speed;
        // this.angle += 0.01;
    }
}
