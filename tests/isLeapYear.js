/* eslint-disable */ 


        const {isLeapYear} = require("../functions/isLeapYear"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}

/**
 * Test function for isLeapYear.
 */
function testIsLeapYear() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "isLeapYear";

    function expect(testValue, expectedValue) {
        if (testValue === expectedValue) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    }

    try {
        expect(isLeapYear(2000), true);
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        expect(isLeapYear(2020), true);
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        expect(isLeapYear(2100), false);
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        expect(isLeapYear(-2000), false);
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        expect(isLeapYear("hello"), false);
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        expect(isLeapYear(22.5), false);
    } catch (err) {
        numberOfTestsFailed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testIsLeapYear
};