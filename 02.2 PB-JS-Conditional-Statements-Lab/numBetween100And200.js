//Да се напише функция, която получава цяло число, като аргумент и проверява, дали е под 100, между 100 и
//200 или над 200. Да се отпечатат съответно съобщения, като в примерите по-долу:

function numBetween100and200(input){
    let num = Number(input[0]);
    
    if (num<100){
        console.log("Less than 100")
    } else if (num>=100 && num<=200){
        console.log("Between 100 and 200")
    } else if (num>200) {
        console.log("Greater than 200")
    }
}
numBetween100and200(["95"]);