function cleverLily(input){
    let years = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toysCount = 0;
    let moneyFromBirthDay = 0;

    for(let i = 1; i <= years; i++){
        if(i % 2 == 1){
            toysCount++
        } else{
            moneyFromBirthDay += 10 * i/2;
            moneyFromBirthDay--;
        }
    }

    let money = moneyFromBirthDay + toyPrice * toysCount;

    if(money >= laundryPrice){
        console.log(`Yes! ${(money - laundryPrice).toFixed(2)}`);
    } else{
        console.log(`No! ${(laundryPrice - money).toFixed(2)}`);
    }
}

cleverLily(["21","1570.98","3"]);
// 10 Lily's years
// laundry price
// toy price