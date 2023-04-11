/* eslint-disable */ 


        const {startOfDay} = require("../functions/startOfDay"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for startOfDay.
 */
function testStartOfDay() {
    const name_of_function = "startOfDay";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    try {
        const inputDate = new Date("2021-08-01T08:00:00");
        const expectedOutput = new Date("2021-08-01T00:00:00");
        const startOfDayDate = startOfDay(inputDate);
        if (startOfDayDate.getTime() === expectedOutput.getTime()) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const inputTimestamp = 1627801200 * 1000; // represents "2021-08-01T08:00:00"
        const expectedOutput = new Date("2021-08-01T00:00:00");
        const startOfDayDate = startOfDay(inputTimestamp);
        if (startOfDayDate.getTime() === expectedOutput.getTime()) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const invalidInput = "invalid input";
        startOfDay(invalidInput);
        number_of_tests_failed++;
    } catch (err) {
        number_of_tests_passed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testStartOfDay
};