function toyShop(input) {
    let price = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalPrice = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let totalQuality = puzzles + dolls + bears + minions + trucks;

    if (totalQuality >= 50) {
        totalPrice = totalPrice - 0.25 * totalPrice;
    }

    totalPrice = totalPrice * 0.9;

    if (totalPrice >= price) {
        let diff = totalPrice - price;
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        let diff = Math.abs(totalPrice - price);
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"]);