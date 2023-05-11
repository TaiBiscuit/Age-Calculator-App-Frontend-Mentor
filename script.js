const form = document.getElementById('form');
const dayF = document.getElementById('dayF');
const monthF = document.getElementById('monthF');
const yearF = document.getElementById('yearF');
const outputDay = document.getElementById('output-day');
const outputMonth = document.getElementById('output-month');
const outputYear = document.getElementById('output-year');

const inputDay = document.getElementsByClassName('dayF');
const inputMonth = document.getElementsByClassName('monthF');
const inputYear = document.getElementsByClassName('yearF');
const outputs = document.querySelectorAll('.inpQue');


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

    for(let i = 0; i < outputs.length; i++){
        if(outputs[i].value.length == 0){
            console.log(outputs[i].value.length)
            outputs[i].classList.remove('unfilled');
        } else {
            const birthDate = new Date(`${inputMonthValue}/${inputDayValue}/${inputYearValue}`);
            const birthDay = birthDate.getDate();
            const birthMonth = birthDate.getMonth() +1;
            const birthYear = birthDate.getFullYear();
            calculateDif(birthDay, birthMonth, birthYear); 
        }
    } 
    if(inputYearValue > year){
        inputYear[0].classList.remove('unfilled');
    }

    if(dayExisted < 0) {
        const hasIt = dayF.classList.contains('unfilled');
        inputDay[0].classList.remove('unfilled') 
        console.log(inputDay[0].classList)
        return console.log('nope')
    } 
});

const cleanForm = () => {
    dayF.value = '';
    monthF.value = '';
    yearF.value = '';
};

const calculateDif = (dayF, monthF, yearF) => {
    let resultDay = day;
    let resultYear = (yearF - year) * -1; 
    let resultMonth = 0;
    if((monthF - month) < 0) {
        resultMonth = (monthF - month) * -1;
        countUp(resultDay, outputDay);
        countUp(resultMonth, outputMonth);
        countUp(resultYear, outputYear); 
    } else if((monthF - month == 0)){
        console.log(dayF)
        resultDay = dayF;
        resultMonth = 1;
        countUp(resultDay, outputDay);
        countUp(resultMonth, outputMonth);
        countUp(resultYear, outputYear); 
    } else {
        resultMonth = (12 - monthF + month);
        resultYear--;
        countUp(resultDay, outputDay);
        countUp(resultMonth, outputMonth);
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