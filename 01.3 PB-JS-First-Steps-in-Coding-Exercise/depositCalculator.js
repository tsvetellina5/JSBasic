function depositCalculator(input){
    let depsum = Number(input[0]);
    let period = Number(input[1]);
    let percent = Number(input[2]);
    let result = depsum + period*((depsum*percent/100)/12);

    console.log(result);
}

depositCalculator(["200", "3", "5.7"]);