/* eslint-disable */ 


        const {calculateDifference} = require("../functions/calculateDifference"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}
/**
 * Test for the calculateDifference function
 */
function testCalculateDifference() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "calculateDifference";

    try {
        const date1 = new Date(2021, 10, 1);
        const date2 = new Date(2021, 10, 5);
        const expectedResult = 4;
        const result = calculateDifference(date1, date2, "days");
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const date1 = new Date(2021, 10, 1);
        const date2 = new Date(2021, 10, 5);
        const expectedResult = 96;
        const result = calculateDifference(date1, date2, "hours");
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const date1 = new Date(2021, 10, 1);
        const date2 = 1635724800000; // Unix timestamp equivalent to 2021-11-01T00:00:00.000Z
        const expectedResult = 0;
        const result = calculateDifference(date1, date2, "days");
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const date1 = new Date(2022, 5, 1);
        const date2 = new Date(2021, 5, 1);
        const expectedResult = 1;
        const result = calculateDifference(date1, date2, "years");
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const date1 = new Date(2022, 0, 1);
        const date2 = new Date(2021, 11, 31);
        const expectedResult = -1;
        const result = calculateDifference(date1, date2, "days");
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testCalculateDifference
};
