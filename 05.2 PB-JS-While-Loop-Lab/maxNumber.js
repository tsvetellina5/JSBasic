function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;
    let maxNumb = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);
        if (maxNumb < num) {
            maxNumb = num;
        }
        command = input[index];
        index++;
    }
    console.log(maxNumb);
}

maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);