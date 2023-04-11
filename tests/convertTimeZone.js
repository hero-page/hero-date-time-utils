/* eslint-disable */ 


        const {convertTimeZone} = require("../functions/convertTimeZone"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Function to test the convertTimeZone function.
 */
function testConvertTimeZone() {
    const name_of_function = "convertTimeZone";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    try {
        const inputDate = new Date("2022-01-01T00:00:00Z");
        const outputDate = new Date("2022-01-01T01:00:00.000Z");
        const result = convertTimeZone(inputDate, 0, 60);
        if (result.getTime() === outputDate.getTime()) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const inputTimestamp = 1672444800; // 2023-01-01T00:00:00Z
        const outputDate = new Date("2023-01-01T02:00:00.000Z");
        const result = convertTimeZone(inputTimestamp, 60, 180);
        if (result.getTime() === outputDate.getTime()) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const inputDate = new Date("2022-01-01T00:00:00Z");
        const result = convertTimeZone(inputDate, "invalid", 60);
        number_of_tests_failed++;
    } catch (err) {
        number_of_tests_passed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testConvertTimeZone
};