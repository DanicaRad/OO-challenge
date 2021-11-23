class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep.';
    }
    toString() {
        return `The vehicle is a ${make} ${model} from ${year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year, numWheels);
        this.numWheels = 4;
    }

}

class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year, numWheels);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!';
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle) {
        if(this.vehicles.length >= Number(this.capacity)) {
            return `Sorry, we're full.`;
        }
        if(!(vehicle instanceof Vehicle)) {
            return 'Only vehicles allowed in here!';
        }
        this.vehicles.push(vehicle);
        return 'Vehicle added!';
    }
}