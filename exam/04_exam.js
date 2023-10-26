function Task4(input) {
    input = [...input].filter((el, ind) => ind != 0);

    let ocenki = {
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    };

    input.forEach((element) => {
        ocenki[Math.trunc(+element)] += 1;
    });
    ocenki[5] += ocenki[6];

    console.log(
        "Top students: " + ((ocenki[5] / input.length) * 100).toFixed(2) + "%"
    );
    console.log(
        "Between 4.00 and 4.99: " +
        ((ocenki[4] / input.length) * 100).toFixed(2) +
        "%"
    );
    console.log(
        "Between 3.00 and 3.99: " +
        ((ocenki[3] / input.length) * 100).toFixed(2) +
        "%"
    );
    console.log("Fail: " + ((ocenki[2] / input.length) * 100).toFixed(2) + "%");
    ocenki[5] -= ocenki[6];

    console.log(
        "Average: " +
        (input.reduce((acc, curr) => +curr + +acc, 0) / input.length).toFixed(2)
    );
}