function substitute(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let isValid = false;
    let counter = 0;
    let end = false;
    let firstNum = 0;
    let secondNum = 0;

    for (let firstNumFirstDigit = k; firstNumFirstDigit <= 8; firstNumFirstDigit++) {
        for (let firstNumSecondDigit = 9; firstNumSecondDigit >= l; firstNumSecondDigit--) {
            for (let secondNumFirstDigit = m; secondNumFirstDigit <= 8; secondNumFirstDigit++) {
                for (let secondNumSecondDigit = 9; secondNumSecondDigit >= n; secondNumSecondDigit--) {
                    if (firstNumFirstDigit % 2 === 0 && secondNumFirstDigit % 2 === 0 &&
                        firstNumSecondDigit % 2 !== 0 && secondNumSecondDigit % 2 !== 0) {
                        isValid = true;
                    } else {
                        isValid = false;
                    }

                    firstNum = firstNumFirstDigit * 10 + firstNumSecondDigit;
                    secondNum = secondNumFirstDigit * 10 + secondNumSecondDigit;

                    if (isValid && firstNum === secondNum) {
                        console.log(`Cannot change the same player.`)
                    } else if (isValid && firstNum !== secondNum) {
                        console.log(`${firstNum} - ${secondNum}`);
                        counter++;
                    }
                    
                    if (counter >= 6) {
                        end = true;
                    }
                    if (end) {
                        break;
                    }
                }
                if (end) {
                    break;
                }
            }
            if (end) {
                break;
            }
        }
        if (end) {
            break;
        }
    }
}

substitute(["7",
    "6",
    "8",
    "5"]);