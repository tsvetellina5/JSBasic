function everest(input) {
    let index = 0;
    let metres = 5364;
    let final = 8848;
    let days = 1;
    let ifNight = input[index++];

    while (ifNight !== "END") {
        let metresForADay = Number(input[index++]);

        if (ifNight === "Yes") {
            days++;
            metres += metresForADay;
            if (days > 5) {
                console.log(`Failed!`);
                console.log(`${metres}`);
                break;
            }
        } else {
            metres += metresForADay;
        }

        if (metres >= final) {
            console.log(`Goal reached for ${days} days!`);
            break;
        } 

        ifNight = input[index++];
    }

    if (metres < final) {
        console.log(`Failed!`);
        console.log(`${metres}`);
    }
}


everest(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"])