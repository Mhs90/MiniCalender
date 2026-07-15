const changeBtnEl = document.querySelector(".btn");
const monthEl = document.querySelector(".month");
const dayEl = document.querySelector(".day");
const whichDayEl = document.querySelector(".whichDay");
const yearEl = document.querySelector(".year");
let isSolar = false;
const date = new Date();
const WhichDay = date.getDay();
const Year = date.getYear();
const Day = date.getDate();
const Month = date.getMonth();
const solarYear = new Intl.DateTimeFormat('fa-IR-u-nu-arabext', {
    year: 'numeric',
}).format(new Date());
const solarMonth = new Intl.DateTimeFormat('fa-IR-u-nu-latn', {
    month: 'numeric',
}).format(new Date());
const solarDay = new Intl.DateTimeFormat('fa-IR-u-nu-arabext', {
    day: 'numeric',
}).format(new Date());
function monthSwitch() {
    switch (Month) {
        case 0:
            monthEl.textContent = "January"
            break;
        case 1:
            monthEl.textContent = "February"
            break;
        case 2:
            monthEl.textContent = "March"
            break;
        case 3:
            monthEl.textContent = "April"
            break;
        case 4:
            monthEl.textContent = "May"
            break;
        case 5:
            monthEl.textContent = "June"
            break;
        case 6:
            monthEl.textContent = "July"
            break;
        case 7:
            monthEl.textContent = "August"
            break;
        case 8:
            monthEl.textContent = "September"
            break;
        case 9:
            monthEl.textContent = "October"
            break;
        case 10:
            monthEl.textContent = "November"
            break;
        case 11:
            monthEl.textContent = "December"
            break;
        default:
            break;
    }
}
function whichDaySwitch() {
    switch (WhichDay) {
        case 0:
            whichDayEl.textContent = "Sunday"
            break;
        case 1:
            whichDayEl.textContent = "Monday"
            break;
        case 2:
            whichDayEl.textContent = "Tuesday"
            break;
        case 3:
            whichDayEl.textContent = "Wednesday"
            break;
        case 4:
            whichDayEl.textContent = "Thursday"
            break;
        case 5:
            whichDayEl.textContent = "Friday"
            break;
        case 6:
            whichDayEl.textContent = "Saturday"
            break;
        default:
            break;
    }
}
monthSwitch();
whichDaySwitch();
dayEl.textContent = Day;
yearEl.textContent = Number(Year) + 1900;

const btnClickHandler = () => {
    if (!isSolar) {
        switch (Number(solarMonth)) {
            case 1:
                monthEl.textContent = "فروردین"
                break;
            case 2:
                monthEl.textContent = "اردیبهشت"
                break;
            case 3:
                monthEl.textContent = "خرداد"
                break;
            case 4:
                monthEl.textContent = "تیر"
                break;
            case 5:
                monthEl.textContent = "مرداد"
                break;
            case 6:
                monthEl.textContent = "شهرویور"
                break;
            case 7:
                monthEl.textContent = "مهر"
                break;
            case 8:
                monthEl.textContent = "آبان"
                break;
            case 9:
                monthEl.textContent = "آذر"
                break;
            case 10:
                monthEl.textContent = "دی"
                break;
            case 11:
                monthEl.textContent = "بهمن"
                break;
            case 12:
                monthEl.textContent = "اسفند"
                break;
            default:
                break;
        }
        switch (whichDayEl.textContent) {
            case 'Sunday':
                whichDayEl.textContent = "یک شنبه"
                break;
            case "Monday":
                whichDayEl.textContent = "دوشنبه"
                break;
            case 'Tuesday':
                whichDayEl.textContent = "سه شنبه"
                break;
            case "Wednesday":
                whichDayEl.textContent = "چهارشنبه"
                break;
            case "Thursday":
                whichDayEl.textContent = "پنجشنبه"
                break;
            case 'Friday':
                whichDayEl.textContent = "جمعه"
                break;
            case 'Saturday':
                whichDayEl.textContent = "شنبه"
                break;
            default:
                break;
        }
        dayEl.textContent = solarDay;

        yearEl.textContent = solarYear
        changeBtnEl.style.backgroundColor = "orangered";
        monthEl.style.backgroundColor = "orangered";
        changeBtnEl.textContent = "شمسی"
        isSolar = true;
    } else {
        monthSwitch()
        whichDaySwitch()
        dayEl.textContent = Day;
        yearEl.textContent = Number(Year) + 1900;
        changeBtnEl.style.backgroundColor = "#bab9cf";
        monthEl.style.backgroundColor = "#bab9cf";
        changeBtnEl.textContent = "solar"
        isSolar = false;
    }
}
changeBtnEl.addEventListener("click", btnClickHandler);
