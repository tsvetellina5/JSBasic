function vacation(input) {
    let target = Number(input[0]);
    let startingMoney = Number(input[1]);
    let index = 2;
    let days = 0;
    let spendDays = 0;

    while (true) {
        let operation = input[index];
        index++;
        let amount = Number(input[index]);
        index++;

        if (operation === 'spend') {
            spendDays++;
            days++;
            if (amount > startingMoney) {
                startingMoney = 0;
            } else {
                startingMoney -= amount;
            }

        } else if (operation === 'save') {
            spendDays = 0;
            days++;
            startingMoney += amount;
        }

        if (spendDays === 5) {
            console.log("You can't save the money.");
            console.log(days);
            break;
        }

        if (startingMoney >= target) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
    }
}

vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);