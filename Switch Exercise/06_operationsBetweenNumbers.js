function operationsBetweenNumbers(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let operation = input[2];

  let result = 0;
  let result_as_string;

  if (result % 2 == 0) {
    evenOrOdd = "even";
  } else {
    evenOrOdd = "odd";
  }

  if (operation == "+") {
    result = num1 + num2;
    let evenOrOdd;

    result_as_string = `${num1} ${operation} ${num2} = ${result} - ${evenOrOdd}`;
  } else if (operation == "-") {
    result = num1 - num2;
    result_as_string = `${num1} ${operation} ${num2} = ${result} - ${evenOrOdd}`;
  } else if (operation == "*") {
    result = num1 * num2;
    result_as_string = `${num1} ${operation} ${num2} = ${result} - ${evenOrOdd}`;
  } else if (operation == "/") {
    if (num2 == 0) {
      result_as_string = `Cannot divide ${num1} by zero`;
    } else {
      result = num1 / num2;
      result_as_string = `${num1} ${operation} ${num2} = ${result.toFixed(2)}`;
    }
  } else if (operation == "%") {
    if (num2 == 0) {
      result_as_string = `Cannot divide ${num1} by zero`;
    } else {
      result = num1 % num2;
      result_as_string = `${num1} ${operation} ${num2} = ${result.toFixed(2)}`;
    }
  }
}

operationsBetweenNumbers(["10", "12", "+"]);
