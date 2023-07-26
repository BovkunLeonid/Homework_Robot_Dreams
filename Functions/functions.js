//  Task 1

let mySum;
let myDifference;
let myMultiplication;
let myDivision;

function checking(value) {
    if (value === 0 || value) {
        return true;
    } else {
        return false;
    }
}

function sum(number1, number2) {
    if (checking(number1) && checking(number2)) {
        mySum = number1 + number2;
        console.log(`Сума = ${mySum}`);
    } else {
        console.log('Error');
    }
}


function difference(number1, number2) {
    if (checking(number1) && checking(number2)) {
        myDifference = number1 - number2;
        console.log(`Різниця = ${myDifference}`);
    } else {
        console.log('Error');
    }
}

function multiplication(number1, number2) {
    if (checking(number1) && checking(number2)) {
        myMultiplication = number1 * number2;
        console.log(`Множення = ${myMultiplication}`);
    } else {
        console.log('Error');
    }
}

function division(number1, number2) {
    if (checking(number1) && checking(number2)) {
        myDivision = number1 / number2;
        console.log(`Ділення = ${myDivision}`);
    } else {
        console.log('Error');
    }
}

sum(1, 7);
difference(10, 10);
multiplication(10, 10);
division(72, 9);

//  Task 2

let myArray = [0.01, true, '', 58, 'abc', false, 777, '44', 0.007, 515];

let minElement = myArray[0];
let maxElement = myArray[0]; 

function minElementArray (abcArray) {
    let i = 0;
    while (i < abcArray.length) {
        if (typeof abcArray[i] == 'boolean' || abcArray[i] === '' || typeof abcArray[i] === 'string') {
        } else if (abcArray[i] < minElement) {
            minElement = abcArray[i]; 
        }
    i++;
    }     
}

function maxElementArray (abcArray) {
    for (let i = 0; i < abcArray.length; i++) {
        if (typeof abcArray[i] == 'boolean' || abcArray[i] === '' || typeof abcArray[i] === 'string') {
        } else if (abcArray[i] > maxElement) {
            maxElement = abcArray[i];
        }
    }
}

minElementArray(myArray);
maxElementArray(myArray);

console.log(`minElement = ${minElement}`);
console.log(`maxElement = ${maxElement}`);