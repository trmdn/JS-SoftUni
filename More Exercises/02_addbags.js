function addBags(input){
    let priceBagOdd20kg = Number(input[0]);
    let bagKg = Number(input[1]);
    let days = Number(input[2]);
    let bagsCount = Number(input[3]);
    let result = 0;

    if(bagKg < 10){
        result = bagKg * 20 / 100;
    } else if(bagKg < 20){
        result = bagKg * 50 / 100;
    }

    if(days > 30){
        result = priceBagOdd20kg * 1.10;
    } else if(days > 7 && days < 30){
        result = priceBagOdd20kg * 1.50;
    }
}

addBags(["30","18","15","2"]);

// 1.	Цената на багаж над 20кг - реално число в диапазона [10.0…80.0]
// 2.	Килограми на багажа – реално число в диапазона [1.0…32.0]
// 3.	Дни до пътуването – цяло число в диапазона [1…60]
// 4.	Брой багажи – цяло число в диапазона [1…10]
