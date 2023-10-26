function repainting(input) {
    let nylon = 1.50; //for 1m2
    let paint = 14.50; //for l
    let thinner = 5.00; //for l
    let bag = 0.40;

    let nylonCount = Number(input[0]) + 2;
    let paintCount = Number(input[1]) +  (10 / 100);
    let thinnerCount = Number(input[2]);
    let priceForCraftsManInHour = Number(input[3]);

    let priceForMaterials = nylon * nylonCount + paint * paintCount + thinner * thinnerCount + bag;
    let priceForCraftsMan = (priceForMaterials * 30 / 100) * priceForCraftsManInHour;
    let allPrice = priceForMaterials + priceForCraftsMan
    console.log(allPrice);

}

repainting(["10","11","4","8"]);