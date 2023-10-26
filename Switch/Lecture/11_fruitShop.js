function solve(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);
  let total = 0;
 
  if (
    day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday"
  ) {
    if (fruit == "banana") {
      total = 2.5 * quantity;
    } else if (fruit == "apple") {
      total = 1.2 * quantity;
    } else if (fruit == "orange") {
      total = 0.85 * quantity;
    } else if (fruit == "grapefruit") {
      total = 1.45 * quantity;
    } else if (fruit == "kiwi") {
      total = 2.7 * quantity;
    } else if (fruit == "pineapple") {
      total = 5.5 * quantity;
    } else if (fruit == "grapes") {
      total = 3.85 * quantity;
    } else {
      console.log("error");
    }
  } else if (day == "Saturday" || day == "Sunday") {
    if (fruit == "banana") {
      total = 2.7 * quantity;
    } else if (fruit == "apple") {
      total = 1.25 * quantity;
    } else if (fruit == "orange") {
      total = 0.9 * quantity;
    } else if (fruit == "grapefruit") {
      total = 1.6 * quantity;
    } else if (fruit == "kiwi") {
      total = 3.0 * quantity;
    } else if (fruit == "pineapple") {
      total = 5.6 * quantity;
    } else if (fruit == "grapes") {
      total = 4.2 * quantity;
    } else {
      console.log("error");
    }
  } else {
    console.log("error");
  }
  if (total > 0) {
    console.log(total.toFixed(2));
  }
}
