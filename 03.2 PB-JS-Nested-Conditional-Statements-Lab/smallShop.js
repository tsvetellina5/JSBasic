function smallShop (input){
    let product = input[0];
    let city = input[1];
    let quality = input[2];

    if (product == "coffee"){
        if (city == "Sofia"){
            console.log(0.5*quality);
        } else if (city == "Plovdiv"){
            console.log(0.4*quality);
        } else if (city == "Varna"){
            console.log(0.45*quality);
        }
    } else if (product == "water"){
        if (city == "Sofia"){
            console.log(0.8*quality);
        } else if (city == "Plovdiv"){
            console.log(0.7*quality);
        } else if (city == "Varna"){
            console.log(0.7*quality);
        }
    } else if (product == "beer"){
        if (city == "Sofia"){
            console.log(1.2*quality);
        } else if (city == "Plovdiv"){
            console.log(1.15*quality);
        } else if (city == "Varna"){
            console.log(1.1*quality);
        }
    } else if (product == "sweets"){
        if (city == "Sofia"){
            console.log(1.45*quality);
        } else if (city == "Plovdiv"){
            console.log(1.3*quality);
        } else if (city == "Varna"){
            console.log(1.35*quality);
        }
    } else if (product == "peanuts"){
        if (city == "Sofia"){
            console.log(1.6*quality);
        } else if (city == "Plovdiv"){
            console.log(1.5*quality);
        } else if (city == "Varna"){
            console.log(1.55*quality);
        }
    }
}

smallShop(["coffee","Varna","2"]);