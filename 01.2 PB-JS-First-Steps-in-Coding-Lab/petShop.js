function petShop(input){
    let dogs = input[0];
    let otherpets = input[1];
    let price = dogs*2.5 + otherpets*4;
    console.log(price);
}

petShop(["5", "4"]);