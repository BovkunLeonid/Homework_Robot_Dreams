class Vehicle {
    constructor(height, width, weight, color) {
        this.height = height;
        this.width = width;
        this.weight = weight;
        this.color = color;
    }

    getHeight(){
       return this.height + ' mm';
    }

    getWidth(){
        return this.width + ' mm';
    }

    getWeight(){
        return this.weight + ' kg';
    }

    getColor(){
        return this.color;
    }
}

class Car extends Vehicle {
    constructor(height, width, weight, color, doors, passangers){
        super(height, width, weight, color);
        this.doors = doors;
        this.passangers = passangers; 
    }

    numberOfDoors() {
        return this.doors + ' piece';
    }

    getMaxPassangers() {
        return this.passangers + ' a person';
    }
}

class Bike extends Vehicle {
    constructor(height, width, weight, color, wheels){
        super(height, width, weight, color);
        this.wheels = wheels;
    }
    getNumberOfWheels() {
        return this.wheels + ' piece';
    }
}

let audi = new Car(1500, 4500, 2000, 'red', 2, 4);
let xiaomi = new Bike(700, 800, 30, 'green', 2);

console.log(audi);
console.log(xiaomi);