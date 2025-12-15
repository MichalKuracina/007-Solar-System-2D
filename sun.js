class Sun {
    constructor(radius) {
        this.x = 0;
        this.y = 0;
        this.radius = radius;
    }

    show() {
        fill(255, 204, 0);
        noStroke();
        ellipse(this.x, this.y, this.radius * 2);
    }
}
