function numInRange(input){
    number = Number(input[0]);
    if(number >= -100 && number <= 100 && number !== 0){
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numInRange([0])