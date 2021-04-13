function numberPyramid(input) {
    let n = Number(input[0]);
    for (let rows = 1; rows <= n; rows++) {
        for (let col = 1; col <= rows; col++){
            console.log(n);
        }
    }
}

numberPyramid([7]);