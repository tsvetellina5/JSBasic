function grandpaStavri(input) {

    let days = Number(input[0]);
    let degreesforOneDay = 1;
    let totalDegrees = 0;
    let avgDegrees = 1;
    let quality = 0;
    let index = 1;


    for (let i = 1; i <= days; i++) {

        let qualityForOneDay = Number(input[index++]);
        let degrees = Number(input[index++]);

        degreesforOneDay = qualityForOneDay * degrees;
        quality += qualityForOneDay;
        totalDegrees += degreesforOneDay;

    }

    avgDegrees = totalDegrees / quality;
    console.log(`Liter: ${quality.toFixed(2)}`);
    console.log(`Degrees: ${avgDegrees.toFixed(2)}`);
    if (avgDegrees < 38) {
        console.log(`Not good, you should baking!`);
    } else if (avgDegrees >= 38 && avgDegrees <= 42) {
        console.log(`Super!`)
    } else if (avgDegrees > 42) {
        console.log(`Dilution with distilled water!`);
    }
}

grandpaStavri(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"]);