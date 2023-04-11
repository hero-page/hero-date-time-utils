/* eslint-disable */ 


        const {getDateFromUnix} = require("../functions/getDateFromUnix"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test cases for getDateFromUnix function
 *
 * @example
 * // Test getDateFromUnix with a mix of valid and invalid test cases
 * testGetDateFromUnix();
 */
function testGetDateFromUnix() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "getDateFromUnix";

    try {
        const unixTimestamp = 1627559818000;
        const expectedResult = new Date(1627559818000);
        const result = getDateFromUnix(unixTimestamp);
        if (result.toString() === expectedResult.toString()) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const unixTimestamp = -1627559818000;
        const result = getDateFromUnix(unixTimestamp);
        if (result === null) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const unixTimestamp = "1627559818000";
        const result = getDateFromUnix(unixTimestamp);
        if (result === null) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const unixTimestamp = 0;
        const expectedResult = new Date(0);
        const result = getDateFromUnix(unixTimestamp);
        if (result.toString() === expectedResult.toString()) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    addToReadme(
        generateTestBadge(
            nameOfFunction,
            numberOfTestsPassed,
            numberOfTestsFailed
        )
    );
}

module.exports = {
    testGetDateFromUnix
};