function traveling(input){
    let i = 0;
    let destination = input[i];
    i++
    let moneyNeeded = Number(input[i]);
    i++
    let currentSum = 0;
    while(true){
        if(destination == "End"){
            break;
        }

        currentSum += Number(input[i]);
        if(currentSum >= moneyNeeded){
            console.log(`Going to ${destination}!`);
            i++;
            if(input[i] == "End"){
                break
            }
            destination = input[i];
            i++;
            moneyNeeded = input[i];
            currentSum = 0;
            }
            i++
        
    }
}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);