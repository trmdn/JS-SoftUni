function recordInSwimming(input){
    let recordForSecond = Number(input[0]);
    let sizeInMeters = Number(input[1]);
    let timeInSecondsForOneMeter = Number(input[2]);

    let ivansGoal = sizeInMeters * timeInSecondsForOneMeter;
    let fifteenMeters = sizeInMeters / 15;
    let forEvery12 = fifteenMeters + 100 * 12.5;
    let totalTime = ivansGoal + forEvery12; 
    

    if(ivansGoal > recordInSwimming){
        console.log(`Yes, he succeeded! The new world record is ${(ivansGoal - totalTime).toFixed(2)} seconds.`);
    } else{
        console.log(`No, he failed! He was ${(totalTime - recordForSecond).toFixed(2)} seconds slower.`);
    }
}

recordInSwimming(["10464","1500","20"]);

//10464 < total
//total – 10464 