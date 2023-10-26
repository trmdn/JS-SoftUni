function graduation(input){
    let index = 0;
    let name = input[index];
    index++;

    let badGradeCount = 0;
    let grades = 1;
    let sumGrade = 0;
    let isExcluded = false;

    while(grades <= 12){
        let currentNumber = Number(input[index]);
        index++;
        if(currentNumber < 4.00){
            badGradeCount++;
            if(badGradeCount == 2){
                isExcluded = true;
                console.log(`${name} has been excluded at ${grades} grade`);
                break;
            }
            continue;
        }
        grades++;
        sumGrade += currentNumber;
    }

    if(!isExcluded){
        console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`);
    }
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);