function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let priceOfClothes = Number(input[2]);
    let priceOfClothesForStatist = priceOfClothes * statistCount;
    let decoration = budget * 10 / 100;
    let total = (decoration + priceOfClothesForStatist).toFixed(2);
    if(statistCount >= 150){
        priceOfClothesForStatist = priceOfClothesForStatist * 10 / 100;
    }

    if(total >= budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`);
    } else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);
    }
}

godzillaVsKong(['15437.62','186','57.99']);


/*•	Декорът за филма е на стойност 10% от бюджета. 
•	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
*/