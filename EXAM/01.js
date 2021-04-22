function excursion(input) {

    let people = Number(input[0]);
    let nights = Number(input[1]);
    let transport = Number(input[2]);
    let museums = Number(input[3]);

    let priceNights = nights * 20;
    let priceTransport = transport * 1.6;
    let priceMuseum = museums * 6;
    let midSum = people*(priceMuseum + priceNights + priceTransport);

    let totalSum = midSum * 1.25;

    console.log(`${totalSum.toFixed(2)}`);
}

excursion(["20",
    "14",
    "30",
    "6"])
