function season(input){
    let sunny = input[0];
    let warm = input[1];
    let snowy = input[2];

    if(sunny == "sunny"){
        console.log("It's warm outside!");
    } else if(warm != "sunny"){
        console.log("It's cold outside!");
    } else{
        console.log("It's cold outside!");
    }

}

season(["sunny", "warm", "snowy"])



//sunny warm snowy