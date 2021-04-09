function cake(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let sizeCake = w * l;
    let piecesTaken = 0;
    let command = input[2];
    let index = 3;


    while (command !== "STOP") {
        piecesTaken += Number(command);
        if (piecesTaken > sizeCake) {
            break;
        }
        command = input[index++];
    }
    if (piecesTaken < sizeCake) {
        console.log(`${sizeCake - piecesTaken} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${piecesTaken - sizeCake} pieces more.`);
    }
}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);