function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);
    let totalCost = 0;

    if(season == "Spring"){
        totalCost = 3000;
    } else if(season == "Summer"){
        totalCost = 4200;
    } else if(season == "Autumn"){
        totalCost = 4200;
    } else if(season == "Winter"){
        totalCost = 2600;
    }


    if(fisherCount <= 6){
        totalCost *= 0.90;
    } else if( fisherCount <= 11){
        totalCost *= 0.85;
    } else if(fisherCount > 11){
        totalCost *= 0.75;
    }



    if(fisherCount % 2 == 0 && season != "Autumn"){
        totalCost *= 0.95
    }

    if(budget >= totalCost){
        console.log(`Yes! You have ${(budget - totalCost).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["2000","Winter","13"]);

/*· Бюджет на групата – цяло число в интервала [1…8000]

· Сезон – текст : "Spring", "Summer", "Autumn", "Winter"

· Брой рибари – цяло число в интервала [4…18]*/

/*· Ако групата е до 6 човека включително – отстъпка от 10%.

· Ако групата е от 7 до 11 човека включително – отстъпка от 15%.

· Ако групата е от 12 нагоре – отстъпка от 25%. */