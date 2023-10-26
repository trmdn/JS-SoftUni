function Task6(n) {
    n = +n[0];
    for (let a = 1; a < 9; a++) {
        for (let b = 9; b > a; b--) {
            for (let c = 0; c < 9; c++) {
                for (let d = 9; d > c; d--) {
                    const umnoj = a * b * c * d;
                    const sum = a + b + c + d;
                    if (n.toString()[n.toString().length - 1] === "5" && umnoj == sum) {
                        console.log(`${a}${b}${c}${d}`);
                        return;
                    }
                    const delenie = Math.trunc(umnoj / sum);
 
                    if (delenie === 3 && n % 3 == 0) {
                        console.log([...
                            `${a}${b}${c}${d}`
                        ].reverse().join(""));
                        return;
                    }
                }
            }
        }
    }
 
    console.log("Nothing found");
}