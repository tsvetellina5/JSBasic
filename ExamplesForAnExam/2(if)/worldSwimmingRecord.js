function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let distanceTime = distance * timeForMeter;
    let resistanceTime = Math.floor(distance / 15) * 12.5;

    let totalTime = distanceTime + resistanceTime;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else if (totalTime >= record) {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
;