function vowelsSum(input) {
    let theString = input[0];
    let stringL = theString.length;
    let sum = 0;

    for (let i = 0; i <= stringL; i++) {
        let ch = theString[i];
        switch(ch){
            case 'a': sum+=1; break;
            case 'e': sum+=2; break;
            case 'i': sum+=3; break;
            case 'o': sum+=4; break;
            case 'u': sum+=5; break;
        }
    } 
    console.log(sum);
}

vowelsSum(["hello"]);