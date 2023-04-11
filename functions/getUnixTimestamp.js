/* eslint-disable */ 

/**
 * Takes a Date object and returns its Unix timestamp (milliseconds since January 1 1970).
 * Rejects non-Date inputs or negative Unix timestamps.
 *
 * @param {Date} inputDate - The Date object to convert to a Unix timestamp.
 * @return {number|null} The Unix timestamp in milliseconds, or null if the input is non-Date or negative.
 * 
 * @example
 * const date = new Date("2022-09-22T14:30:00");
 * const unixTimestamp = getUnixTimestamp(date); // Returns 1632408600000
 */
function getUnixTimestamp(inputDate) {
    if (!(inputDate instanceof Date)) {
        return null;
    }

    const timestamp = inputDate.getTime();

    if (timestamp < 0) {
        return null;
    }

    return timestamp;
}

module.exports = {
    getUnixTimestamp
};