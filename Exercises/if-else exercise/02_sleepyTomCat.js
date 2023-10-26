function sleepyTomCat(input){
    let restTime = Number(input[0]);
    let workTime = 365 - restTime;
    let timeForPlay = workTime * 63 + restTime * 127;
    let difference = 30000 - timeForPlay;

    if(difference > 30000){
        console.log("Tom will run away");
        console.log();
    }

}

sleepyTomCat(['20']);