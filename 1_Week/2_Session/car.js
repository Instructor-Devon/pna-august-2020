class Car {
    // what are things a car should HAVE?
    //      properties! (num_wheels, doors, breaks, speed, make, model)
    // what are things a car should DO?
    //      methods! (drive, honk)
    constructor(some_make, some_model, speed) {
        this.make = some_make;
        this.model = some_model;
        this.speed = speed;
        this.odometer = 0;
    }
    isFast() {
        return this.speed > 90;
    }
    drive(distance) {
        if(this.isFast()) {
            console.log("RACING DOWN THE STREET!")
        } else {
            console.log("Driving safely!")
        }
        this.odometer += distance;
    }
}


class Owner {
    constructor(name) {
        // String
        this.name = name;
        // Car
        this.car = null;
    }
    getACar(car) {
        this.car = car;
    }
}
var volvo = new Car("Volvo", "240", 85);
var dev = new Owner("Devon");
dev.getACar(volvo);
dev.car.drive();