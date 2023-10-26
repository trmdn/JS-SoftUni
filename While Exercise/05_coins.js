function money(input){
    let moneyAmount = Number(input[0]);
    let coinsCount = 0;
    let currentAmountCents = Math.round(moneyAmount * 100);

    while(currentAmountCents > 0){
        if(currentAmountCents >= 200){
            currentAmountCents -= 200;
        } else if(currentAmountCents >= 100){
            currentAmountCents -= 100;
        } else if(currentAmountCents >= 50){
            currentAmountCents -= 50
        } else if(currentAmountCents >= 20){
            currentAmountCents -= 20;
        } else if(currentAmountCents >= 10){
            currentAmountCents -= 10
        } else if(currentAmountCents >= 5){
            currentAmountCents -= 5;
        } else if(currentAmountCents >= 2){
            currentAmountCents -= 2;
        } else if(currentAmountCents >= 1){
            currentAmountCents -= 1;
        }
        coinsCount++;
    }
    console.log(coinsCount);
}

money(["2.73"]);