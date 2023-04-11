/* eslint-disable */ 


        const {addTime} = require("../functions/addTime"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for addTime function.
 * @example
 * testAddTime();
 */
function testAddTime() {
    const name_of_function = "addTime";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    // Test 1: Add 5 minutes to the current date
    try {
        const currentDate = new Date();
        const newDate = addTime(currentDate, 5, 'minutes');
        if (newDate.getMinutes() === (currentDate.getMinutes() + 5) % 60) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 2: Add 1 year to a Unix timestamp
    try {
        const unixTimestamp = 1616589924000; // Unix timestamp for 2021-03-24 03:52:04
        const oneYearLater = new Date(1648125924000); // Unix timestamp for 2022-03-24 03:52:04
        const newDate = addTime(unixTimestamp, 1, 'years');
        if (newDate.getTime() === oneYearLater.getTime()) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 3: Add 90 days to a Date object
    try {
        const startDate = new Date("2021-06-15T00:00:00");   // Date for 2021-06-15 00:00:00
        const endDate = new Date("2021-09-13T00:00:00");     // Date for 2021-09-13 00:00:00 (90 days after)
        const newDate = addTime(startDate, 90, 'days');
        if (newDate.getTime() === endDate.getTime()) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 4: Check for exception when passing invalid time unit
    try {
        addTime(new Date(), 12, 'invalidUnit');
        number_of_tests_failed++;
    } catch (err) {
        number_of_tests_passed++;
    }

    // Test 5: Check for exception when passing non-integer value
    try {
        addTime(new Date(), 3.5, 'hours');
        number_of_tests_failed++;
    } catch (err) {
        number_of_tests_passed++;
    }

    // Update the README with the generated test badge
    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testAddTime
};