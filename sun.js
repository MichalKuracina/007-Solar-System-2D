class Sun {
    constructor(radius) {
        this.x = width / 2;
        this.y = height / 2;
        this.radius = radius;
    }

    update() {
        // Update sun position or properties if needed
    }

    show() {
        // console.log(this.radius);
        fill(255, 204, 0);
        noStroke();
        ellipse(this.x, this.y, this.radius * 2);
        // ellipse(this.radius);
    }
}
