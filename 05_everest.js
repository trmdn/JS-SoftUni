function Task5(input) {
    const ever = 8848;
    let curr = 5364;
    let days = 1;
    for (let index = 0; index < input.length; index++) {
        const yesNoend = input[index];
        if (yesNoend === "END") {
            console.log("Failed!");
            console.log(curr);
            return;
        }
        const dist = +input[index + 1];
        index = index + 1;

        if (yesNoend === "Yes") {
            days++;
        }

        curr += ever;
        if (curr >= ever) {
            console.log("Goal reached for " + days + " days!");
            return;
        }
        if (days >= 5) {
            console.log("Failed!");
            console.log(curr);
            return;
        }
    }
    console.log("Failed!");
    console.log(curr);
}