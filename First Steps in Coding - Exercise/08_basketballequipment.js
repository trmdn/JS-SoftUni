function basketballEquipment(input){
    let year = Number(input[0]);
    let sneakers = year * 0.6;
    let equip = sneakers * 0.8;
    let ball = equip * 0.25;
    let accessories = ball * 0.20;
    let totalPrice = year +  sneakers + equip + ball + accessories;
    console.log(totalPrice);
}

basketballEquipment(["365"])