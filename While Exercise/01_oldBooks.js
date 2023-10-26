function oldBooks(input){
    let exitMessage = "No More Books";

    let booksChecked = 0;
    let targetBook = input[0];

    let index = 1;

    while(true){
        let currentBook = input[index];
        booksChecked++;

        if(currentBook == exitMessage){
            console.log("The book you search is not here!");
            console.log(`You checked ${booksChecked - 1} books.`);
            break;
        }

        if(currentBook == targetBook){
            console.log(`You checked ${booksChecked - 1} books and found it.`);
            break;
        }
        index++;
    }
}

oldBooks(["Troy","Stronger","Life Style","Troy"]);

