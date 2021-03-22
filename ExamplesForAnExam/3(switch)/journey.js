function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let country;
    let type;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                country = "Bulgaria";
                type = "Camp";
                price = 0.3 * budget;
            } else if (budget <= 1000 && budget > 100) {
                country = "Balkans";
                type = "Camp";
                price = 0.4 * budget;
            } else {
                country = "Europe";
                type = "Hotel";
                price = 0.9 * budget;
            } break;
        case "winter":
            if (budget <= 100) {
                country = "Bulgaria";
                type = "Hotel";
                price = 0.7 * budget;
            } else if (budget <= 1000 && budget > 100) {
                country = "Balkans";
                type = "Hotel";
                price = 0.8 * budget;
            } else {
                country = "Europe";
                type = "Hotel";
                price = 0.9 * budget;
            } break;
    }
    console.log(`Somewhere in ${country}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}

journey(["75", "winter"]);