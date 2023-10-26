function project(input){
    let name = input[0];
    let projects = Number(input[1]);
    let takenHours = projects * 3;
    console.log(`The architect ${name} will need ${takenHours} hours to complete ${projects} project/s.`);
}

project(["George", "4"]);
// 1 project take 3 hours