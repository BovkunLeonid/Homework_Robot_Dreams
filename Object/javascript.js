// Task 1

let user0 = {};

function audit(objektAudit) {
    for (const key in objektAudit){
        console.log(objektAudit);
    }
    console.log(`Обєкт пустий`);
}

audit(user0);

// Task 2

let user = {
    name: "Nastya",
    age: 10,
    sayHello: function() {
        console.log(`Привіт, я ${this.name}, мені ${this.age} років`);
    }
};

user.sayHello();

// Task 3

let calc = {
    number1: 0,
    number2: 0,
    mySum: 0,
    myMul: 0,
    ask: function() {
        this.number1 = +prompt('Hello! Напишіть перше число'),
        this.number2 = +prompt('Hello! Напишіть друге число')     
    },
    checking: function (value) {
        if (typeof value === 'number' && !isNaN(value)) {
            return true;
        } else {
            alert(`Error! Введіть коректні числа.`);
            return false;
        }
    },
    sum: function () {
        if (this.checking(this.number1) && this.checking(this.number2)) {
            this.mySum = this.number1 + this.number2;
            alert(`Сума = ${this.mySum}`);
        } 
    },
    mul: function () {
        if (this.checking(this.number1) && this.checking(this.number2)) {
            this.myMul = this.number1 * this.number2;
            alert(`Добуток = ${this.myMul}`);
        }
    }
};

calc.ask();
calc.sum();
calc.mul();