function birthdayParty(input) {
    let rent = Number(input[0]);
    let cake = 20 / 100 * rent;
    let drinks = cake - 45 / 100 * cake;
    let person = 1 / 3 * rent;
    let finalPrice = rent + cake + drinks + person;
    console.log(finalPrice);
}

birthdayParty(["2250"]);