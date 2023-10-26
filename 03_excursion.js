function excursion(input){
    let people = Number(input[0]);
    let season = String(input[1]);
    let totalSum = 0; 
    let sale = 0;
    let prc = parseFloat(8) / 100;

    if(season == "spring"){
        if(people > 5){
            totalSum = people * 48.00;
            console.log(`${totalSum.toFixed(2)} leva.`);
        } else{
            totalSum = people * 50.00;
            console.log(`${totalSum.toFixed(2)} leva.`);
        }
    } else if(season == "summer"){
        if(people > 5){
            totalSum = people * 45.00;
            sale = totalSum * 15 / 100;
            console.log(`${(totalSum - sale).toFixed(2)} leva.`);
        } else{
            totalSum = people * 48.50;
            sale = totalSum * 15 / 100;
            console.log(`${(totalSum - sale).toFixed(2)} leva.`);
        }
    } else if(season == "autumn"){
        if(people > 5){
            totalSum = people * 49.50;
            console.log(`${totalSum.toFixed(2)} leva.`);
        } else{
            totalSum = people * 60.00;
            console.log(`${totalSum.toFixed(2)} leva.`);
        }
    } else if(season == "winter"){
        if(people > 5){
            totalSum = people * 85.00;
            sale = totalSum * prc;
            console.log(`${(totalSum + sale).toFixed(2)} leva.`);
        } else{
            totalSum = people * 86.00;
            sale = totalSum * prc;
            console.log(`${(totalSum + sale).toFixed(2)} leva.`);
    }
  }
}

excursion(['20','winter'])


/*•	При "summer" -> 15% отстъпка
•	При "winter" -> 8% оскъпяване
 */


/*1.	Първи ред – брой хора – цяло число в интервала [1 … 20]
2.	Втори ред – сезон – текст с възможности - "spring", "summer", "autumn" или "winter" 
 */