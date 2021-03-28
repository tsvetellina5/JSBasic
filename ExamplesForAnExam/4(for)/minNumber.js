function minNumber(input) {
    let numbersCount = Number(input[0]);
    let numbersL = input.length;
    let min = Number(input[1]);

    for (let i = 2; i <= numbersL; i++) {
        if (input[i]<min) {
            min = Number(input[i]);
        } 
    }
    console.log(min);
}

minNumber(["1","999"]);