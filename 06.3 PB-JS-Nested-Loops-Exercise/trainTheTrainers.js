function trainTheTrainers(input) {
    let people = Number(input[0]);
    let index = 1;
    let allGradesCount = 0;
    let allGradeSum = 0;

    while (input[index] !== "Finish") {
        let name = input[index];
        let gradeSum = 0;
        for (let i = 1; i <= people; i++) {
            let grade = Number(input[index + i]);
            gradeSum += grade;
            allGradeSum += grade;
            allGradesCount++;
        }
        console.log(`${name} - ${(gradeSum / people).toFixed(2)}.`);
        index += people + 1;
    }
    console.log(`Student's final assessment is ${(allGradeSum / allGradesCount).toFixed(2)}.`)
}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);