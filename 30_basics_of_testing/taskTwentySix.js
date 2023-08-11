// HomeTask 26 function

function Accumulator (number) {
    this.number = number;
    this.increment = function() {
        return this.number += 1;
    },
    this.decrement = function() {
        return this.number -= 1;
    }
}  

const accumVarta = new Accumulator(100);

function CancelableAccumulator(number) {
    Accumulator.call(this, number);
    this.numberStart = number;
    this.clear = function() {
       return this.number = this.numberStart;
    } 
}

CancelableAccumulator.prototype = Accumulator.prototype;

let accumDuracell = new CancelableAccumulator(150);

module.exports = {accumVarta, accumDuracell};