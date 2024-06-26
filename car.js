
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;  
    }
    honk(){
        return "Beep";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
    
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!"
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(vehicle) {
        if (this.vehicle.length === this.capacity) {
            console.log("Sorry, we're full.")
        }
        else if (vehicle instanceof Vehicle) {
            this.vehicles.push(vehicle);
            console.log(`${vehicle.make} added!`);
        }
        else {
            console.log("Only vehicles are allowed in here!")
        }
    }
}