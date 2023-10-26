function bookList(input){
    let totalPages = Number(input[0]); //212
    let pagesPerHour = Number(input[1]); //20
    let days = Number(input[2]); //2
    let totalHours = totalPages / pagesPerHour;
    let hoursPerDay = totalHours / days;
    console.log(hoursPerDay);
}

bookList(["212", "20", "2"]);
bookList(["432", "15", "4"]);