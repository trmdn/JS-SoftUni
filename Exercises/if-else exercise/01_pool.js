function pool(input){
    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let hours = Number(input[3]);

    let pipe1 = P1 * hours;  //300
    let pipe2 = P2 * hours; // 360
    let totalP = pipe1 + pipe2;
    let pipe1P = (pipe1 / totalP) * 100;
    let pipe2P = (pipe2 / totalP) * 100; 

    if(totalP < V){
        console.log(`The pool is ${(totalP / 10).toFixed(2)}% full. Pipe 1: ${pipe1P.toFixed(2)}%. Pipe 2: ${pipe2P.toFixed(2)}%.`);
    } else {
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${totalP - V} liters.`)
    }

}

pool(['1000','100','120','3']);