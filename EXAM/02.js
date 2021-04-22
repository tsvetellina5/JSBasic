function maidenParty(input) {
    let price = Number(input[0]);
    let loveLetters = Number(input[1]);
    let roses = Number(input[2]);
    let keychains = Number(input[3]);
    let caricatures = Number(input[4]);
    let surprises = Number(input[5]);

    let priceLoveLetters = loveLetters * 0.6;
    let priceRoses = roses * 7.2;
    let priceKeychains = keychains * 3.6;
    let priceCaricatures = caricatures * 18.2;
    let priceSurprises = surprises * 22;

    let total = loveLetters + roses + keychains + caricatures + surprises;
    let totalPrice = priceCaricatures + priceKeychains + priceLoveLetters + priceRoses + priceSurprises;
    if (total >= 25) {
        totalPrice *= 0.65;
    }
    let finalMoney = 0.9 * totalPrice;

    if (finalMoney >= price) {
        console.log(`Yes! ${(finalMoney - price).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(price - finalMoney).toFixed(2)} lv needed.`);
    }
}

maidenParty(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"]);

