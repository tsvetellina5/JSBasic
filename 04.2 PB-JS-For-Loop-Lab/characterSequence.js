function characterSequence(input) {
    let theString = input[0];
    let stringL = theString.length;

    for (let i = 0; i < stringL; i++) {
        let letter = theString[i];
        console.log(letter);
    } 
}

characterSequence(["ice cream"]);