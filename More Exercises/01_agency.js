function agency(input){
    let name = input[0];
    let ticketForAdults = Number(input[1]);
    let ticketsForChildren = Number(input[2]);
    let budgetForAdult = Number(input[3]);
    let service = Number(input[4]);

    let budgetForChildren = budgetForAdult - (budgetForAdult * 70 / 100);
    let currentTicketForAdult = budgetForAdult + service;
    let childrenTicket = budgetForChildren + service;
    let total = Number(ticketsForChildren * childrenTicket) + Number(ticketForAdults * currentTicketForAdult);




    console.log(`The profit of your agency from ${name} tickets is ${(total * 20 / 100).toFixed(2)} lv.`);
}

agency(["WizzAir","15","5","120","40"]);


//(5 * 76) + (15 * 160)  = 2780 лв.
