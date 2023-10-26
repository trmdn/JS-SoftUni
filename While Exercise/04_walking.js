function walking(input){
    let walkingEveryDay = 10000;
    let steps = 0;
    let tired = "Going Home";
    let index = 0;
    
    while(true){
        let currentCommand = input[index];
        index++;

        if(currentCommand == tired){
            console.log(`${walkingEveryDay - steps} more steps to reach goal.`);
            break;
        }

        let currentSteps = Number(currentCommand);
        steps += currentSteps

        if(steps >= walkingEveryDay){
            console.log("Goal reached! Good job!");
            console.log(`${steps - walkingEveryDay} steps over the goal!`);
            break;
        }
    }
}

walking(["1000","1500","2000","6500"]);