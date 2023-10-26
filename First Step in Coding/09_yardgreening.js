function yardGreening(input){
    let yard = Number(input[0]);
    let OneKm2 = 7.61;
    let area = yard * OneKm2;
    let discount = 18 / 100;
    let discountFromTotal = discount * area;
    let total = area - discountFromTotal;
    console.log(`The final price is: ${total} lv.`)
    console.log(`The discount is: ${discountFromTotal} lv.`);
}

yardGreening(["550"]);
yardGreening(["150"]);


// 1km2 = 7.61
// discount 18%