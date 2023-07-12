const mesContinue = 'Ви впевнені, що хочете продовжити операцію?';
const mesError = 'Error !!!';

let number1 = prompt('Hello! Напишіть перше число');
let number2 = prompt('Напишіть друге число');

let sum = +number1 + +number2;
let difference = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;

let actionNoDel = (`сума: ${sum};  різниця: ${difference};  множення: ${multiplication};  Помилка!!! на "0" не ділять.`);
let actionFull = (`сума: ${sum};  різниця: ${difference};  множення: ${multiplication};  дiлення: ${division}.`);

//Version 4.1
if (number1 === '' || number2 === '') {
    alert (mesError)
} else if (number2 == 0){
        alert (actionNoDel);
    } else if (number1 < number2) {
        if (confirm (mesContinue)) {
            alert (actionFull);
            }    
        } else {
                alert (actionFull);
        }

//Version 3.1
/*
if (number1 === '') {
    alert (mesError)
} else {
    if (number2 === '') {
        alert (mesError)
    } else {
        if (number2 == 0) {
            alert (actionNoDel);
        } else {
            if (number1 < number2) {
                if (confirm (mesContinue)) {
                 alert (actionFull);
                } 
            } else {
                 alert (actionFull);
            }
        }
    }
}
*/




