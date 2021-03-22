function scolarship(input) {
    let income = Number(input[0]);
    let averageSuccess = Number(input[1]);
    let minSalary = Number(input[2]);

    let socialScolarship = Math.floor(minSalary * 0.35);
    let successScolarship = Math.floor(averageSuccess * 25);

    if (income < minSalary && averageSuccess >= 5.50) {
        if (socialScolarship > successScolarship) {
            console.log(`You get a Social scholarship ${socialScolarship} BGN`);
        } else {
            console.log(`You get a scholarship for excellent results ${successScolarship} BGN`);
        }
    } else if (income < minSalary && averageSuccess > 4.50 && averageSuccess < 5.50) {
        console.log(`You get a Social scholarship ${socialScolarship} BGN`);
    } else if (averageSuccess >= 5.50) {
        console.log(`You get a scholarship for excellent results ${successScolarship} BGN`);
    } else {
        console.log("You cannot get a scholarship!");
    }

}

scolarship(["480.00","4.60","450.00"])