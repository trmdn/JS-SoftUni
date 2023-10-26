function radToDeg(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;
    console.log(degrees);
}

radToDeg(["3.1416"]);

// градус = радиан * 180 / π