function sumOfTwoNums(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let magicNum = Number(input[2]);
  let pairsCount = 0;
  let isFound = false;

  for (let num1 = startNum; num1 <= endNum; num1++) {

    for (let num2 = startNum; num2 <= endNum; num2++) {
      pairsCount++;

      let result = num1 + num2;

      if (result == magicNum) {
        isFound = true
        console.log(`Combination N:${pairsCount} (${num1} + ${num2} = ${result})`);
        break;
      }
      }
      if(isFound == true){
        break;
      }
    }

    if (isFound == false) {
      console.log(`${pairsCount} combinations - neither equals ${magicNum}`);
      
  }
}

sumOfTwoNums(["88", "888", "1000"]);
