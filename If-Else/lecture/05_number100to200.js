function numbers(input){
    let number = Number(input[0]);

    if(number < 100){
        console.log("Less than 100");
    } else if(number <= 200){
        console.log("Between 100 and 200");
    } else if(number > 200) {
        console.log("Greater than 200");
    }
}

numbers([200])

//"Less than 100" "Between 100 and 200" "Greater than 200"
