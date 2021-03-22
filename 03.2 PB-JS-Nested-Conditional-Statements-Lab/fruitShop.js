function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quality = Number(input[2]);
    let result = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana": result = 2.5 * quality; console.log(result.toFixed(2)); break;
                case "apple": result = 1.2 * quality; console.log(result.toFixed(2)); break;
                case "orange": result = 0.85 * quality; console.log(result.toFixed(2)); break;
                case "grapefruit": result = 1.45 * quality; console.log(result.toFixed(2)); break;
                case "kiwi": result = 2.7 * quality; console.log(result.toFixed(2)); break;
                case "pineapple": result = 5.5 * quality; console.log(result.toFixed(2)); break;
                case "grapes": result = 3.85 * quality; console.log(result.toFixed(2)); break;
                default: console.log("error"); break;
            } break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana": result = 2.7 * quality; console.log(result.toFixed(2)); break;
                case "apple": result = 1.25 * quality; console.log(result.toFixed(2)); break;
                case "orange": result = 0.9 * quality; console.log(result.toFixed(2)); break;
                case "grapefruit": result = 1.6 * quality; console.log(result.toFixed(2)); break;
                case "kiwi": result = 3 * quality; console.log(result.toFixed(2)); break;
                case "pineapple": result = 5.6 * quality; console.log(result.toFixed(2)); break;
                case "grapes": result = 4.2 * quality; console.log(result.toFixed(2)); break;
                default: console.log("error"); break;
            }   break;

        default: console.log("error"); break;
    }
}

fruitShop(["tomato", "Tuesday", "2"]);