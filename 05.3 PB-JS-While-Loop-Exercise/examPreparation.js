function examPrep(input) {
    let badGrades = Number(input[0]);

    let index = 1;
    let problem = input[index++];
    let grade = Number(input[index++]);

    let avgScore = 0;
    let problemsCount = 0;
    let lastName = "";
    let badGradesCounter = 0;
    let sum = 0;

    while (problem !== "Enough") {
        problemsCount++;
        sum += grade;
        lastName = problem;

        if (grade <= 4) {
            badGradesCounter++;
            if (badGradesCounter === badGrades) {
                console.log(`You need a break, ${badGradesCounter} poor grades.`)
                break;
            }
        }
        problem = input[index++];
        grade = Number(input[index++]);
    }

    avgScore = sum/problemsCount; 
    if (problem === "Enough") {
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastName}`);
    }
}

examPrep(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);