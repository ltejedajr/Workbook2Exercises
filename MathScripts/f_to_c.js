// "use strict";

// // input
// var fahrenheitTemperature = 75

// // calculations
// var celsiusTemperature =  (fahrenheitTemperature - 32) * 5/9;

// // output
// console.log(fahrenheitTemperature + " degrees Fahrenheit is equal to " + celsiusTemperature.toFixed(2) + " degrees Celsius. ");

function convertFtoC(fahrenheitTemperature) {
    let celsiusTemperature =  (fahrenheitTemperature - 32) * 5/9;
    return celsiusTemperature;
}

    let fahrenheitTemperature = 92;
    let celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = 212;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = 90;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = 72;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = 32;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = 0;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");

    fahrenheitTemperature = -40;
    celsiusTemperature = convertFtoC(fahrenheitTemperature);
    console.log(fahrenheitTemperature + " degrees Fahrenheit is " + celsiusTemperature.toFixed(2) + " degress Celsius.");