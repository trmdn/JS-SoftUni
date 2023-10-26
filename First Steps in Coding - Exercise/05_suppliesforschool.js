function suppliesForSchool(input){
    let pens = 5.80;
    let markers = 7.20;
    let preparation = 1.20 //for 1l;
    // let discount = allMaterials * 25 / 100;

    let pensCount = Number(input[0]);
    let markersCount = Number(input[1]);
    let preparationCount = Number(input[2]);
    let allMaterials = pens * pensCount + markers * markersCount + preparation * preparationCount;
    let priceWithDiscount = allMaterials - allMaterials * 25 / 100;
    console.log(priceWithDiscount);
}

suppliesForSchool(["2", "3", "4", "25"]);
suppliesForSchool(["4", "2", "5", "13"]);