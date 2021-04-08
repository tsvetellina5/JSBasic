function graduationpt2(input) {
    let index = 0;
    let name = input[index];
    index++;

    let exclutedCounter = 0;
    let averageGrade = 0;
    let grade = 1;
    let isExcluted = false;

    while (grade <= 12) {
        let yearGrade = Number(input[index]);
        index++;

        if (yearGrade >= 4.00) {
            grade++;
            averageGrade += yearGrade;
            continue;
        } else {
            exclutedCounter++;
        }

        if (exclutedCounter === 2) {
            console.log(`${name} has been excluded at ${grade} grade`)
            isExcluted = true;
            break;
        }
    }
    averageGrade = averageGrade / 12;
    if (!isExcluted) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduationpt2(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"]);