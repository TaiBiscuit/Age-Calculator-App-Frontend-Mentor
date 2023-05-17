const form = document.getElementById('form');
const dayF = document.getElementById('dayF');
const monthF = document.getElementById('monthF');
const yearF = document.getElementById('yearF');
const outputDay = document.getElementById('output-day');
const outputMonth = document.getElementById('output-month');
const outputYear = document.getElementById('output-year');
const outputs = document.querySelectorAll('.inpQue');
const spansReq = document.querySelectorAll('.spanReq');
//SPAN
const spanM = document.getElementsByClassName('spanMonth');
const spanY = document.getElementsByClassName('spanYear');
const spanD = document.getElementsByClassName('spanDay');
const spanDate = document.getElementsByClassName('spanDate');


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
    const inputs = [inputDayValue, inputMonthValue, inputYearValue];
    const dayExisted = monthList[inputMonthValue - 1] - inputDayValue ;
    let counter = 0;

    for(let i = 0; i < inputs.length; i++) {
        if (inputs[i] == "") {
            outputs[i].classList.remove('unfilled');
            spansReq[i].classList.remove('hide');
            } else {
                counter++
            }
    }

    if(counter == 3) {
        const birthDate = new Date(`${inputMonthValue}/${inputDayValue}/${inputYearValue}`);
        const birthDay = birthDate.getDate();
        const birthMonth = birthDate.getMonth() +1;
        const birthYear = birthDate.getFullYear();

        if(inputYearValue > year) {
            yearF.classList.remove('unfilled');
            spanY.classList.remove('hide');
        }

        if(inputMonthValue > month) {
            monthF.classList.remove('unfilled');
            return console.log('Enter a valid Month!');
        }

        if(inputDayValue > day) {
            dayF.classList.remove('unfilled');   
            return console.log('Enter a valid day');
        }

        if(dayExisted < 0) {
            const hasIt = dayF.classList.contains('unfilled');
            inputDay[0].classList.remove('unfilled') 
            return console.log('nope')
        };
        calculateDif(birthDay, birthMonth, birthYear); 
    };
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


/*
    for(let i = 0; i < outputs.length; i++){
        if(outputs[i].value.length == 0){
            outputs[i].classList.remove('unfilled');
        } else {
            outputs[i].classList.add('unfilled');
            const birthDate = new Date(`${inputMonthValue}/${inputDayValue}/${inputYearValue}`);
            const birthDay = birthDate.getDate();
            const birthMonth = birthDate.getMonth() +1;
            const birthYear = birthDate.getFullYear();
            calculateDif(birthDay, birthMonth, birthYear); 
        }
    } 
*/