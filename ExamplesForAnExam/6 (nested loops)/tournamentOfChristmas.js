function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index++]);
    let totalMoney = 0;
    let daysWithWins = 0;
    let daysWithLoses = 0;

    for (let d = 1; d <= days; d++) {
        let command = input[index++];
        let dayMoney = 0;
        let wins = 0;
        let loses = 0;

        while (command !== "Finish") {
            let sport = command;
            let result = input[index++];

            if (result === "win") {
                dayMoney += 20;
                wins++;
            } else {
                loses++;
            }

            command = input[index++];
        }

        if (wins > loses) {
            dayMoney *= 1.10;
            daysWithWins++;
        } else {
            daysWithLoses++;
        }

        totalMoney += dayMoney;

        
    }
    if (daysWithWins>daysWithLoses) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

tournamentOfChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);