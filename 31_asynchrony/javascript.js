const button = document.getElementById('button');
const timeСard = document.querySelector('.time-card');
const error = document.querySelector('.error');
const dateСart = document.querySelector('.date-cart');
const containerWrap = document.getElementsByClassName('container-wrap')[0];

let timeSecondsEl = document.querySelector('.time-seconds');
let timeMinutesEl = document.querySelector('.time-minutes');
let timeHoursEl = document.querySelector('.time-hours');
let timeDayEl = document.querySelector('.time-day');

let toDate;
let yearToday;
let monthToday;
let dayToday;
let dayTodayDash;
let miliToDay;

function dateChangeToday() {
    toDate = new Date();
    dayToday = toDate.getDate();
    monthToday = toDate.getMonth() + 1;
    yearToday = toDate.getFullYear();
    dayTodayDash = yearToday + dash +  monthToday + dash + dayToday;
    miliToDay = Date.now();
};

let dateEntered;
let birthDay;
let birthMonth;
let birthYear;
let dash = '-';
let dateEnteredSplit;

function dateChangeBirth() {
    dateEntered = document.getElementById('date-birth').value;
    dateEnteredSplit = dateEntered.split(dash);
    birthDay = dateEnteredSplit[2];
    birthMonth = dateEnteredSplit[1];
    birthYear = dateEnteredSplit[0];
};

let thisYear;

function changeOfYear() {
    thisYear = yearToday + dash +  birthMonth + dash + birthDay;
};

let thisNextYear;

function changeOfNextYear() {
    thisNextYear = (yearToday + 1) + dash +  birthMonth + dash + birthDay;
};

let nextBirthday;

function fnNextBirthday() {
    if (Date.parse(dayTodayDash) > Date.parse(thisYear)) {
        nextBirthday = thisNextYear;
    } else {
        nextBirthday = thisYear;
    } 
};

function fnSwitchDateCounter() {
    if (timeСard.classList.contains('display-none')) {
        timeСard.classList.remove('display-none'); 
        dateСart.classList.add('display-none');
        button.textContent = 'Хочу знову!';
        containerWrap.classList.add('big-height');
    } else {
        timeСard.classList.add('display-none');
        dateСart.classList.remove('display-none'); 
        button.textContent = 'та натисни на мени';
        containerWrap.classList.remove('big-height');
        location.reload();
    }
};

let seconds;
let minutes;
let hours;
let day;

function fnCounter() {
    seconds = (Date.parse(nextBirthday) - miliToDay);
    seconds = seconds / 1000;
};

function fnMinusSecond() {
    seconds = seconds - 1;
    seconds = Math.round(seconds);
    timeSecondsEl.textContent = `${seconds} секунд`;
    minutes = (seconds - 1) / 60;
    minutes = Math.round(minutes);
    timeMinutesEl.textContent = `${minutes} хвилин`;
    hours = (seconds - 1) / (60 * 60);
    hours = Math.round(hours);
    timeHoursEl.textContent = `${hours} годин`;
    day = (seconds - 1) / (60 * 60 * 24);
    day = Math.round(day);
    timeDayEl.textContent = `${day} днів`;
    if (isNaN(seconds)) {
        error.classList.remove('display-none');
    } else {
        setTimeout('fnMinusSecond()', 1000);
    }
};

button.addEventListener('click', () => { 
    dateChangeBirth();
    dateChangeToday();
    changeOfYear();
    changeOfNextYear();
    fnNextBirthday();
    fnCounter();
    fnSwitchDateCounter();
    fnMinusSecond();
});


// version 13.08.2023 16:50 з consol.log 

// const button = document.getElementById('button');
// const timeСard = document.querySelector('.time-card');
// const dateСart = document.querySelector('.date-cart');

// let timeSecondsEl = document.querySelector('.time-seconds');
// let timeMinutesEl = document.querySelector('.time-minutes');
// let timeHoursEl = document.querySelector('.time-hours');
// let timeDayEl = document.querySelector('.time-day');

// let toDate;
// let yearToday;
// let monthToday;
// let dayToday;
// let dayTodayDash;
// let miliToDay;

