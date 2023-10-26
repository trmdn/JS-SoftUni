function cinema(input){
    let ticket = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if(ticket == "Premiere"){
        income = rows * columns * 12.00;
    } else if(ticket == "Normal"){
        income = rows * columns * 7.50;
    } else if(ticket == "Discount"){
        income = rows * columns * 5.00;
    }

    console.log(income.toFixed(2) + " leva");
}

cinema(["Premiere","10","12"]);