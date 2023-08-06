// 1
console.log(`____________Task 1___________`);

function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];   
    }
    let avg = sum / arr.length;
    return avg;
}
  
let numbers = [1, 2, 3, 4, 5];
  
let avg = calculateAverage(numbers);
console.log("The average is: " + avg); // має бути 3

//  2
console.log(`____________Task 2___________`);

function User(name, age) {
    this.name = name;
    this.age = age;
}
  
User.prototype.sayHello = function () {
    console.log(`Hi. My name is ${this.name} and I'm ${this.age} years old`);
};
  
const user = new User("Sherlock", 27);
user.sayHello(); // має вивести "Hi. My name is Sherlock and I'm 27 years old"
  
// 3 Variant A
console.log(`_______Task 3 variant A______`);

const calculator = function (init = 1) {
    return function () {
        return init++;
    };
};

const c = calculator();
console.log(c()); // має вивести 1
console.log(c()); // має вивести 2

// 3 Variant B 
console.log(`_______Task 3 variant B______`);

const calculatorB = function (init = 0) {
    return function () {
        return init++;
    };
};

const cB = calculatorB();
cB();
console.log(cB()); // має вивести 1
console.log(cB()); // має вивести 2