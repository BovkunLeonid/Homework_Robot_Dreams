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