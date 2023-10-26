function tradeCommissions(input){
    let city = input[0];
    let price = Number(input[1]);

    if(city == "Sofia"){
        if(price <= 500){
            console.log((price * 5 / 100).toFixed(2));
        } else if(price <= 1000){
            console.log((price * 7 / 100).toFixed(2));
        } else if(price <= 10000){
            console.log((price * 8 / 100).toFixed(2));
        } else if(price > 10000){
            console.log((price * 12 / 100).toFixed(2));
        }
    } else if(city == "Varna"){
        if(price <= 500){
            console.log((price * 4.5 / 100).toFixed(2));
        } else if(price <= 1000){
            console.log((price * 7.5 / 100).toFixed(2));
        } else if(price <= 10000){
            console.log((price * 10 / 100).toFixed(2));
        } else if(price > 10000){
            console.log((price * 13 / 100).toFixed(2));
        }
    } else if(city == "Plovdiv"){
        if(price <= 500){
           console.log((price * 5.5 / 100).toFixed(2));
        } else if(price <= 1000){
           console.log((price * 8 / 100).toFixed(2));
        } else if(price <= 10000){
           console.log((price * 12 / 100).toFixed(2));
        } else if(price > 10000){
           console.log((price * 14.5 / 100).toFixed(2));
        }
    } else{
        console.log("error");
    }
}

tradeCommissions(["Plovdiv", "499.99"]);


//Varna 4.5% 7.5% 10% 13%

//Plovdiv 5.5% 8% 12% 14.5%*/