function combinations(input) {
    let a = Number(input[0]);
    let counter = 0;

    for (let i = 0; i <= a; i++) {
        for (let j = 0; j <= a; j++) {
            for (let k = 0; k <= a; k++) {
                if (i + j + k === a) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}

combinations([25]);