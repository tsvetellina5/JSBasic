function tradeCommissions (input){
    let city = input[0];
    let quantity = Number(input[1]);
    let result = 0;

    switch(city){
        case "Sofia": 
        if (quantity >= 0 && quantity<=500){
            console.log((0.05*quantity).toFixed(2));
        } else if (quantity>500 && quantity<=1000){
            console.log((0.07*quantity).toFixed(2));
        } else if (quantity>1000 && quantity<=10000){
            console.log((0.08*quantity).toFixed(2));
        } else if (quantity>10000){
            console.log((0.12*quantity).toFixed(2));
        } else {
            console.log("error");
        } break;
        case "Varna":
        if (quantity >= 0 && quantity<=500){
            console.log((0.045*quantity).toFixed(2));
        } else if (quantity>500 && quantity<=1000){
            console.log((0.075*quantity).toFixed(2));
        } else if (quantity>1000 && quantity<=10000){
            console.log((0.10*quantity).toFixed(2));
        } else if (quantity>10000){
            console.log((0.13*quantity).toFixed(2));
        } else {
            console.log("error");
        } break;
        case "Plovdiv":
        if (quantity >= 0 && quantity<=500){
            console.log((0.055*quantity).toFixed(2));
        } else if (quantity>500 && quantity<=1000){
            console.log((0.08*quantity).toFixed(2));
        } else if (quantity>1000 && quantity<=10000){
            console.log((0.12*quantity).toFixed(2));
        } else if (quantity>10000){
            console.log((0.145*quantity).toFixed(2));
        } else {
            console.log("error");
        } break;
        default: console.log("error"); break;
    }
}

tradeCommissions(["Sofia","1500"]);