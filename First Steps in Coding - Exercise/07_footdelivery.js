function foodDelivery(input){
    let chickenPrice = 10.35;
    let fishPrice = 12.40;
    let veganPrice = 8.15;
    let delivery = 2.50;

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    let totalPrice = chickenPrice * chickenMenu + fishPrice * fishMenu + veganPrice * veganMenu;
    let dessert = totalPrice * 20 / 100;

    let finalTotalPrice = dessert + delivery + totalPrice;
    console.log(finalTotalPrice);
}

foodDelivery(["2", "4", "3"]);
foodDelivery(["9", "2", "6"]);
// Пилешко меню –  10.35 лв. 
// Меню с риба – 12.40 лв. 
// Вегетарианско меню  – 8.15 лв. 
