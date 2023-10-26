function shopping(input){
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuPrize = 250 * gpuCount;
    let cpuPrize = gpuPrize * 35 / 100;
    let cpuTotal = cpuPrize * cpuCount;
    let ramPrize = gpuPrize * 10 / 100;
    let ramTotal = ramPrize * ramCount;
    let totalPrize = cpuTotal + gpuPrize + ramTotal;
    let discountedPrize;

    if(gpuCount > cpuCount){
        discountedPrize = totalPrize - (totalPrize * 15 / 100);
    }

    if(budget > totalPrize){
        console.log(`You have ${(budget - discountedPrize).toFixed(2)} leva left!`);
    } else{
        console.log(`Not enough money! You need ${Math.abs((budget - discountedPrize).toFixed(2))} leva more!`);
    }
}

shopping(["900","2","1","3"]);

//budget ; cpuTotal ; gpuPrice; ramTotal

/*1. Бюджетът на Петър - реално число в интервала [0.0…100000.0]

2. Броят видеокарти - цяло число в интервала [0…100]

3. Броят процесори - цяло число в интервала [0…100]

4. Броят рам памет - цяло число в интервала [0…100] */