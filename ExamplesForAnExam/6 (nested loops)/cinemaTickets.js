function cinemaTickets(input) {
    let index = 0;
    let command = input[index++];
    let totalTickets = 0;
    let countStudentTickets = 0;
    let countStandardTickets = 0;
    let countKidTickets = 0;

    while (command !== "Finish") {
        let name = command;
        let freeSpace = Number(input[index++]);
        let type = input[index++];
        let counterTickets = 0;

        while (type !== "End") {
            counterTickets++;
            switch (type) {
                case "student": countStudentTickets++; break;
                case "standard": countStandardTickets++; break;
                case "kid": countKidTickets++; break;
            }

            if (counterTickets >= freeSpace) {
                break;
            }

            type = input[index++];
        }
        totalTickets += counterTickets;
        let result = counterTickets / freeSpace * 100;
        console.log(`${name} - ${result.toFixed(2)}% full.`);
        command = input[index++];

    }
    console.log(`Total tickets: ${totalTickets}`);
    let percentStudent = countStudentTickets / totalTickets * 100;
    let percentStandard = countStandardTickets / totalTickets * 100;
    let percentKid = countKidTickets / totalTickets * 100;
    console.log(`${percentStudent.toFixed(2)}% student tickets.`);
    console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
    console.log(`${percentKid.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);