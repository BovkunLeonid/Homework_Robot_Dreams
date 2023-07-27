// Task 1

function Accumulator (number) {
    this.number = number,
    this.increment = function() {
        this.number += 1;
    },
    this.decrement = function() {
        this.number -= 1;
    }
} 

const accum1 = new Accumulator (100);

accum1.increment();
console.log(accum1.number);

// Task 2 version 1

function CancelableAccumulator (number) {
    this.number = number,
    this.numberStart = number,
    this.clear = function() {
        this.number = this.numberStart;
    },
    this.increment = function() {
        this.number += 1;
    },
    this.decrement = function() {
        this.number -= 1;
    }
} 

const accum2 = new CancelableAccumulator (100);

accum2.decrement();
console.log(accum2.number);
accum2.clear();
console.log(accum2.number);























// Task 2 version 2

// Accumulator.prototype.clear = function() {
//     this.number = this.numberStart;
// }
// accum1.increment();
// accum1.increment();
// accum1.increment();
// accum1.increment();
// accum1.increment();
// accum1.increment();
// accum1.increment();
// console.log(accum1.number); 
// accum1.clear();
// console.log(accum1.number); 