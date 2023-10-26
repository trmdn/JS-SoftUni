function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let place = "";

 /*   switch(destination){
        case "Bulgaria": switch(season){
            case "summer":
        }
    }
*/
   if(budget <= 100){
    destination = "Bulgaria";
    if(season == "summer"){
        place = "Camp";
        budget *= 0.30;
    } else if(season == "winter"){
        place = "Hotel";
        budget *= 0.70;
    }
   } else if(budget <= 1000){
    destination = "Balkans";
    if(season == "summer"){
        place = "Camp";
        budget *= 0.40;
    } else if(season == "winter"){
        place = "Hotel";
        budget *= 0.80;
    }
   } else if(budget > 1000){
    destination = "Europe";
    place = "Hotel";
    budget *= 0.90;
   }

   console.log(`Somewhere in ${destination}`);
   console.log(`${place} - ${(budget).toFixed(2)}`);

}

journey(["312", "summer"]);