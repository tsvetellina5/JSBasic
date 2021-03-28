function cleverLily(input) {
    let age = Number(input[0]);
    let priceWashingMashine = Number(input[1]);
    let priceForOneToy = Number(input[2]);
    let sumMoney = 0;
    let sumToys = 0;
    let money = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 1) {
            sumToys++;
        } else {
            sumMoney += money;
            money += 10;
            sumMoney--;
        }
    }

    sumMoney += sumToys * priceForOneToy;

    if (sumMoney >= priceWashingMashine){
        console.log(`Yes! ${(sumMoney-priceWashingMashine).toFixed(2)}`)
    } else {
        let diff = Math.abs(sumMoney-priceWashingMashine);
        console.log(`No! ${diff.toFixed(2)}`);
    }

}

cleverLily(["10", "170", "6"]);