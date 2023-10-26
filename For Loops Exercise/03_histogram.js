function histogram(input){
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let numbersCount = Number(input[0]);

    for(let i = 0; i <= numbersCount; i++){
        let currentNumber = Number(input[i + 1]);
        if(currentNumber < 200){
            p1++;
        } else if(currentNumber < 400){
            p2++;
        } else if(currentNumber < 600){
            p3++;
        } else if(currentNumber < 800){
            p4++;
        } else if(currentNumber >= 800){
            p5++;
        }
    }

    console.log((p1 / numbersCount * 100).toFixed(2) +  "%");
    console.log((p2 / numbersCount * 100).toFixed(2) +  "%");
    console.log((p3 / numbersCount * 100).toFixed(2) +  "%");
    console.log((p4 / numbersCount * 100).toFixed(2) +  "%");
    console.log((p5 / numbersCount * 100).toFixed(2) +  "%");
}

histogram(["3","1","2","999"]);

// < 400
// < 600
// < 800
// >= 800
// log((p1 / numbersCount * 100).toFixed(2) + "%")