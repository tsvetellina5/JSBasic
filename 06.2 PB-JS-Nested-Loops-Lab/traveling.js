function traveling(input) {
    let index = 0;
    let command = input[index++];
    let totalMoney = 0;
 
    while (command !== "End") {
        let destination = command;
        let budget = Number(input[index++]);
        let moneyToAdd = Number(input[index++]);
        while (moneyToAdd < budget) {
            totalMoney += moneyToAdd;
            if (totalMoney >= budget) {
                console.log(`Going to ${destination}!`);
                totalMoney = 0;
                break;
            } else {
                moneyToAdd = Number(input[index++]);
            }
 
        } 
        command = input[index++];
    }
}
traveling(["Greece",
    "1000",
    '500',
    '9000',
    '500',
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);