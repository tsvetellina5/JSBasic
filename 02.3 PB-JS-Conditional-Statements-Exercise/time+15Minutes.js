function timePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]) + 15;

    if (minutes >= 60) {
        hour++;
        minutes = minutes - 60;
    }

    if (hour >= 24) {
        hour = hour - 24;
    }

    if (minutes < 10) {
        console.log(`${hour}:0${minutes}`)
    } else {
        console.log(`${hour}:${minutes}`);
    }

}

timePlus15Minutes(["23", "46"]);