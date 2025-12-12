let sunParams = {
    name: "Sun",
    radiusKm: 696340,
    radiusPx: 100,
    period: 0,
    distance: 0,
    color: [255, 204, 0],
};

let planets = [];

let planetsParameters = [
    {
        name: "Mercury",
        radius: 2440,
        period: 88,
        distance: 46806000,
        color: [183, 184, 185],
    },
    {
        name: "Venus",
        radius: 6051,
        period: 225,
        distance: 108210000,
        color: [165, 124, 27],
    },
    {
        name: "Earth",
        radius: 6378,
        period: 365,
        distance: 147610000,
        color: [0, 102, 204],
    },
    {
        name: "Mars",
        radius: 3396.19,
        period: 687,
        distance: 220990000,
        color: [69, 24, 4],
    },
    {
        name: "Jupiter",
        radius: 71492,
        period: 4333,
        distance: 77739000,
        color: [227, 220, 203],
    },
    {
        name: "Saturn",
        radius: 60268,
        period: 10759,
        distance: 142700000,
        color: [234, 214, 184],
    },
    {
        name: "Uranus",
        radius: 25559,
        period: 30687,
        distance: 291560000,
        color: [209, 231, 231],
    },
    {
        name: "Neptune",
        radius: 24764,
        period: 60190,
        distance: 447530000,
        color: [63, 84, 186],
    },
];

// let systemWidth;

async function setup() {
    createCanvas(700, 700);
    const systemWidth = getWidthOfSolarSystem();

    centerX = width / 2;
    centerY = height / 2;

    sun = new Sun(rOt(systemWidth, width, sunParams.radiusKm * 2));

    planetsParameters.forEach((p) => {
        let distanceFromSun = rOt(systemWidth, width, p.distance * 2);
        let planetRadius = rOt(systemWidth, width, p.radius * 2);
        planets.push(
            new Planet(distanceFromSun, planetRadius, p.color, p.period)
        );
    });
}

function draw() {
    background(0, 0, 0);

    sun.update();
    sun.show();

    planets.forEach((planet) => {
        planet.update();
        planet.show();
    });
}

function getWidthOfSolarSystem() {
    let farthestPlanet = planetsParameters.reduce(
        (maxObj, obj) =>
            maxObj === null ||
            (obj["distance"] ?? -Infinity) > (maxObj["distance"] ?? -Infinity)
                ? obj
                : maxObj,
        null
    );

    return (
        farthestPlanet.distance * 2 + farthestPlanet.radius + sunParams.radiusKm
    );
}

function rOt(a, b, c) {
    // Rule of Three
    // a...b
    // c...x
    let x = (b * c) / a;
    if (x < 10) {
        return 10;
    }
    return x;
}
