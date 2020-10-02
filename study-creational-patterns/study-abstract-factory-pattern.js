class Car {
    constructor( options ) {
        this.doors = options.doors || 4;
        this.color = options.color || "White";
    }
}

class Truck {
    constructor( options ) {
        this.wheels = options.wheels || 6;
        this.color = options.color || "Blue";
    }
}

class AbstractVehicleFactory {
    constructor() {
        this.vehicleTypes = {};
    }
    registerVehicle = ( type, vehicle ) => {
        this.vehicleTypes[type] = vehicle;
        return this;
    }
    getVehicle = ( type, options ) => {
        let vehicle = this.vehicleTypes[type];
        if (vehicle){
            return new vehicle(options);
        }
        throw `No such vehicle (${type}) is available!`;
    }
}


let abstractVehicleFactory = new AbstractVehicleFactory();
abstractVehicleFactory.registerVehicle("car", Car)
                      .registerVehicle("truck", Truck);
let car1 = abstractVehicleFactory.getVehicle("car", {color: "green", doors: 5});

console.log(`car1 instanceof Car: ${car1 instanceof Car}`);
console.log(car1)

let truck1 = abstractVehicleFactory.getVehicle("truck" , {color: "blue", wheels: 8});

console.log(`truck1 instanceof Truck: ${truck1 instanceof Truck}`);
console.log(truck1)

