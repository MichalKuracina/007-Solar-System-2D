class Planet {
    constructor(ellipseWidth, radius, color, speed, name) {
        this.x = 0;
        this.y = 0;
        this.ellipseWidth = ellipseWidth;
        this.ellipseHeight = ellipseWidth;
        this.radius = radius;
        this.xPos = 0;
        this.yPos = 0;
        this.angle = 0;
        this.color = color;
        this.speed = speed;
        this.name = name;
    }

    update() {
        // // Calculate position on ellipse
        this.xPos = this.x + (this.ellipseWidth / 2) * cos(this.angle);
        this.yPos = this.y + (this.ellipseHeight / 2) * sin(this.angle);
    }

    show() {
        // // Draw elliptical orbit
        noFill();
        stroke(50);
        ellipse(this.x, this.y, this.ellipseWidth, this.ellipseHeight);

        // // Draw planet
        fill(this.color[0], this.color[1], this.color[2]);
        noStroke();
        ellipse(this.xPos, this.yPos, this.radius * 2, this.radius * 2);

        // Increment angle for motion
        this.angle += TWO_PI / this.speed;

        // Add planet name
        fill(255);
        textAlign(CENTER);
        textSize(rOt(25, 20, this.radius));
        text(
            this.name,
            this.xPos,
            this.yPos + this.radius + rOt(15, 12, this.radius)
        );
    }
}
