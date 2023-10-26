function newHouse(input){
    let rosesPrice = 5.00;
    let dahliasPrice = 3.80;
    let tulipsPrice = 2.80;
    let narcissusPrice = 3.00;
    let gladiolusPrice = 2.50;

    let kindOfFlower = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalCost = 0;

    if(kindOfFlower == "Roses"){
        totalCost = flowerCount * rosesPrice;
        if(flowerCount > 80){
            totalCost *= 0.90;
        }
    } else if(kindOfFlower == "Dahlias"){
        totalCost = flowerCount * dahliasPrice;
        if(flowerCount > 90){
            totalCost *= 0.85;
        }
    } else if(kindOfFlower == "Tulips"){
        totalCost = flowerCount * tulipsPrice;
        if(flowerCount > 80){
            totalCost *= 0.85;
        }
    } else if(kindOfFlower == "Narcissus"){
        totalCost = flowerCount * narcissusPrice;
        if(flowerCount < 120){
            totalCost *= 1.15;
        }
    } else if(kindOfFlower == "Gladiolus"){
        totalCost = flowerCount * gladiolusPrice;
        if(flowerCount < 80){
            totalCost *= 1.20;
        }
    }

    if(budget >= totalCost){
        console.log(`Hey, you have a great garden with ${flowerCount} ${kindOfFlower} and ${(budget - totalCost).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalCost - budget).toFixed(2)} leva more.`);
    }

    
}

newHouse(["Tulips","88","260"]);
