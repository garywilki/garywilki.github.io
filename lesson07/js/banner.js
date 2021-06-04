const SUNDAY = 0;
const MONDAY = 1;
const TUESDAY = 2;
const WEDNESDAY = 3;
const THURSDAY = 4;
const FRIDAY = 5;
const SATURDAY = 6;

// Get the current date
let today = new Date();

// If the day of the week is Friday, display a banner
if (today.getDay() == FRIDAY) {
    document.querySelector('#banner').style.display = 'block';
}