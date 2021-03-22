function fruitMarket(input) {
    let priceStrawberries = Number(input[0]);
    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let raspberries = Number(input[3]);
    let strawberries = Number(input[4]);

    let priceRaspberries = 0.5 * priceStrawberries;
    let priceOranges = priceRaspberries - 0.4 * priceRaspberries;
    let priceBananas = priceRaspberries - 0.8 * priceRaspberries;

    let sumRaspberries = raspberries * priceRaspberries;
    let sumOranges = oranges * priceOranges;
    let sumBananas = bananas * priceBananas;
    let sumStrawberries = strawberries * priceStrawberries;

    let finalSum = sumBananas + sumOranges + sumRaspberries + sumStrawberries;

    console.log(finalSum);
}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);