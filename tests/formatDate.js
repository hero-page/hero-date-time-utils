/* eslint-disable */ 


        const {formatDate} = require("../functions/formatDate"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for formatDate.
 */
function testFormatDate() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "formatDate";

    // Test 1: Check correct date string format from a Date object
    try {
        const inputDate = new Date(2022, 0, 1);
        const format = "MMMM Do, YYYY";
        const expectedOutput = "January 1st, 2022";

        if (formatDate(inputDate, format) === expectedOutput) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 2: Check correct date string format from a Unix timestamp
    try {
        const inputDate = 1609459200000;
        const format = "MMMM Do, YYYY";
        const expectedOutput = "January 1st, 2021";

        if (formatDate(inputDate, format) === expectedOutput) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 3: Check correct handling of leap years and edge cases
    try {
        const inputDate = new Date(2000, 1, 29);
        const format = "MMMM Do, YYYY";
        const expectedOutput = "February 29th, 2000";

        if (formatDate(inputDate, format) === expectedOutput) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test 4: Check rejection of invalid Unix timestamp (negative)
    try {
        const inputDate = -1609459200000;
        const format = "MMMM Do, YYYY";

        formatDate(inputDate, format);
        number_of_tests_failed++;
    } catch (err) {
        number_of_tests_passed++;
    }

    // Test 5: Check rejection of invalid format string
    try {
        const inputDate = new Date(2022, 0, 1);
        const format = "MMMM Dz, YYYY";

        formatDate(inputDate, format);
        number_of_tests_failed++;
    } catch (err) {
        number_of_tests_passed++;
    }

    // Generate and add test badge to README
    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testFormatDate
};