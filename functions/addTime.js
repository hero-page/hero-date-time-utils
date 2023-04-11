/* eslint-disable */ 

/**
 * Adds a specified amount of time to a given Date object or Unix timestamp.
 *
 * @param {Date | number} date - The Date object or Unix timestamp to add time to.
 * @param {number} value - The amount of time to add.
 * @param {string} unit - The unit of time (seconds, minutes, hours, days, months, years).
 * @return {Date} A new Date object with the added time.
 * @example
 * const newDate = addTime(new Date(), 5, 'minutes');
 */
function addTime(date, value, unit) {
    // Ensure that date is a Date object or a Unix timestamp, value is integer and unit is a valid time unit
    if (!(date instanceof Date) && typeof date !== 'number' || !Number.isInteger(value) || !['seconds', 'minutes', 'hours', 'days', 'months', 'years'].includes(unit)) {
        throw new Error('Invalid input value(s)');
    }

    // Create a new Date object from input date
    const newDate = new Date(date);

    // Add the specified time value to the new Date object based on the specified time unit
    switch (unit) {
        case 'seconds':
            newDate.setSeconds(newDate.getSeconds() + value);
            break;
        case 'minutes':
            newDate.setMinutes(newDate.getMinutes() + value);
            break;
        case 'hours':
            newDate.setHours(newDate.getHours() + value);
            break;
        case 'days':
            newDate.setDate(newDate.getDate() + value);
            break;
        case 'months':
            newDate.setMonth(newDate.getMonth() + value);
            break;
        case 'years':
            newDate.setFullYear(newDate.getFullYear() + value);
            break;
        default:
            throw new Error('Invalid time unit');
    }

    return newDate;
}

module.exports = {
    addTime
};