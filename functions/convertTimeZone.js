/* eslint-disable */ 

/**
 * Converts a Date object or Unix timestamp to match its new time zone.
 *
 * @param {(Date|number)} date - The Date object or Unix timestamp to convert.
 * @param {number} currentTimeZone - The current time zone represented as UTC offset in minutes.
 * @param {number} desiredTimeZone - The desired time zone represented as UTC offset in minutes.
 * @return {Date} A new Date object with the converted time.
 * @example
 * // Convert a Date object from UTC+0 to UTC+60
 * convertTimeZone(new Date('2022-01-01T00:00:00Z'), 0, 60);
 * // Returns: 2022-01-01T01:00:00.000Z
 */
function convertTimeZone(date, currentTimeZone, desiredTimeZone) {
    // Check for invalid inputs
    if (!(date instanceof Date) && typeof date !== "number") {
        throw new Error("Invalid input: Date object or Unix timestamp expected");
    }
    if (!Number.isInteger(currentTimeZone) || !Number.isInteger(desiredTimeZone)) {
        throw new Error("Invalid input: Integer time zones expected");
    }

    // Convert the Unix timestamp (if provided) to a Date object
    const inputDate = (date instanceof Date) ? date : new Date(date * 1000);

    // Calculate the difference in timezone offsets
    const timezoneOffset = desiredTimeZone - currentTimeZone;
    
    // Adjust the date by the difference in timezone offsets in minutes
    inputDate.setUTCMinutes(inputDate.getUTCMinutes() + timezoneOffset);
    
    return inputDate;
}

module.exports = {
    convertTimeZone
};