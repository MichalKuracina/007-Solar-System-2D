let sunParams = {
    name: "Sun",
    radiusKm: 696340,
    period: 0,
    distance: 0,
    color: [255, 204, 0],
};

let planets = [];

// https://www.jpl.nasa.gov/_edu/pdfs/scaless_reference.pdf
let planetsParameters = [
    {
        name: "Mercury",
        radius: 2440,
        period: 88,
        distance: 57900000,
        color: [183, 184, 185],
    },
    {
        name: "Venus",
        radius: 6051,
        period: 225,
        distance: 108200000,
        color: [165, 124, 27],
    },
    {
        name: "Earth",
        radius: 6378,
        period: 365,
        distance: 149600000,
        color: [0, 102, 204],
    },
    {
        name: "Mars",
        radius: 3396.19,
        period: 687,
        distance: 227900000,
        color: [69, 24, 4],
    },
    {
        name: "Jupiter",
        radius: 71492,
        period: 4333,
        distance: 778600000,
        color: [227, 220, 203],
    },
    {
        name: "Saturn",
        radius: 60268,
        period: 10759,
        distance: 1433500000,
        color: [234, 214, 184],
    },
    {
        name: "Uranus",
        radius: 25559,
        period: 30687,
        distance: 2872500000,
        color: [209, 231, 231],
    },
    {
        name: "Neptune",
        radius: 24764,
        period: 60190,
        distance: 4495100000,
        color: [63, 84, 186],
    },
];

let translateX;
let translateY;
let scaleVal = 0.8;

async function setup() {
    createCanvas(700, 700);
    translateX = width / 2;
    translateY = height / 2;

    const systemWidth = getWidthOfSolarSystem();

    const biggestPlanet = planetsParameters.reduce((max, planet) =>
        planet.radius > max.radius ? planet : max
    );

    sun = new Sun(rOt(systemWidth, width, sunParams.radiusKm * 20));

    planetsParameters.forEach((p) => {
        let distanceFromSun = rOt(systemWidth, width, p.distance * 2);
        let planetRadius = rOt(biggestPlanet.radius, 15, p.radius); // 15 is arbitrary size for biggest planet
        planets.push(
            new Planet(distanceFromSun, planetRadius, p.color, p.period, p.name)
        );
    });
}

function mouseWheel(event) {
    if (event.delta > 0 && scaleVal > 0.8) {
        scaleVal -= 0.1;
    }

    if (event.delta < 0 && scaleVal < 10) {
        scaleVal += 0.1;
    }
}

function draw() {
    background(0, 0, 0);

    noStroke();
    fill(255);
    textSize(32);
    text("Scroll to scale: " + round(scaleVal, 2), 50, height - 50);

    push();
    translate(translateX, translateY);
    scale(scaleVal);

    sun.show();

    planets.forEach((planet) => {
        planet.update();
        planet.show();
    });

    pop();
}

function getWidthOfSolarSystem() {
    const farthestPlanet = planetsParameters.reduce((max, planet) =>
        planet.distance > max.distance ? planet : max
    );

    return (
        farthestPlanet.distance * 2 +
        farthestPlanet.radius * 2 +
        sunParams.radiusKm * 2
    );
}

function rOt(a, b, c) {
    // Rule of Three
    // a...b
    // c...x
    let x = (b * c) / a;
    return x;
}
