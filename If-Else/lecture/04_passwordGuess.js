function passGuess(input){
    password = input[0];
    if(password == "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    } else{
        console.log("Wrong password!");
    }
}

passGuess(["s3cr3t!P@ssw0rd"])