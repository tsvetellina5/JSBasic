function hotelRoom (input){
    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch(month){
        case "May":
        case "October":
            studioPrice = 50*nights;
            if (nights> 7 && nights<=14){
                studioPrice*=0.95;
            } else if (nights>14) {
                studioPrice*=0.7;
            }
            apartmentPrice = 65*nights;
            if(nights>14){
                apartmentPrice*=0.9;
            } 
        break;
        case "June":
        case "September":
            studioPrice = 75.2*nights;
            if (nights>14){
                studioPrice*=0.8;
            }
            apartmentPrice = 68.7*nights;
            if(nights>14){
                apartmentPrice*=0.9;
            }
        break; 
        case "July":
        case "August":
            studioPrice = 76*nights;
            apartmentPrice = 77*nights;
            if(nights>14){
                apartmentPrice*=0.9;
            }
        break;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["May","15"]);