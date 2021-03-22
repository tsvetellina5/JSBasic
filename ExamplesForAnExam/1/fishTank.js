function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = (Number(input[3])) * 0.01;
    let volume = length * width * height;
    let liters = 0.001 * volume;
    let litersToUse = liters * (1 - percent);
    console.log(litersToUse);

}

fishTank(["85", "75", "47", "17"]);