function calc(input){
   let depAmount = Number(input[0]); //200
   let depMonths = Number(input[1]); //3
   let interestRate = Number(input[2]) / 100; // 5.7
   let finalAmount = depAmount + depMonths * ((depAmount * interestRate) / 12);
   console.log(finalAmount);
}

calc(["200", "3", "5.7"]);
calc(["2350", "6" ,"7"]);

// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)