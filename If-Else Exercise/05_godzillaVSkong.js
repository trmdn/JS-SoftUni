function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let clothCount = Number(input[2]);

    let decor = budget * 10 / 100;
    let clothesAll = clothCount * statistCount

    if(statistCount >= 150){
        clothesAll *= 0.90;
    }

    let expenses = clothesAll + decor;

    if(expenses > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(expenses - budget).toFixed(2)} leva more.`);
    } else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - expenses).toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["20000","120","55.5"]);
