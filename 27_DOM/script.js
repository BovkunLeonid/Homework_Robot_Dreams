const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');

const submitBtn = document.getElementById('submit');

const resultElementSum = document.getElementById('sum');
const resultElementDifference = document.getElementById('difference');
const resultElementMultiplication = document.getElementById('multiplication');
const resultElementDivision = document.getElementById('division');

submitBtn.onclick = function() {
    let mySum = Number(number1.value) + Number(number2.value);
    resultElementSum.textContent = mySum;
    if (mySum < 0) {
        resultElementSum.style.color = 'red';
        resultElementSum.style.opacity = '40%';
    } else if (mySum > 0 && mySum < 100) {
        resultElementSum.style.color = 'green';
        resultElementSum.style.opacity = '60%';
    } else {
        resultElementSum.style.color = 'green';
        resultElementSum.style.opacity = '100%';
        resultElementSum.style.fontWeight = 'bold';
    }

    let myDifference = Number(number1.value) - Number(number2.value);
    resultElementDifference.textContent = myDifference;
    if (myDifference < 0) {
        resultElementDifference.style.color = 'red';
        resultElementDifference.style.opacity = '40%';
    } else if (myDifference > 0 && myDifference < 100) {
        resultElementDifference.style.color = 'green';
        resultElementDifference.style.opacity = '60%';
    } else {
        resultElementDifference.style.color = 'green';
        resultElementDifference.style.opacity = '100%';
        resultElementDifference.style.fontWeight = 'bold';
    }

    let myMultiplication = Number(number1.value) * Number(number2.value);
    resultElementMultiplication.textContent = myMultiplication;
    if (myMultiplication < 0) {
        resultElementMultiplication.style.color = 'red';
        resultElementMultiplication.style.opacity = '40%';
    } else if (myMultiplication > 0 && myMultiplication < 100) {
        resultElementMultiplication.style.color = 'green';
        resultElementMultiplication.style.opacity = '60%';
    } else {
        resultElementMultiplication.style.color = 'green';
        resultElementMultiplication.style.opacity = '100%';
        resultElementMultiplication.style.fontWeight = 'bold';
    }

    let myDivision = Number(number1.value) / Number(number2.value);
    resultElementDivision.textContent = myDivision;
    if (myDivision < 0) {
        resultElementDivision.style.color = 'red';
        resultElementDivision.style.opacity = '40%';
    } else if (myDivision > 0 && myDivision < 100) {
        resultElementDivision.style.color = 'green';
        resultElementDivision.style.opacity = '60%';
    } else {
        resultElementDivision.style.color = 'green';
        resultElementDivision.style.opacity = '100%';
        resultElementDivision.style.fontWeight = 'bold';
    }
}

