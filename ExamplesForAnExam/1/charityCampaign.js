function charityCampaign(input) {
    let days = Number(input[0]);
    let persons = Number(input[1]);
    let cakes = Number(input[2]);
    let gofretts = Number(input[3]);
    let pancakes = Number(input[4]);
    let cakesResult = persons * cakes * 45;
    let gofrettsResult = persons * gofretts * 5.8;
    let pancakesResult = persons * pancakes * 3.2;
    let finalPrice = 7 / 8 * (days * (cakesResult + gofrettsResult + pancakesResult));
    console.log(finalPrice);
}

charityCampaign(["23", "8", "14", "30", "16"]);