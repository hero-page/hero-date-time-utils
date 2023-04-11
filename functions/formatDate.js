/* eslint-disable */ 

/**
 * Formats a date string from a Date object or Unix timestamp according to the provided format string.
 *
 * @param {Date|number} inputDate - The input date as a Date object or Unix timestamp (in milliseconds).
 * @param {string} format - The format string containing placeholders to insert parts of the date.
 * @return {string} The formatted date string.
 * @example
 * formatDate(new Date(), 'MMMM Do, YYYY') // returns 'January 1st, 2022'.
 * formatDate(1609459200000, 'MMMM Do, YYYY') // returns 'January 1st, 2021'.
 */
function formatDate(inputDate, format) {
    if (typeof inputDate === 'number' && inputDate >= 0) {
        inputDate = new Date(inputDate);
    }

    if (inputDate instanceof Date && !isNaN(inputDate.getTime())) {
        const pad = (num) => String(num).padStart(2, '0');

        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'];

        const ordinal = (day) => {
            if (day % 10 === 1 && day !== 11) return `${day}st`;
            if (day % 10 === 2 && day !== 12) return `${day}nd`;
            if (day % 10 === 3 && day !== 13) return `${day}rd`;
            return `${day}th`;
        };

        const replaceMap = {
            'MMMM': monthNames[inputDate.getMonth()],
            'MM': pad(inputDate.getMonth() + 1),
            'M': inputDate.getMonth() + 1,
            'DDo': ordinal(inputDate.getDate()),
            'DD': pad(inputDate.getDate()),
            'D': inputDate.getDate(),
            'YYYY': inputDate.getFullYear(),
            'YY': pad(inputDate.getFullYear() % 100)
        };

        const pattern = new RegExp('(' + Object.keys(replaceMap).join('|') + ')', 'g');

        return format.replace(pattern, (match) => replaceMap[match]);
    }

    throw new Error('Invalid input date or format string.');
}

module.exports = {
    formatDate
};