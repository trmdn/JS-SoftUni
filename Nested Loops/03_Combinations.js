function combinations(input){
    let validCombinations = 0;
    let n = Number(input[0]);
    let validCounter = 0;
    for(let num1 = 0; num1 <= n; num1++){
        for(let num2 = 0; num2 <= n; num2++){
            for(let num3 = 0; num3 <= n; num3++){
                validCombinations = num1 + num2 + num3;
                if(validCombinations == n){
                    validCounter++;
                }
            }
        }
    }

    console.log(validCounter);

}

combinations(["25"]);