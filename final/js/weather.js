const APIKEY = "469b1c1cf44d0f2569a6456228c51854";
const LAT = "35.3733";
const LON = "-119.0187";
const EXCLUDE = "minutely,hourly";
const UNITS = "imperial";
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + LAT + "&lon=" + LON + "&exclude=" + EXCLUDE + "&appid=" + APIKEY + "&units=" + UNITS;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        if (document.querySelector(".index") != null) {

            let currentTemp = parseFloat(jsObject.current.temp);
            let description = jsObject.current.weather[0].description;
            let humidity = parseFloat(jsObject.current.humidity);

            document.querySelector("#weather-description").innerText = description;
            document.querySelector("#weather-temp").innerText = currentTemp;
            document.querySelector("#weather-humidity").innerText = humidity;

            for (let i=0; i < 3; i++) {
                document.querySelector("#forecast-" + (i+1) + "-temp").innerText = jsObject.daily[i].temp.day + " F";
            }
        }
    });