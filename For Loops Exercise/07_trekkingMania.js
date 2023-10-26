function trekkingMania(input){
    let groups = Number(input[0]);

    let sumClimbers = 0;

    for (let i = 1; i <= groups; i++){
        sumClimbers += Number(input[i]);
    }

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groups; i++){

        if(input[i] <= 5){
            musala += Number(input[i]);
        } else if(input[i] > 5 && input[i] <= 12){
            monblan += Number(input[i]);
        } else if(input[i] > 12 && input[i] <= 25){
            kilimanjaro += Number(input[i]);
        } else if(input[i] > 25 && input[i] <= 40){
            k2 += Number(input[i]);
        } else if(input[i] > 40){
            everest += Number(input[i]);
        }
    }

    let musalaPercent = musala / sumClimbers * 100;
    let monblanPercent = monblan / sumClimbers * 100;
    let kilimanjaroPercent = kilimanjaro / sumClimbers * 100;
    let k2Percent = k2 / sumClimbers * 100;
    let everestPercent = everest / sumClimbers * 100;

    for(let i = 0; i <= 5; i++){

        switch(i){
            case 1: console.log(`${musalaPercent.toFixed(2)}%`); break;
            case 2: console.log(`${monblanPercent.toFixed(2)}%`); break;
            case 3: console.log(`${kilimanjaroPercent.toFixed(2)}%`); break;
            case 4: console.log(`${k2Percent.toFixed(2)}%`); break;
            case 5: console.log(`${everestPercent.toFixed(2)}%`); break;
        }
    }
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);