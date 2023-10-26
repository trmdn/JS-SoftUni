function workingHours(input){
    hour = Number(input[0]);
    day = input[1];

    if(hour >= 18 || day === "Sunday"){
        console.log("closed");
    } else {
        console.log("open");
    }
}

workingHours(["19","Friday"])

//(["11","Monday"])
//10-18 hour