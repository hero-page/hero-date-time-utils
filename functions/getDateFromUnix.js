/* eslint-disable */ 

/**
 * Takes a Unix timestamp (milliseconds since January 1 1970) and returns a Date object.
 * Rejects non-Unix timestamp inputs or negative Unix timestamps.
 *
 * @param {number} unixTimestamp - The Unix timestamp to convert into a Date object.
 * @return {Date|null} A Date object representing the Unix timestamp or null for invalid inputs.
 *
 * @example
 * // Get the current date using the current Unix timestamp.
 * const currentDate = getDateFromUnix(Date.now() * 1000);
 */
function getDateFromUnix(unixTimestamp) {
    if (typeof unixTimestamp !== "number" || unixTimestamp < 0) {
        return null;
    }

    return new Date(unixTimestamp);
}

module.exports = {
    getDateFromUnix
};