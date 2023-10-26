function oscarCeremony(input){
    let rent = Number(input[0]);
    let statue = rent * 0.70;
    let kettering = statue * 0.85;
    let soundSystem = kettering * 0.50;
    let total = rent + statue + kettering + soundSystem;
    console.log(total.toFixed(2));
}

oscarCeremony(['5555']);