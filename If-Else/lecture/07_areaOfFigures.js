function areaOfFigures(input){
    let type = input[0];
    let x = Number(input[1]);
    let y = Number(input[2]);
    let result = 0;

    if(type === "square"){
        result = x * x;
    } else if(type === "rectangle"){
        result = x * y;
    } else if(type === "circle"){
        result = Math.PI * Math.pow(x, 2);
    } else {
        result = x * y / 2;
    }
    console.log(result.toFixed(3));
}

areaOfFigures(["triangle","4.5","20"]);