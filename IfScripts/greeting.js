"use strict";

let currentHour = 1659;
let greeting;

if (currentHour <= 1000) {
    greeting = "Good Morning!";
}

else if (currentHour >= 1700) {
    greeting = "Good Evening!";
}

else {
    greeting = "Good Day!";
}

console.log(greeting)