function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minsExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minsArrival = Number(input[3]);

    let timeExam = hourExam * 60 + minsExam;
    let timeArrival = hourArrival * 60 + minsArrival;
    let diff = timeExam - timeArrival;
    let hourDiff = 0;
    let minsDiff = 0;

    if (diff === 0) {
        console.log("On time");
    } else if (diff > 0 && diff < 60) {
        if (diff <= 30) {
            console.log("On time");
            console.log(`${diff} minutes before the start`);
        } else {
            console.log("Early");;
            console.log(`${diff} minutes before the start`);
        }
    } else if (diff >= 60) {
        hourDiff = Math.trunc(diff / 60);
        minsDiff = diff % 60;
        console.log("Early");
        if (minsDiff < 10) {
            console.log(`${hourDiff}:0${minsDiff} hours before the start`);
        } else {
            console.log(`${hourDiff}:${minsDiff} hours before the start`);
        }
    } else if (diff > -60) {
        console.log("Late");
        console.log(`${Math.abs(diff)} minutes after the start`);
    } else if (diff <= -60) {
        hourDiff = Math.trunc(diff / 60);
        minsDiff = diff % 60;
        console.log("Late");
        if (minsDiff > -10) {
            console.log(`${Math.abs(hourDiff)}:0${Math.abs(minsDiff)} hours after the start`);
        } else {
            console.log(`${Math.abs(hourDiff)}:${Math.abs(minsDiff)} hours after the start`)
        }
    }
}

onTimeForTheExam(["9", "00", "10", "9"]);