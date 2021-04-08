function minNumber(input) {
    let index = 0;
    let command = input[index];
    index++;
    let minNumb = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);
        if (minNumb > num) {
            minNumb = num;
        }
        command = input[index];
        index++;
    }
    console.log(minNumb);
}

minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);