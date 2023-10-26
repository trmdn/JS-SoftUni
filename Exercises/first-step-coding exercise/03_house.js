function house(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let windows = 1.5 * 1.5;
    let wall = x * y;
    let totalWalls = (wall * 2) - (windows * 2);
    let backWall = x * x;
    let door = 1.2 * 2;
    let totalFrontBack = (backWall * 2) - door;
    let total = totalWalls + totalFrontBack;
    console.log((total / 3.4).toFixed(2))

    let roof = 2 * wall;
    let triangle = 2 * (x * h / 2);
    let totalRoof = roof + triangle;
    console.log((totalRoof / 4.3).toFixed(2));
}


// wall - green > 1l = 3.4m2  | roof - red > 1l = 4.3m2
house(["6", "10", "5.2"]);