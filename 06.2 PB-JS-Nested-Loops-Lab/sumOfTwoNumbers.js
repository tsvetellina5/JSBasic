function sumOfTwoNumbers(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let mag = Number(input[2]);
    let isFound = false;
    let counter = 0;

    for (let i = x; i <= y; i++) {
        for (let j = x; j <= y; j++) {
            counter++;
            if (i + j === mag) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${mag})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${mag}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"]);