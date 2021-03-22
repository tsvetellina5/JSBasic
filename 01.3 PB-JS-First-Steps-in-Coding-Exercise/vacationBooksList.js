function vacationBooksList(input){
    let pagesToRead = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let neededHours = pagesToRead/pagesPerHour;
    let finalResult = neededHours/days;

    console.log(finalResult);
}

vacationBooksList(["212", "20", "2"]);