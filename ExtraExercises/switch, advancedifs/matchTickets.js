function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);
    let transportTaxes = 0;
    let ticketTaxes = 0;

    if (category === "VIP") {
        ticketTaxes = people * 499.99;
    } else {
        ticketTaxes = people * 249.99;
    }

    if (people >= 1 && people <= 4) {
        transportTaxes = 0.75 * budget;
    } else if (people >= 5 && people <= 9) {
        transportTaxes = budget * 0.6;
    } else if (people >= 10 && people <= 24) {
        transportTaxes = 0.5 * budget;
    } else if (people >= 25 && people <= 49) {
        transportTaxes = 0.4 * budget;
    } else if (people >= 50) {
        transportTaxes = 0.25 * budget;
    }

    if (ticketTaxes <= (budget - transportTaxes)) {
        console.log(`Yes! You have ${(budget - (transportTaxes + ticketTaxes)).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${((transportTaxes + ticketTaxes) - budget).toFixed(2)} leva.`)
    }
}

matchTickets(["1000", "Normal", "1"]);