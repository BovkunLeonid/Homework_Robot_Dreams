const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');

const submitBtn = document.getElementById('submit');

const resultElementSum = document.getElementById('sum');
const resultElementDifference = document.getElementById('difference');
const resultElementMultiplication = document.getElementById('multiplication');
const resultElementDivision = document.getElementById('division');

let mySum;
let myDifference;
let myMultiplication;
let myDivision;

let myArray = [];
let maxElement = 0;

function maxElementArray(abcArray) {
    maxElement = abcArray[0];
    for (let i = 0; i < abcArray.length; i++) {
        if (abcArray[i] > maxElement) {
            maxElement = abcArray[i];
        }
    }
};

let textStyle = function(result, element) {
    element.textContent = result;
    let opacity = (result / maxElement) * 100;
    if (opacity < 20) {
        element.style.opacity = '20%';
    } else { 
        element.style.opacity = `${opacity}%`;
    };
    if (result < 0) {
        element.style.color = 'red';
    } else {
        element.style.color = 'green';
    }
};

submitBtn.onclick = function() {
    mySum = Number(number1.value) + Number(number2.value);
    myDifference = Number(number1.value) - Number(number2.value);
    myMultiplication = Number(number1.value) * Number(number2.value);
    myDivision = Number(number1.value) / Number(number2.value);

    myArray[0] = mySum;
    myArray[1] = myDifference;
    myArray[2] = myMultiplication;
    myArray[3] = myDivision;

    maxElementArray(myArray);

    textStyle(mySum, resultElementSum);
    textStyle(myDifference, resultElementDifference);
    textStyle(myMultiplication, resultElementMultiplication);
    textStyle(myDivision, resultElementDivision);
};
