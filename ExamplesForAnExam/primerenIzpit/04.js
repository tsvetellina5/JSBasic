function tracking(input) {
    let index = 0;
    let groups = Number(input[index++]);
    let totalPeopleCounter = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;

    for (let i = 0; i < groups; i++) {
        let currentGroup = Number(input[index++]);
        totalPeopleCounter += currentGroup;
        if (currentGroup <= 5) {
            n1 += currentGroup;
        } else if (currentGroup >= 6 && currentGroup <= 12) {
            n2 += currentGroup;
        } else if (currentGroup >= 13 && currentGroup <= 25) {
            n3 += currentGroup;
        } else if (currentGroup >= 26 && currentGroup <= 40) {
            n4 += currentGroup;
        } else if (currentGroup >= 41) {
            n5 += currentGroup;
        }
    }
}

tracking(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);