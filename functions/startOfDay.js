/* eslint-disable */ 

/**
 * Takes a Date object or Unix timestamp and returns a new Date object set at the start of the day (00:00:00) for the input date.
 *
 * @param {(Date|number)} input - The date object or Unix timestamp.
 * @return {Date} A new Date object set at the start of the day for the input date.
 * @throws {Error} If the input is not a Date object or Unix timestamp.
 *
 * @example
 * const inputDate = new Date("2021-08-01T08:00:00");
 * const startOfDayDate = startOfDay(inputDate);
 * console.log(startOfDayDate); // outputs "2021-08-01T00:00:00.000Z"
 */
function startOfDay(input) {
    if (!(input instanceof Date) && typeof input !== "number") {
        throw new Error("Input must be a Date object or Unix timestamp.");
    }

    const date = new Date(input);
    date.setHours(0, 0, 0, 0);
    return date;
}

module.exports = {
    startOfDay
};