/* eslint-disable */ 


        const {endOfDay} = require("../functions/endOfDay"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Testing function for endOfDay. Takes no parameters and returns the results of the tests as a string
 */
function testEndOfDay() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "endOfDay";

    try {
        const inputDate = new Date("2021-10-10");
        const expectedResult = new Date("2021-10-10T23:59:59.999Z");
        const actualResult = endOfDay(inputDate);
        if (actualResult.getTime() === expectedResult.getTime()) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const inputTimestamp = 1594073337000; // "2020-07-06T17:08:57.000Z"
        const expectedResult = new Date("2020-07-06T23:59:59.999Z");
        const actualResult = endOfDay(inputTimestamp);
        if (actualResult.getTime() === expectedResult.getTime()) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const invalidInput = "Invalid date";
        endOfDay(invalidInput);
        numberOfTestsFailed++;
    } catch (err) {
        numberOfTestsPassed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testEndOfDay
};