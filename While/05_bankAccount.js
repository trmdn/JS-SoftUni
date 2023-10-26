function bankAccount(input){
    let index = 0;
    let account = 0;
    let command = Number(input[index]);
    index++;


    while(command !== "NoMoreMoney"){
        let currentNum = Number(command);
        if(currentNum < 0){
            console.log("Invalid operation!");
            break;
        }
        account += currentNum;
        console.log(`Increase: ${(currentNum).toFixed(2)}`);
        command = input[index];
        index++
    }
    console.log(`Total: ${account}`);
}

bankAccount(["5.51","69.42","100","NoMoreMoney"]);