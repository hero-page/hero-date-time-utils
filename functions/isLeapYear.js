/* eslint-disable */ 

/**
 * Determines if a given year is a leap year.
 *
 * @param {number} year - The year to check.
 * @return {boolean} True if the year is a leap year, false otherwise.
 *
 * @example
 * // returns true
 * isLeapYear(2000);
 */
function isLeapYear(year) {
    if (typeof year !== "number" || !Number.isInteger(year) || year < 0) {
        return false;
    }

    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

module.exports = {
    isLeapYear
};