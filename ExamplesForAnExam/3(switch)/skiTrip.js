function skiTrip (input){
    let days = Number(input[0]);
    let kindOfRoom = input[1];
    let grade = input[2];
    let price = 0;
    let middlePrice = 0;
    let totalPrice = 0;

    switch(kindOfRoom){
        case "room for one person":
            middlePrice = (days-1)*18;
            break;
        case "apartment":
            price = (days - 1)*25;
            if (days<10){
                middlePrice = 0.7*price;
            } else if (days >=10 && days<=15){
                middlePrice = 0.65*price;
            } else if (days>15){
                middlePrice = 0.5*price;
            } break;
        case "president apartment":
            price = (days-1)*35;
            if (days<10){
                middlePrice = 0.9*price;
            } else if (days >=10 && days<=15){
                middlePrice = 0.85*price;
            } else if (days>15){
                middlePrice = 0.8*price;
            } break; 
        }
    if (grade === "positive"){
        totalPrice = 1.25*middlePrice;
    } else {
        totalPrice = 0.9*middlePrice;
    }
    console.log(totalPrice.toFixed(2));
}

skiTrip(["14","apartment","positive"]);