// function dateChangeToday() {
//     toDate = new Date();
//     dayToday = toDate.getDate();
//     console.log(`сьогодняшній день: ${dayToday}`); // відокремлення дня
//     monthToday = toDate.getMonth() + 1;
//     console.log(`сьогодняшній місяць: ${monthToday}`); // відокремлення місяця
//     yearToday = toDate.getFullYear();
//     console.log(`сьогодняшній рік: ${yearToday}`); // відокремлення рік
//     dayTodayDash = yearToday + dash +  monthToday + dash + dayToday;
//     console.log(`поточна дата в форматі Dash: ${dayTodayDash}`); // поточна дата в форматі Dash
//     console.log(`поточна дата в мілісікундах: ${Date.parse(dayTodayDash)}`);
//     miliToDay = Date.now();
//     console.log(`поточна мілісекунда: ${miliToDay}`);
// };

// let dateEntered;
// let birthDay;
// let birthMonth;
// let birthYear;
// let dash = '-';
// let dateEnteredSplit;

// function dateChangeBirth() {
//     dateEntered = document.getElementById('date-birth').value;
//     console.log(dateEntered); // введена дата
//     dateEnteredSplit = dateEntered.split(dash);
//     console.log(dateEnteredSplit); // контроль формата введеної дати без рисочок
//     birthDay = dateEnteredSplit[2];
//     console.log(`день народження: ${birthDay}`); // відокремлення дня
//     birthMonth = dateEnteredSplit[1];
//     console.log(`місяць народження: ${birthMonth}`); // відокремлення місяця
//     birthYear = dateEnteredSplit[0];
//     console.log(`рік народження: ${birthYear}`); // відокремлення року
// };

// let thisYear;

// function changeOfYear() {
//     thisYear = yearToday + dash +  birthMonth + dash + birthDay;
//     console.log(`дата народження в поточному році: ${thisYear}`); // дата народження в поточному році
//     console.log(`дата народження в м-х в поточному році: ${Date.parse(thisYear)}`);
// };

// let thisNextYear;

// function changeOfNextYear() {
//     thisNextYear = (yearToday + 1) + dash +  birthMonth + dash + birthDay;
//     console.log(`дата народження в наступному році: ${thisNextYear}`); // дата народження в наступному році
//     console.log(`дата народження в м-х в наступному році: ${Date.parse(thisNextYear)}`);
// };

// let nextBirthday;

// function fnNextBirthday() {
//     if (Date.parse(dayTodayDash) > Date.parse(thisYear)) {
//         nextBirthday = thisNextYear;
//         console.log(`святкування в 2024: ${thisNextYear}`); // святкування наступного дня народження
//         console.log(`святкування в 2024: ${nextBirthday}`); // святкування наступного дня народження
//     } else {
//         nextBirthday = thisYear;
//         console.log(`святкування в 2023: ${thisYear}`); // святкування наступного дня народження
//         console.log(`святкування в 2023: ${nextBirthday}`); // святкування наступного дня народження
//     } 
//     console.log(`святкування наступного дня народження: ${nextBirthday}`); // святкування наступного дня народження
// };

// function fnSwitchDateCounter() {
//     if (timeСard.classList.contains('display-none')) {
//         timeСard.classList.remove('display-none'); 
//         dateСart.classList.add('display-none');
//         button.textContent = 'Хочу знову!';  
//     } else {
//         timeСard.classList.add('display-none');
//         dateСart.classList.remove('display-none'); 
//         button.textContent = 'та натисни на мени';
//     }
// };

// let seconds;
// let minutes;
// let hours;
// let day;

// function fnCounter() {
//     seconds = (Date.parse(nextBirthday) - miliToDay) / 1000 ;
//     console.log(`кількість секунд до дня народження: ${seconds}`);
// };

// function fnMinusSecond() {
//     seconds = seconds - 1;
//     seconds = Math.round(seconds);
//     console.log(`кількість секунд до дня народження  в динаміці: ${seconds}`);
//     timeSecondsEl.textContent = `${seconds} секунд`;
//     minutes = (seconds - 1) / 60;
//     minutes = Math.round(minutes);
//     timeMinutesEl.textContent = `${minutes} хвилин`;
//     hours = (seconds - 1) / (60 * 60);
//     hours = Math.round(hours);
//     timeHoursEl.textContent = `${hours} годин`;
//     day = (seconds - 1) / (60 * 60 * 24);
//     day = Math.round(day);
//     timeDayEl.textContent = `${day} днів`;
//     setTimeout('fnMinusSecond()', 1000);
// };

// button.addEventListener('click', () => { 
//     dateChangeBirth();
//     dateChangeToday();
//     changeOfYear();
//     changeOfNextYear();
//     fnNextBirthday();
//     fnCounter();
//     fnSwitchDateCounter();
//     fnMinusSecond();
// });