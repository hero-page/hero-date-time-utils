/* eslint-disable */ 

/**
 * Takes a Date object or Unix timestamp and returns a new Date object set at the end of the day (23:59:59) for the input date.
 *
 * @param {(Date|number)} inputDate - The Date object or Unix timestamp to set as end of day.
 * @return {Date} A new Date object set at the end of the day for the input date.
 * @throws {TypeError} Will throw an error if the input is not a Date object or Unix timestamp.
 * @example
 *   const endOfDayDate = endOfDay(new Date("2021-10-10"));
 *   console.log(endOfDayDate); // ---> 2021-10-10T23:59:59.000Z (Date object)
 */
function endOfDay(inputDate) {
    if (!(inputDate instanceof Date) && typeof inputDate !== "number") {
        throw new TypeError("Invalid input: input must be a Date object or Unix timestamp");
    }

    const date = new Date(inputDate);
    date.setHours(23, 59, 59, 999);

    return date;
}

module.exports = {
    endOfDay
};