function moving(input){
    let width = Number(input[0]);
    let height = Number(input[1]);
    let hight = Number(input[2]);
    let total = width * height * hight;
    let end = "Done";
    let freeSpace = total;
    
    index = 3;

    while(true){
        let currentNumber = input[index];
        index++;

        if(currentNumber == end){
            console.log(`${freeSpace} Cubic meters left.`);
            break;
        }

        let currentBoxes = Number(currentNumber);
        
        freeSpace -= currentBoxes;
        if(freeSpace < 0){
            console.log(`No more free space! You need ${-freeSpace} Cubic meters more.`);
            break;
        }
    }
}

moving(["10","10","2","20", "20", "20", "20", "122"]);

/*1. Широчина на свободното пространство - цяло число в интервала [1...1000]

2. Дължина на свободното пространство - цяло число в интервала [1...1000]

3. Височина на свободното пространство - цяло число в интервала [1...1000]

4. На следващите редове (до получаване на команда "Done") - брой кашони, които се пренасят в квартирата - цели числа в интервала [1...10000]; */