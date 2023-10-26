function braceletStand(input){
    let dailyMoney = Number(input[0]);
    let dailyGetMoney = Number(input[1]);
    let cost = Number(input[2]);
    let priceOfGift = Number(input[3]);

    let moneyFor5Days = dailyMoney * 5;
    let getMoneyFor5Days = dailyGetMoney * 5;
    let allMoney = moneyFor5Days + getMoneyFor5Days;
    let withoutCost = allMoney - cost;

    if(withoutCost >= priceOfGift){
        console.log(`Profit: ${withoutCost.toFixed(2)} BGN, the gift has been purchased.`);
    } else{
        console.log(`Insufficient money: ${(priceOfGift - withoutCost).toFixed(2)} BGN.`);
    }
}

braceletStand(['2.10','17.50','20.20','148.50']);





/*Първи ред – джобните на Тереза на ден – реално число в интервала [1.00 ...100.00]
 Втори ред – парите, които тя печели на ден от продажби – реално число в интервала [1.00...1000.00]
 Трети ред – разходите на Тереза за целия период – реално число в интервала [1.00...1000.00]
 Четвърти ред – цената на подаръка – реално число в интервала [1.00...10000.00]
 */