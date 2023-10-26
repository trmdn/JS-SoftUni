function toyShop(input){
    let puzzleCost = 2.60;
    let dollCost = 3.00;
    let teddyBearCost = 4.10;
    let minionCost = 8.20;
    let truckCost = 2.00;

    let vacationCost = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]); 

    let totalCount = puzzleCount + dollCount + teddyBearCount + minionCount + truckCount;
    let totalPrize = puzzleCount * puzzleCost + dollCount * dollCost + teddyBearCount * teddyBearCost + minionCount * minionCost + truckCount * truckCost;

    if(totalCount >= 50){
        totalPrize *= .75;
    }

    totalPrize *= 0.90;
    
    if(totalPrize >= vacationCost){
        console.log(`Yes! ${(totalPrize - vacationCost).toFixed(2)} lv left.`);
    } else{
        console.log(`Not enough money! ${(vacationCost - totalPrize).toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8","20","25","30","50","10"]);

