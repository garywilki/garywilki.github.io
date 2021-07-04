/* windChill(tempF, speed)
*Input: Temperature (in Fahrenheit) and Wind Speed (in MPH)
*Processing: Uses the NWS Windchill Temperature Index to compute the wind chill.
*   NOTE: Windchill Temperature is only defined for temperatures at or below 50 degrees F and wind speeds above 3 mph.
*Output: The wind chill index
*/
function windChill(tempF, speed) {
    // Check for valid input per NWS WCT Index specifications, then return the computed index
    if (tempF <= 50 && speed > 3) {
        return 35.74 + 0.6215 * tempF - 35.75 * (speed ** 0.16) + 0.4275 * tempF * (speed ** 0.16);
    }
    return undefined; // Formula is undefined if parameters do not match required values
}

const APPID = "469b1c1cf44d0f2569a6456228c51854";
const PRESTONID = "5604473";
const SODASPRINGSID = "5607916";
const FISHHAVENID = "5585010";
const UNITSID = "imperial";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + PRESTONID + "&appid=" + APPID + "&units=" + UNITSID;
const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + PRESTONID + "&appid=" + APPID + "&units=" + UNITSID;

let cityName = ["preston","sodasprings","fishhaven"];
let cityID = [PRESTONID,SODASPRINGSID,FISHHAVENID];

for (let i = 0; i < cityID.length; i++) {

    let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityID[i] + "&appid=" + APPID + "&units=" + UNITSID;
    let apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID[i] + "&appid=" + APPID + "&units=" + UNITSID;

    console.log(apiURL);

    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            let description = jsObject.weather[0].description;
            let currentTemp = parseFloat(jsObject.main.temp);
            let humidity = parseFloat(jsObject.main.humidity);
            let windSpeed = parseFloat(jsObject.wind.speed);

            document.querySelector("#" + cityName[i] + "-weather-currently").innerText = description;
            document.querySelector("#" + cityName[i] + "-weather-temp").innerText = currentTemp.toFixed(2);
            document.querySelector("#" + cityName[i] + "-weather-humidity").innerText = humidity.toFixed(0);
            document.querySelector("#" + cityName[i] + "-weather-windspeed").innerText = windSpeed.toFixed(2);

            let chill = windChill(currentTemp, windSpeed);

            if (chill) {
                chillText = chill.toFixed(2) + " F";
            }
            else {
                chillText = "N/A";
            }

            document.querySelector("#" + cityName[i] + "-weather-windchill").innerText = chillText;
        });

    fetch(apiForecastURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            let forecasts = jsObject.list;
            let temperatures = []
            let icons = []

            for (let forecast of forecasts) {
                if (forecast.dt_txt.includes("18:00:00")) {
                    let imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
                    icons.push(imagesrc);
                    temperatures.push(forecast.main.temp);
                }
            }

            document.querySelector("." + cityName[i] + "-forecast-day1").innerText = temperatures[0] + " F";
            document.querySelector("." + cityName[i] + "-forecast-day2").innerText = temperatures[1] + " F";
            document.querySelector("." + cityName[i] + "-forecast-day3").innerText = temperatures[2] + " F";
            document.querySelector("." + cityName[i] + "-forecast-day4").innerText = temperatures[3] + " F";
            document.querySelector("." + cityName[i] + "-forecast-day5").innerText = temperatures[4] + " F";

            document.querySelector("." + cityName[i] + "-icon-day1").setAttribute('src', icons[0]);
            document.querySelector("." + cityName[i] + "-icon-day2").setAttribute('src', icons[1]);
            document.querySelector("." + cityName[i] + "-icon-day3").setAttribute('src', icons[2]);
            document.querySelector("." + cityName[i] + "-icon-day4").setAttribute('src', icons[3]);
            document.querySelector("." + cityName[i] + "-icon-day5").setAttribute('src', icons[4]);

        }
    );
}