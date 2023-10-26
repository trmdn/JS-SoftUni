function maxNum(input){
    let index = 0;
    let currentNumber = input[index];
    index++;

    let max = Number.MIN_SAFE_INTEGER;
    while(currentNumber !== "Stop"){
        let num = Number(currentNumber);
        if(num > max){
            max = num;
        }
        currentNumber = input[index];
        index++
    }
    console.log(max);
}

maxNum(["100","99","150","270","Stop"]);