/* eslint-disable */ 

/**
 * Returns the number of days in the given month for the given year.
 *
 * @param {number} year - The year value.
 * @param {number} month - The month value (1-12).
 * @return {number} The number of days in the given month for the given year.
 *
 * @example
 * // Returns 29
 * daysInMonth(2020, 2)
 */
function daysInMonth(year, month) {
    if (typeof year !== "number" || !Number.isInteger(year) || year < 0 || typeof month !== "number" || !Number.isInteger(month) || month < 1 || month > 12) {
        throw new Error("Invalid year and/or month");
    }

    // If month is February
    if (month === 2) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0) ? 29 : 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        // April, June, September, November has 30 days
        return 30;
    } else {
        // January, March, May, July, August, October, December has 31 days
        return 31;
    }
}

module.exports = {
    daysInMonth
};