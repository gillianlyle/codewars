const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft * mpg >= distanceToPump ? true : false;
 };

 console.log(zeroFuel(50,2,25)) // true
 console.log(zeroFuel(49,2,25)) // true
 console.log(zeroFuel(51,2,25)) // false