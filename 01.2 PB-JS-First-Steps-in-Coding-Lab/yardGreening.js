function yardGreening(input){
    let area = Number(input[0]);
    let price = area*7.61;
    let discount = 0.18*price;
    let finalprice = price - discount;

    console.log(`The final price is: ${finalprice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);