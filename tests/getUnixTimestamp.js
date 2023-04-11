/* eslint-disable */ 


        const {getUnixTimestamp} = require("../functions/getUnixTimestamp"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for the getUnixTimestamp function
 */
function testGetUnixTimestamp() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "getUnixTimestamp";

    // Test with valid positive Date
    try {
        const date1 = new Date("2022-09-22T14:30:00");
        const expectedResult1 = 1632408600000;
        const result1 = getUnixTimestamp(date1);
        if (result1 === expectedResult1) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test with valid Date with 0 Unix timestamp
    try {
        const date2 = new Date(0);
        const expectedResult2 = 0;
        const result2 = getUnixTimestamp(date2);
        if (result2 === expectedResult2) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test with negative Date (rejected)
    try {
        const date3 = new Date(-1000);
        const expectedResult3 = null;
        const result3 = getUnixTimestamp(date3);
        if (result3 === expectedResult3) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    // Test with non-Date input (rejected)
    try {
        const nonDate = "not a date";
        const expectedResult4 = null;
        const result4 = getUnixTimestamp(nonDate);
        if (result4 === expectedResult4) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testGetUnixTimestamp
};