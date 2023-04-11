/* eslint-disable */ 

/**
 * Calculate the time difference between two Date objects or Unix timestamps.
 *
 * @param {Date|number} date1 - The first date or Unix timestamp.
 * @param {Date|number} date2 - The second date or Unix timestamp.
 * @param {string} unit - The unit of time difference to return (seconds, minutes, hours, days, months, years).
 * @return {number} The time difference between the two dates in the specified unit.
 *
 * @example
 * // Calculate the time difference between two dates in days
 * const date1 = new Date(2021, 10, 1);
 * const date2 = new Date(2021, 10, 5);
 * calculateDifference(date1, date2, 'days'); // Returns 4
 */
function calculateDifference(date1, date2, unit) {
    // Ensure input is of correct type
    if (!(date1 instanceof Date) && typeof date1 !== 'number') {
        throw new Error('date1 must be a Date object or Unix timestamp');
    }
    if (!(date2 instanceof Date) && typeof date2 !== 'number') {
        throw new Error('date2 must be a Date object or Unix timestamp');
    }

    // Convert inputs to Date objects if they are Unix timestamps
    const dateObj1 = date1 instanceof Date ? date1 : new Date(date1);
    const dateObj2 = date2 instanceof Date ? date2 : new Date(date2);

    // Calculate time difference in milliseconds
    const differenceMilliseconds = dateObj1.getTime() - dateObj2.getTime();

    // Convert milliseconds to desired unit
    switch (unit.toLowerCase()) {
        case 'seconds':
            return differenceMilliseconds / 1000;
        case 'minutes':
            return differenceMilliseconds / 60000;
        case 'hours':
            return differenceMilliseconds / 3600000;
        case 'days':
            return differenceMilliseconds / 86400000;
        case 'months': {
            const years = (dateObj1.getFullYear() - dateObj2.getFullYear());
            const months = (dateObj1.getMonth() - dateObj2.getMonth());
            return years * 12 + months;
        }
        case 'years':
            return dateObj1.getFullYear() - dateObj2.getFullYear();
        default:
            throw new Error('Invalid unit. Valid units: seconds, minutes, hours, days, months, years');
    }
}

module.exports = {
    calculateDifference
};