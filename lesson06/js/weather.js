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


let highTemp = parseFloat(document.getElementById("weather-high").innerText);
let windSpeed = parseFloat(document.getElementById("weather-windspeed").innerText);

let chill = windChill(highTemp, windSpeed);

if (chill) {
    chillText = chill.toFixed(2) + " F";
}
else {
    chillText = "N/A";
}

document.getElementById("weather-windchill").innerText = chillText;