function fish(input){
    let mackerel = Number(input[0]);
    let sprinkle = Number(input[1]);
    let palamud = mackerel + mackerel * 0.60;
    let palamudSum = Number(input[2]) * palamud;
    let safrid = sprinkle * sprinkle * 0.80;
    let safridSum = Number(input[3]) * safrid;
    let midi = Number(input[4]);

    let total = mackerel + sprinkle + palamudSum + safridSum + midi;

    console.log(total);
}

fish(['6.90','4.20','1.5','2.5','1'])