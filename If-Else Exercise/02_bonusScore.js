function bonusScore(input){
    let score = Number(input[0]);
    let bonus = 0.0;

    if(score <= 100){
        bonus += 5;
    } else if(score < 1000){
        bonus = bonus * 20 / 100;
    } else if(score > 1000){
        bonus = bonus * 10 / 100;
    }

    if(score == 2 % 0){
        bonus += 1;
    } else if(score % 10 == 5){
        bonus += 2;
    }

    console.log(bonus);
    console.log(bonus + score);
}

bonusScore(["20"])


/*	Ако числото е до 100 включително, бонус точките са 5.
	Ако числото е по-голямо от 100, бонус точките са 20% от числото.
	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.
 */