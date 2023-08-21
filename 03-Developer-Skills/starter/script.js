// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "23";
if (x === 23) console.log(23);
const calcAge = (birthYear) => 2037 - birthYear;

// ------ CODING CHALLENGE ------

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// DISPLAY A STRING WITH THESE TEMPERATURES
// CREATE FUNCTION PRINTFORECAST WHICH LOGS STRING
// DECLARE AN EMPTY STRING
// IN FUNCTION LOOP THROUGH ARR AND ADD TO STRING

const printForecast = (arr) => {
  let tempString = "...";
  for (let i = 0; i < arr.length; i++) {
    tempString += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log(tempString);
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
