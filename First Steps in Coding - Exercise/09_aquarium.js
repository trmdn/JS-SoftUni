function aquarium(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let depth = Number(input[2]);
    let volume = width * length * depth //cm3
    let volumeOnL = volume / 1000
    let occupiedSpace = Number(input[3]) / 100;
    let litersNeeded = volumeOnL * (1 - occupiedSpace);
    console.log(litersNeeded);
}

aquarium(["85","75","47","17"]);
aquarium(["105","77","89","18.5"]);