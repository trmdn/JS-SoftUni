function fAndV(input){
    let vegKg = Number(input[0]);
    let fruKg = Number(input[1]);
    let totalVeg = Number(input[2]);
    let totalFru = Number(input[3]);

    let vegetables = vegKg * totalVeg;
    let fruits = fruKg * totalFru;

    let total = vegetables + fruits;
    console.log(total.toFixed(2));
}

fAndV([]);