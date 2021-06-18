let now = new Date();

// Displays "Last Modified" as date and time
document.querySelector("#lastmodified").textContent = document.lastModified;

// Displays the current year for copyright
document.querySelector("#theyear").textContent = now.getFullYear();





const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */




// For use in converting milliseconds to days
const DAYS_TO_MS = 1000 * 60 * 60 * 24;

// Obtain current time
let currentTime = now.getTime();

// If there is no "lastvisited" data in local storage, default it to current time
if(!localStorage.getItem('lastvisited')) {
  localStorage.setItem('lastvisited', currentTime);
}

// Store the last-visited time in a variable
let lastVisited = parseInt(localStorage.getItem('lastvisited'));

// Subtract current time with last-visited time and convert to days
let days = (currentTime - lastVisited) / DAYS_TO_MS;

// Display to the console how many days since last page visit
let visitMessage = "You last visited " + days.toFixed(0) + " days ago.";
let visitElement = document.querySelector(".lastvisited").innerHTML = visitMessage;

// Store current time in storage to be used the next time we refresh page
localStorage.setItem('lastvisited', currentTime);