
_This entire repository was created completely with **AI**, using the [hero-ai-package-creator](https://github.com/hero-page/hero-ai-package-creator), which is **open-source**, uses **GPT-4**, and is written & maintained by [**Sam Chahine**](https://hero.page/samir)_ ❣️🧞‍♀️ 



# hero-date-time-utils

A collection of functions for handling dates and times, such as formatting, calculating differences, converting to different time zones, and more.

## Functions

### formatDate

Takes a Date object or Unix timestamp (milliseconds since January 1 1970) and a format string, and returns a formatted string. Format string may contain placeholders to insert parts of the date. For example, `formatDate(new Date(), 'MMMM Do, YYYY')` will return 'January 1st, 2022'. Should handle leap years and edge cases such as the year 2000 correctly. Rejects invalid inputs such as when the Unix timestamp is negative or the format string contains unrecognized placeholders.

### calculateDifference

Takes two Date objects or Unix timestamps and returns the time difference between them in a specified unit (seconds, minutes, hours, days, months, years). Automatically handles leap years and daylight-saving time changes. Accepts negative differences (e.g., when the first input date is later than the second), but rejects non-Date or non-Unix timestamp inputs.

### convertTimeZone

Takes a Date object or Unix timestamp, its current time zone (represented as UTC offset in minutes), and the desired time zone (represented as UTC offset in minutes), and converts the date to match its new time zone. Returns a new Date object with the converted time. Handles edge cases like crossing the International Date Line, but rejects non-Date or non-Unix timestamp inputs and non-integer time zones.

### startOfDay

Takes a Date object or Unix timestamp and returns a new Date object set at the start of the day (00:00:00) for the input date. Rejects non-Date or non-Unix timestamp inputs.

### endOfDay

Takes a Date object or Unix timestamp and returns a new Date object set at the end of the day (23:59:59) for the input date. Rejects non-Date or non-Unix timestamp inputs.

### getUnixTimestamp

Takes a Date object and returns its Unix timestamp (milliseconds since January 1 1970). Rejects non-Date inputs or negative Unix timestamps.

### getDateFromUnix

Takes a Unix timestamp (milliseconds since January 1 1970) and returns a Date object. Rejects non-Unix timestamp inputs or negative Unix timestamps.

### isLeapYear

Takes a year number and returns a boolean value indicating whether it is a leap year. Handles edge cases like the year 2000 correctly. Rejects non-integer or negative year values.

### daysInMonth

Takes a year number and a month number (1-12) and returns the number of days in that month, considering leap years. Rejects non-integer, negative, or out-of-range year and month values.

### addTime

Takes a Date object or Unix timestamp, a value, and a time unit (seconds, minutes, hours, days, months, years), and returns a new Date object with the added time. Automatically handles leap years and daylight-saving time changes, but rejects non-Date or non-Unix timestamp inputs, non-integer values, or non-recognized time units.

---

[Sam Chahine](https://github.com/kingmeers), at [Hero](https://hero.page)
                

### Tests for addTime

![addTime](https://img.shields.io/badge/addTime()-5%20passed%2C%200%20failed.-13b285)

### Tests for endOfDay

![endOfDay](https://img.shields.io/badge/endOfDay()-1%20passed%2C%202%20failed.-ff69b4)

### Tests for formatDate

![formatDate](https://img.shields.io/badge/formatDate()-1%20passed%2C%204%20failed.-ff69b4)

### Tests for convertTimeZone

![convertTimeZone](https://img.shields.io/badge/convertTimeZone()-2%20passed%2C%201%20failed.-ff69b4)

### Tests for getUnixTimestamp

![getUnixTimestamp](https://img.shields.io/badge/getUnixTimestamp()-3%20passed%2C%201%20failed.-ff69b4)

### Tests for isLeapYear

![isLeapYear](https://img.shields.io/badge/isLeapYear()-6%20passed%2C%200%20failed.-13b285)

### Tests for startOfDay

![startOfDay](https://img.shields.io/badge/startOfDay()-3%20passed%2C%200%20failed.-13b285)

### Tests for calculateDifference

![calculateDifference](https://img.shields.io/badge/calculateDifference()-1%20passed%2C%204%20failed.-ff69b4)

### Tests for getDateFromUnix

![getDateFromUnix](https://img.shields.io/badge/getDateFromUnix()-4%20passed%2C%200%20failed.-13b285)

### Tests for daysInMonth

![daysInMonth](https://img.shields.io/badge/daysInMonth()-4%20passed%2C%200%20failed.-13b285)