const monthEl = document.querySelector(".month");
const dayEl = document.querySelector(".day");
const whichDayEl = document.querySelector(".whichDay");
const yearEl = document.querySelector(".year");

const date = new Date();
const WhichDay = date.getDay();
const Year = date.getYear();
const Day = date.getDate();
const Month = date.getMonth();
//month
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
//whichDay
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
        break;whichDayEl
    default:
        break;
}
//day
dayEl.textContent = Day;
//year
yearEl.textContent = Number(Year) + 1900;