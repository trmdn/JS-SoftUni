function numbers(input){
   let firstNum = Number(input[0]);
   let secondNum = Number(input[1]);
   let printLine = " ";
   for(let i = firstNum; i <= secondNum; i++){

    let current = " " + i;
    let oddSum = 0;
    let evenSum = 0;
    for(let j = 0; j <= current.length; j++){
        let currentDigit = Number(current.charAt(j));
        if(j % 2 === 0){
            evenSum += currentDigit;
        } else{
            oddSum += currentDigit;
        }
     }
     if(oddSum === evenSum){
        printLine += `${i} `;
     }
   }
   console.log(printLine);
}

numbers(["100000","100050"]);