function examPreparation(input){
    let badGrades = 4;
    let exitMessage = "Enough";
    let allGrades = Number(input[0]);
    let totalTasks = 0;
    let badGradesCurrent = 0;
    let sumTask = 0;
    let lastProblemName = "";
    let index = 1;


    while(true){
        let currentName = input[index];
        index++;
        let currentGrade = Number(input[index]);
        index++;

        if(currentName == exitMessage){
            console.log(`Average score: ${(sumTask / totalTasks).toFixed(2)}`);
            console.log(`Number of problems: ${totalTasks}`);
            console.log(`Last problem: ${lastProblemName}`);
            break;
        }

        totalTasks++;
        sumTask += currentGrade;
        lastProblemName = currentName;

        if(currentGrade <= badGrades){
            badGradesCurrent++;
            if(badGradesCurrent == allGrades){
                console.log(`You need a break, ${(badGradesCurrent)} poor grades.`);
                break;
            }
        }
    }
}

examPreparation(["3","Money","6","Story","4","SpringTime","5","Bus","6","Enough"]);