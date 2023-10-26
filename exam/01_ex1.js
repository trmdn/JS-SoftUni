function pcStore(input){
    let cpuInDollars = Number(input[0]);
    let gpuInDollars = Number(input[1]);
    let ramInDollars = Number(input[2]);
    let ramCount = Number(input[3]);
    let perDiscount = Number(input[4]) * 100;

    let cpuInLeva = cpuInDollars * 1.57;
    let gpuInLeva = gpuInDollars * 1.57;
    let ramInLeva = ramInDollars * 1.57;
    let ramCountInLeva = ramInLeva * ramCount;
    let cpuDiscount = cpuInLeva - (cpuInLeva * perDiscount / 100);
    let gpuDiscount = gpuInLeva - (gpuInLeva * perDiscount / 100);

    let total = ramCountInLeva + cpuDiscount + gpuDiscount;

    console.log(`Money needed - ${total.toFixed(2)} leva.`);


}

pcStore(['500','200','80','2','0.05'])

/* На първи ред: цената в долари за процесора – реално число в интервала [200.00 … 3000.00]
•	На втори ред: цената в долари за видео карта – реално число в интервала [100.00 … 1500.00]
•	На трети ред: цената в долари за една RAM памет – реално число в интервала [80.00 ... 500.00]
•	На четвърти: ред брой RAM памети – цяло число в интервала [1 ... 4]
•   На пети ред: процент отстъпка – реално число в интервала [0.01 … 0.1]
 */