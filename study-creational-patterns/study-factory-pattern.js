class DiselEngine {}
class Car {
    constructor( options ) {
        this.doors = options.doors || 4;
        this.color = options.color || "White";
        this.engine = options.engine || new DiselEngine()
    }
}

class Truck {
    constructor( options ) {
        this.wheels = options.wheels || 6;
        this.color = options.color || "Blue";
    }
}

class VehicleFactory {}

VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = (options) => {
    switch (options.vehicleType){
        case "car":
            this.vehicleClass = Car;
            break;
        case "truck":
            this.vehicleClass = Truck;
            break;
    }
    return new this.vehicleClass(options);
}

let vehicleFactory = new VehicleFactory();

let car1 = vehicleFactory.createVehicle({
    vehicleType: "car",
    color: "green",
    doors: 5
});

console.log(`car1 instanceof Car: ${car1 instanceof Car}`);
console.log(car1)

let truck1 = vehicleFactory.createVehicle({
    vehicleType: "truck",
    color: "blue",
    wheels: 8
});

console.log(`truck1 instanceof Truck: ${truck1 instanceof Truck}`);
console.log(truck1)

