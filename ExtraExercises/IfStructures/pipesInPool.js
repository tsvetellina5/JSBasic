function pipesInPool(input) {
    let volume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let hours = Number(input[3]);

    let totalWater = (p1 + p2) * hours;
    let percentsPool = (totalWater/volume)*100;
    let percentsP1 = (p1 * hours)/totalWater*100;
    let percentsP2 = (p2 * hours)/totalWater*100;


    if (totalWater <= volume) {
        console.log(`The pool is ${percentsPool.toFixed(2)}% full. Pipe 1: ${percentsP1.toFixed(2)}%. Pipe 2: ${percentsP2.toFixed(2)}%.`);
    } else {
        console.log(`For ${hours} hours the pool overflows with ${(totalWater - volume).toFixed(2)} liters.`);
    }
}

pipesInPool(["1000","100","120","3"]);