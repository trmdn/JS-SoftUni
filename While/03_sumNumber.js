function sumNumber(input){
    let index = 0;
    let num = Number(input[index]);
    let sum = 0;
    index++;

    while(sum < num){
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;
    }
    console.log(sum);
}

sumNumber(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);
