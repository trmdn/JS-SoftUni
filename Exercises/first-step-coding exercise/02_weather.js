function weather(input){
    let n = Number(input[0]);

    if(n >= 26.00){
        console.log("Hot");
    } else if(n >= 20.1){
        console.log("Warm");
    } else if(n >= 15.00){
        console.log("Mild");
    } else if(n >= 12.00){
        console.log("Cool");
    } else if(n >= 5.00){
        console.log("Cold");
    } else{
        console.log("unknown");
    }
}

weather(["5"])


/*
26.00 - 35.00	Hot
20.1 - 25.9	    Warm
15.00 - 20.00	Mild
12.00 - 14.9	Cool
5.00 - 11.9	    Cold */