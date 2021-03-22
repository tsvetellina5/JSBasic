function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfTheDay = input[1];
    let outfit;
    let shoes;

    switch (timeOfTheDay) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            } else if (degrees > 18 && degrees <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            } else if (degrees >= 25) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            } break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            } else if (degrees > 18 && degrees <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            } else if (degrees >= 25) {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            } break;
        case "Evening":
            if (degrees >= 10 && degrees <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            } else if (degrees > 18 && degrees <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            } else if (degrees >= 25) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            } break;
        }
    }

summerOutfit(["28", "Morning"]);