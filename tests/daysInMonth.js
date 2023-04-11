/* eslint-disable */ 


        const {daysInMonth} = require("../functions/daysInMonth"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Tests the daysInMonth function for valid inputs and expected outputs.
 */
function testDaysInMonth() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "daysInMonth";

    try {
        // Test for February with leap year
        const result1 = daysInMonth(2020, 2);
        if(result1 === 29) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    } 

    try {
        // Test for February without leap year
        const result2 = daysInMonth(2021, 2);
        if (result2 === 28) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch(err) {
        numberOfTestsFailed++;
    }
  
    try {
        // Test for a month with 30 days
        const result3 = daysInMonth(2021, 4);
        if (result3 === 30) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch(err) {
        numberOfTestsFailed++;
    }

    try {
        // Test for a month with 31 days
        const result4 = daysInMonth(2021, 7);
        if (result4 === 31) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch(err) {
        numberOfTestsFailed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testDaysInMonth
};