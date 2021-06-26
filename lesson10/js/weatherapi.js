const APPID = "469b1c1cf44d0f2569a6456228c51854";
const PRESTONID = "5604473";
const UNITSID = "imperial";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + PRESTONID + "&appid=" + APPID + "&units=" + UNITSID;

console.log(apiURL);

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });