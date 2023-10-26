function salary(input){
    let facebook = 150;
    let instagram = 100;
    let reddit = 50;
    let browsers = Number(input[0]);
    let salary = Number(input[1]);

    for(let i = 0; i < browsers; i++){
        let websites = input[i + 2];

        if(websites == "Facebook"){
            salary -= facebook;
        } else if(websites == "Instagram"){
            salary -= instagram;
        } else if(websites == "Reddit"){
            salary -= reddit;
        }
    }

    if(salary <= 0){
        console.log("You have lost your salary." );
    } else{
        console.log(salary);
    }
}

salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);