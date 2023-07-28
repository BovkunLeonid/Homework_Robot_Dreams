// Task 1

function Accumulator (number) {
    this.number = number;
    this.increment = function() {
        this.number += 1;
    },
    this.decrement = function() {
        this.number -= 1;
    }
} 

const accumVarta = new Accumulator(100);

accumVarta.increment();
console.log(accumVarta.number);

accumVarta.decrement();
console.log(accumVarta.number);

// Task 2 

function CancelableAccumulator(number) {
    Accumulator.call(this, number);
    this.numberStart = number;
    this.clear = function() {
        this.number = this.numberStart;
    } 
}

CancelableAccumulator.prototype = Accumulator.prototype;

let accumDuracell = new CancelableAccumulator(150);

accumDuracell.increment();
accumDuracell.increment();
accumDuracell.increment();
accumDuracell.increment();
accumDuracell.increment();

console.log(accumDuracell.number);

accumDuracell.clear();

console.log(accumDuracell.number);