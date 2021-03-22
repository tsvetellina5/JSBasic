function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decor = budget * 0.1;
    let totalClothesPrice = statistsCount * clothesPrice;

    if (statistsCount > 150) {
        totalClothesPrice = totalClothesPrice * 0.9;
    }

    let total = totalClothesPrice + decor;

    if (total > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`)
    }
}

godzillaVsKong(["20000", "120", "55.5"]);