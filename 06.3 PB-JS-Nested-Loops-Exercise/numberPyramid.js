function numberPyramid(input) {
    let n = Number(input[0]);
    let count = 0;
    let flag = false;

    for (let rows = 1; rows <= n; rows++) {

        let result = "";

        for (let col = 1; col <= rows; col++) {
            count++;
            result += count + " ";
            if (count >= n) {
                flag = true;
                break;
            }            
        }
        
        console.log(result);
        if (flag) {
            break;
        }
    }
}

numberPyramid([32]);