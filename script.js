const form = document.getElementById('form');
const dayF = document.getElementById('dayF');
const monthF = document.getElementById('monthF');
const yearF = document.getElementById('yearF');
const outputDay = document.getElementById('output-day');
const outputMonth = document.getElementById('output-month');
const outputYear = document.getElementById('output-year');
const DATE = new Date;
let day = DATE.getDate();
let month = DATE.getMonth() + 1;
let year = DATE.getFullYear();
const monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputDayValue = dayF.value;
    const inputMonthValue = monthF.value;
    const inputYearValue = yearF.value;
    const dayExisted = monthList[inputMonthValue - 1] - inputDayValue ;
    if(inputYearValue > year){
        return alert('We are not in the future, buddy!');
    }
    if(dayExisted < 0) {
        return alert(`That day didn't exist, babe`);
    }  
    const birthDate = new Date(`${inputMonthValue}/${inputDayValue}/${inputYearValue}`);
    const birthDay = birthDate.getDate();
    const birthMonth = birthDate.getMonth() +1;
    const birthYear = birthDate.getFullYear();
    calculateDif(birthDay, birthMonth, birthYear); 
});

const cleanForm = () => {
    dayF.value = '';
    monthF.value = '';
    yearF.value = '';
};

const calculateDif = (dayF, monthF, yearF) => {
    let resultDay = dayF - day;
    let resultYear = (yearF - year) * -1; 
    countUp(resultDay, outputDay);
    if((monthF - month) <= 0) {
        const resultMonth = 10;
        console.log(resultMonth)
        countUp(resultMonth, outputMonth);
        resultYear++;
        countUp(resultYear, outputYear); 
    } else {
        const resultMonth = monthF - month;
        countUp(resultMonth, outputMonth);
        const resultYear = (yearF - year + 1) * -1; 
        countUp(resultYear, outputYear); 
    }
};

const countUp = (number, place) => {
    let actual = 0;
    let counter = setInterval(function () {
        actual++
        place.innerHTML = actual;
        if(actual === number) {
            clearInterval(counter);
        }
    }, 30);
};