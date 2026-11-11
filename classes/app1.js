class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brandName = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner", 17); // syntax for making object from a class // constructer invoked
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 15); // constructer invoked
console.log(lexus); 