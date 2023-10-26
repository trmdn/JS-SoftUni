function minNum(input){
    let index = 0;
    let currentNumber = input[index];
    index++;

    let min = Number.MAX_SAFE_INTEGER;

    while(currentNumber !== "Stop"){
        num = Number(currentNumber);
        if(num < min){
            min = num;
        }
        currentNumber = input[index];
        index++;
    }
    console.log(min);
}

minNum(["100","99","-10","70","Stop"]);