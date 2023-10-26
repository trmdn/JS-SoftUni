function cake(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let total = width * length;
    let freePieces = total;

    let index = 2;

    while(true){
        currentNumber = input[index];
        index++;

        if(currentNumber == "STOP"){
            console.log(`${freePieces} pieces are left.`);
            break;
        }

        currentPieces = Number(currentNumber);
        freePieces -= currentPieces;

        if(freePieces < 0){
            console.log(`No more cake left! You need ${Math.abs(freePieces)} pieces more.`);
            break;
        }
    }
}


cake(["10","10","20","20","20", "20", "21"]);