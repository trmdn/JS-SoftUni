function petShop(input){
    let foodForDogs = Number(input[0]) * 2.50;
    let foodForCats = Number(input[1]) * 4.00;
    let total = foodForCats + foodForDogs
    console.log(`${total} lv.`);
}

petShop(["5","4"]);
petShop(["13","9"]);

// food for dogs 2.50
// food for cats 4.00