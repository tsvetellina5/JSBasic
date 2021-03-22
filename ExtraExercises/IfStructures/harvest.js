function harvest(input){
    let squareMeters = Number(input[0]);
    let grapesForMeter = Number(input[1]);
    let neededLitresWine = Number(input[2]);
    let workersCount = Number(input[3]);

    let grapesKg = squareMeters*grapesForMeter;
    let wine = 0.4*grapesKg/2.5;

    if (wine<neededLitresWine){
        console.log(`It will be a tough winter! More ${Math.floor(neededLitresWine-wine)} liters wine needed.`)
    } else {
        console.log(`Good harvest this year! Total wine: ${wine} liters.`);
        console.log(`${Math.ceil(wine-neededLitresWine)} liters left -> ${Math.ceil((wine-neededLitresWine)/workersCount)} liters per person.`);
    }

}

harvest(["650","2","175","3"]);


/*
От лозе с площ X квадратни метри се заделя 40% от 
реколтата за производство на вино. От 1 кв.м лозе се изкарват Y килограма грозде. 
За 1 литър вино са нужни 2,5 кг. грозде. Желаното количество вино за продан е Z литра.
Напишете програма, която пресмята колко вино може да се произведе и дали това количество 
е достатъчно. Ако е достатъчно, остатъкът се разделя по равно между работниците на лозето.

На конзолата трябва да се отпечата следното:
•	Ако произведеното вино е по-малко от нужното:
o	“It will be a tough winter! More {недостигащо вино} liters wine needed.”
	Резултатът трябва да е закръглен към по-ниско цяло число
•	Ако произведеното вино е повече от нужното:
o	“Good harvest this year! Total wine: {общо вино} liters.”
	Резултатът трябва да е закръглен към по-ниско цяло число
o	“{Оставащо вино} liters left -> {вино за 1 работник} liters per person.”
	И двата резултата трябва да са закръглени към по-високото цяло число

*/