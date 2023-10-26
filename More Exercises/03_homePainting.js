function homePainting(input){
    let naylon = 1.50;
    let paint = 14.50;
    let paintDivider = 5.00;
    let bag = 0.40;

    let naylonCount = Number(input[0]);
    let paintCount = Number(input[1]);
    let paintDividerCount = Number(input[2]);
    let hours = Number(input[3]);

    let naylonSum = (naylonCount + 2) * naylon;
    let paintSum = (paintCount + (paintCount *10 / 100)) * paint;
    let paintDividerCountSum = paintDividerCount * paintDivider;
    let total = naylonSum + paintSum + paintDividerCountSum + bag;
    let sumForWorkers = (total * 30 / 100) * hours;
    console.log(total + sumForWorkers);
}

homePainting(["5","10","10","1"]);


// 1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// 2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// 3.	Количество разредител (в литри) - цяло число в интервала [1…30]
// 4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]
