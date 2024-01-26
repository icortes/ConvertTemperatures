/**
 * LeetCode link: https://leetcode.com/problems/convert-the-temperature/description/
 *
 You are given a non-negative floating point number rounded to two decimal places Celsius, that denotes the temperature in Celsius.

 You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, Fahrenheit].

 Return the array ans. Answers within 10-5 of the actual answer will be accepted.

 Note that:

 Kelvin = Celsius + 273.15
 Fahrenheit = Celsius * 1.80 + 32.00


 Example 1:

 Input: Celsius = 36.50
 Output: [309.65000,97.70000]
 Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.

 Example 2:

 Input: Celsius = 122.11
 Output: [395.26000,251.79800]
 Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.


 Constraints:

 0 <= Celsius <= 1000
 */
function convertTemperature(celsius) {
  //create the array that will be returned
    let arr = [];

  //create variable to hold kelvin value
  //convert Celsius to kelvin
  // add it to the array
  let kelvin = celsius + 273.15;

  arr.push(kelvin);

  //create variable to hold Fahrenheit value
  //convert Celsius to Fahrenheit
  // add it to the array

  fahrenheit = (celsius * 9.0) / 5.0 + 32.0;

  arr.push(fahrenheit);
  //return the ans array
  return arr;
}

console.log(convertTemperature(150));

// to run javascript you must first be in the correct folder
//then you will type  " node 'nameOfFile.js' " in the console
//Example: node ConvertTemperature.js
