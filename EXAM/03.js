function excursionCalculator(input) {
    let people = Number(input[0]);
    let season = input[1];
    let price = 1;

    switch (season) {
        case "spring":
            if (people <= 5) {
                price = 50 * people;
            } else {
                price = 48 * people;
            }
        break;
        case "summer":
            if (people <= 5) {
                price = 48.5 * people;
            } else {
                price = 45 * people;
            }
            price *= 0.85;
            break;
        case "autumn":
            if (people <= 5) {
                price = 60 * people;
            } else {
                price = 49.5 * people;
            }
            break;
        case "winter":
            if (people <= 5) {
                price = 86 * people;
            } else {
                price = 85 * people;
            }
            price *= 1.08;
            break;
    }
    console.log(`${price.toFixed(2)} leva.`)
}

excursionCalculator(["5", "spring"]);