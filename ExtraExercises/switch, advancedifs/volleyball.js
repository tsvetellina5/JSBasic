function volleyball(input) {
    let year = input[0];
    let p = Number(input[1]);
    let h = Number(input[2]);
    //weekends - 48

    let weekendGamesInSofia = (48 - h) * 3 / 4;
    let weekendGamesInHisTown = h;
    let holidayGames = p * 2 / 3;
    let totalGames = weekendGamesInHisTown + weekendGamesInSofia + holidayGames;

    if (year === "leap") {
        totalGames *= 1.15;
    }

    console.log (Math.floor(totalGames));
}

volleyball(["leap", "5", "2"]);